import { IsDate, IsEnum } from "class-validator";
import { Arg, Authorized, Ctx, Field, InputType, Int, Mutation, Resolver } from "type-graphql";
import { getRepository, Repository } from "typeorm";
import { ServerContext } from "../../../context";
import { Emotion, Mood } from "../entities/mood-entity";
import { MoodType } from "./mood-type";

@InputType()
export class EditMoodInputType {
  @Field(type => Int)
  id!: number;

  @IsEnum(Emotion)
  @Field(type => Emotion)
  emotion!: Emotion;

  @IsDate()
  @Field()
  date!: Date;

  @Field()
  description!: string;
}

@Resolver()
export class EditMoodMutation {
  private moodRepository = getRepository("Mood") as Repository<Mood>;

  @Authorized()
  @Mutation(returns => MoodType)
  async editMood(
    @Arg("data") data: EditMoodInputType,
    @Ctx() context: ServerContext
  ): Promise<MoodType> {
    if (!context.authId || !context.user) {
      throw new Error("No user set on context");
    }

    const mood = await this.moodRepository.findOne({
      where: { user: context.user, id: data.id },
    });

    if (!mood) {
      throw new Error("Mood not found");
    }

    mood.user = context.user;
    mood.emotion = data.emotion;
    mood.date = data.date;
    mood.description = data.description;

    return this.moodRepository.save(mood);
  }
}
