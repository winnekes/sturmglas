import GraphQLJSON from "graphql-type-json";
import { Field, Int, ObjectType } from "type-graphql";
import { Column } from "typeorm";
import { UserSettings } from "../entities/user-entity";

@ObjectType()
export class UserType {
  @Field(type => Int)
  id!: number;

  @Field({ nullable: true })
  nickname!: string | null;

  @Field()
  pictureUrl!: string;

  @Field()
  lastLogin!: Date;

  @Field(type => GraphQLJSON)
  settings!: UserSettings;

  @Field(type => Int, { nullable: true })
  currentStreak!: number;

  @Field(type => Int, { nullable: true })
  longestStreak!: number;

  @Field()
  refreshToken!: "string";

  @Field()
  createdAt!: Date;
}
