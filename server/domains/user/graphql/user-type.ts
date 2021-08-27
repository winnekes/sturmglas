import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class UserType {
  @Field(type => Int)
  id!: number;

  @Field()
  username!: string;

  @Field()
  pictureUrl!: string;

  @Field()
  lastLogin!: Date;

  @Field()
  refreshToken!: "string";

  @Field()
  createdAt!: Date;
}
