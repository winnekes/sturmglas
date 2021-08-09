import { Arg, Authorized, Ctx, Query, Resolver } from "type-graphql";
import {getRepository, Repository} from "typeorm";
import { Context } from "../graphql-server";
import { Emotion, Mood } from "../entities/mood-entity";
import { MoodType } from "./mood-type";

@Resolver()
export class MoodQueries {
  private moodRepository = getRepository("Mood") as Repository<Mood>;

  @Authorized()
  @Query((returns) => [MoodType])
  async moods(@Ctx() context: Context): Promise<MoodType[]> {
    console.log({ context });
    const moods = await this.moodRepository.find({
      relations: ["user"],
      where: { user: { authId: context.authId } },
    });
    console.log({ moods });
    return moods;
  }

  @Query((returns) => [MoodType])
  recipes() {
    return [{ id: 1, title: "aaa", creationDate: new Date() }];
  }
}
