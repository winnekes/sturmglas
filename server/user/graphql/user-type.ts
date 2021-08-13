import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class UserType {
  @Field((type) => Int)
  id!: number;

  @Field()
  firstName!: string;

  @Field()
  pictureUrl!: string;

  @Field()
  lastLogin!: Date;

  @Field()
  createdAt!: Date;
}
