import { IsDate, IsEnum } from "class-validator";
import {
  Arg,
  Authorized,
  Ctx,
  Field,
  InputType,
  Mutation,
  Resolver,
} from "type-graphql";
import { getRepository, Repository } from "typeorm";
import { Context } from "../../graphql-server";
import { Emotion, Mood } from "../entities/mood-entity";
import { MoodType } from "./mood-type";

@InputType()
export class AddMoodInputType {
  @IsEnum(Emotion)
  @Field((type) => Emotion)
  emotion!: Emotion;

  @IsDate()
  @Field()
  date!: Date;

  @Field()
  description!: string;
}

@Resolver()
export class AddMoodMutation {
  private moodRepository = getRepository("Mood") as Repository<Mood>;

  @Authorized()
  @Mutation((returns) => MoodType)
  async addMood(
    @Arg("data") data: AddMoodInputType,
    @Ctx() context: Context
  ): Promise<MoodType> {
    if (!context.user) {
      throw new Error("Something went wrong");
    }
    const mood = this.moodRepository.create();
    mood.user = context.user;
    mood.emotion = data.emotion;
    mood.date = data.date;
    mood.description = data.description;

    return this.moodRepository.save(mood);
  }
}
