import {
  Args,
  ArgsType,
  Authorized,
  Ctx,
  Field,
  Int,
  Query,
  Resolver,
} from "type-graphql";
import { getRepository, Repository } from "typeorm";
import { Context } from "../../graphql-server";
import { Mood } from "../entities/mood-entity";
import { MoodType } from "./mood-type";

@ArgsType()
class GetMoodArgs {
  @Field((type) => Int)
  id!: number;
}

@Resolver()
export class MoodQuery {
  private moodRepository = getRepository("Mood") as Repository<Mood>;

  @Authorized()
  @Query((returns) => MoodType)
  mood(
    @Args() args: GetMoodArgs,
    @Ctx() context: Context
  ): Promise<MoodType | undefined> {
    return this.moodRepository.findOne({
      relations: ["user"],
      where: { user: { authId: context.authId }, id: args.id },
    });
  }
}
