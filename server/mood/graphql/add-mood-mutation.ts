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
  mood!: Emotion;

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
  addMood(
    @Arg("data") data: AddMoodInputType,
    @Ctx() context: Context
  ): Promise<MoodType> {
    const mood = this.moodRepository.create();
    mood.mood = data.mood;
    mood.date = data.date;
    mood.description = data.description;

    return this.moodRepository.save(mood);
  }
}
