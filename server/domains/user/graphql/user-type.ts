import GraphQLJSON from "graphql-type-json";
import { Field, Int, ObjectType } from "type-graphql";
import { UserSettings } from "../entities/user-entity";

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

  @Field(type => GraphQLJSON)
  userSettings!: UserSettings;

  @Field()
  refreshToken!: "string";

  @Field()
  createdAt!: Date;
}
