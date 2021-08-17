import { IsDate, IsEnum } from "class-validator";
import { GraphQLBoolean } from "graphql";
import {
  Arg,
  Authorized,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  Resolver,
} from "type-graphql";
import { DeleteResult, getRepository, Repository } from "typeorm";
import { Context } from "../../../graphql-server";
import { Emotion, Mood } from "../entities/mood-entity";
import { MoodType } from "./mood-type";

@InputType()
class DeleteMoodInputType {
  @Field(type => Int)
  id!: number;
}

@Resolver()
export class DeleteMoodMutation {
  private moodRepository = getRepository("Mood") as Repository<Mood>;

  @Authorized()
  @Mutation(returns => GraphQLBoolean)
  async deleteMood(
    @Arg("data") data: DeleteMoodInputType,
    @Ctx() context: Context
  ): Promise<boolean> {
    if (!context.authId || !context.user) {
      throw new Error("No user set on context");
    }

    const mood = await this.moodRepository.findOne({
      where: { user: context.user, id: data.id },
    });

    if (!mood) {
      throw new Error("Mood not found");
    }

    await this.moodRepository.delete(mood.id);
    return true;
  }
}
