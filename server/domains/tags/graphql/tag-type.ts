import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class TagType {
  @Field(type => Int)
  id!: number;

  @Field()
  name!: string;

  @Field()
  icon!: string;

  @Field()
  createdAt!: Date;
}
