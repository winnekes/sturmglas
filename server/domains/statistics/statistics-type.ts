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
  @Field((type) => DatasetOutputType)
  streakCountInDays!: DatasetOutputType;

  @Field((type) => DatasetOutputType)
  goalsCompletedCount!: DatasetOutputType;
  //
  // @Field((type) => DatasetOutputType)
  // sleep!: DatasetOutputType;
}
