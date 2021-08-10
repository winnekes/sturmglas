import { Arg, Authorized, Ctx, Int, Query, Resolver } from "type-graphql";
import { getRepository, Repository } from "typeorm";
import { Context } from "../graphql-server";
import { Mood } from "./mood-entity";
import { MoodType } from "./mood-type";

@Resolver()
export class MoodQueries {
  private moodRepository = getRepository("Mood") as Repository<Mood>;

  @Authorized()
  @Query((returns) => [MoodType])
  moods(@Ctx() context: Context): Promise<MoodType[]> {
    return this.moodRepository.find({
      relations: ["user"],
      where: { user: { authId: context.authId } },
    });
  }

  // TODO: separate class for args for easier validation
  @Query((returns) => MoodType)
  mood(
    @Arg("id", (type) => Int) id: number,
    @Ctx() context: Context
  ): Promise<MoodType | undefined> {
    return this.moodRepository.findOne({
      relations: ["user"],
      where: { user: { authId: context.authId }, id },
    });
  }
}
