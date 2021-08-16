import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
class DatasetOutputType {
  @Field((type) => Int)
  yesterday!: number;

  @Field((type) => Int)
  today!: number;
}

@ObjectType()
export class FitnessType {
  @Field((type) => DatasetOutputType)
  steps!: DatasetOutputType;

  @Field((type) => DatasetOutputType)
  heartRate!: DatasetOutputType;
  //
  // @Field((type) => DatasetOutputType)
  // sleep!: DatasetOutputType;
}
