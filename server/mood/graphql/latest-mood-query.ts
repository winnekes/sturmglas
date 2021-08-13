import { Authorized, Ctx, Query, Resolver } from "type-graphql";
import { getRepository, Repository } from "typeorm";
import { Context } from "../../graphql-server";
import { Mood } from "../entities/mood-entity";
import { MoodType } from "./mood-type";

@Resolver()
export class LatestMoodQuery {
  private moodRepository = getRepository("Mood") as Repository<Mood>;

  @Authorized()
  @Query((returns) => MoodType)
  async latestMood(@Ctx() context: Context): Promise<MoodType | undefined> {
    return this.moodRepository.findOne({
      relations: ["user"],
      where: { user: { authId: context.authId } },
      order: { date: "DESC" },
    });
  }
}
