import { Authorized, Ctx, Query, Resolver } from "type-graphql";
import * as util from "util";
import { Context } from "../../graphql-server";
import { getHeartRate, getSteps } from "../../utils/fitness-client";
import { FitnessType } from "./fitness-type";

@Resolver()
export class FitnessQuery {
  @Authorized()
  @Query((returns) => FitnessType)
  async fitness(@Ctx() context: Context): Promise<FitnessType | undefined> {
    if (!context.authId || !context.user) {
      throw new Error("No user set on context");
    }
    try {
      const heartRate = await getHeartRate(context.user.refreshToken);
      const steps = await getSteps(context.user.refreshToken);

      console.log(
        util.inspect({ heartRate, steps }, { showHidden: false, depth: null })
      );

      const mapHeartRate = (data: any) => {
        const row = data.bucket[0].dataset[0].point[0];
        return (row.fpVal as number) || 0;
      };
      return {
        steps: { today: 0, yesterday: 0 },
        heartRate: { today: 0, yesterday: 0 },
      };
    } catch (e) {
      console.log({ e });
    }
  }
}
