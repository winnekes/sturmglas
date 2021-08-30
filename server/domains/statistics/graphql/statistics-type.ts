import { Field, Int, ObjectType } from "type-graphql";
import { Emotion } from "../../mood/entities/mood-entity";

@ObjectType()
class DatasetOutputType {
  @Field(type => Int)
  yesterday!: number;

  @Field(type => Int)
  today!: number;
}

@ObjectType()
export class MoodCountType {
  @Field(type => Emotion)
  emotion!: Emotion;

  @Field(type => Int)
  count!: number;
}

@ObjectType()
export class StatisticsType {
  @Field(type => [MoodCountType])
  moodCounts!: MoodCountType[];

  // TODO: sleep data
  // @Field((type) => Int)
  // sleepInHours!: number;
}
