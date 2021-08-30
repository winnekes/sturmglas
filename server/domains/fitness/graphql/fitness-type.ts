import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
class DatasetOutputType {
  @Field(type => Int, { nullable: true })
  today!: number | undefined;
}

@ObjectType()
export class FitnessType {
  @Field(type => DatasetOutputType)
  steps!: DatasetOutputType;

  @Field(type => DatasetOutputType)
  heartRate!: DatasetOutputType;
  //
  // @Field((type) => DatasetOutputType)
  // sleep!: DatasetOutputType;
}
