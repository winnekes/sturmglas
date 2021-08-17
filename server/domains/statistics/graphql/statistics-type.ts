import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
class DatasetOutputType {
  @Field((type) => Int)
  yesterday!: number;

  @Field((type) => Int)
  today!: number;
}

@ObjectType()
export class StatisticsType {
  @Field((type) => Int)
  streakCountInDays!: number;

  @Field((type) => DatasetOutputType)
  goalsCompletedCount!: DatasetOutputType;

  // TODO: sleep data
  // @Field((type) => Int)
  // sleepInHours!: number;
}
