import { Authorized, Ctx, Query, Resolver } from "type-graphql";
import { getRepository, Repository } from "typeorm";
import { ServerContext } from "../../../context";
import { Mood } from "../../mood/entities/mood-entity";
import { StatisticsType } from "./statistics-type";

@Resolver()
export class LatestMoodQuery {
  private moodRepository = getRepository("Mood") as Repository<Mood>;

  @Authorized()
  @Query(returns => StatisticsType)
  async latestMood(@Ctx() context: ServerContext): Promise<StatisticsType | undefined> {
    if (!context.authId || !context.user) {
      throw new Error("No user set on context");
    }

    // TODO: logic for stats
    // SQL query for streak
    return undefined;
  }
}
