import { Arg, Field, Int, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class Recipe {
  @Field((type) => Int)
  id!: number;

  @Field()
  title!: string;

  @Field()
  creationDate!: Date;
}

@Resolver(Recipe)
export class RecipeResolver {
  @Query((returns) => Recipe)
  recipe(@Arg("id") id: string): Recipe {
    return { id: 1, title: "aaa", creationDate: new Date() };
  }

  @Query((returns) => [Recipe])
  recipes() {
    return [{ id: 1, title: "aaa", creationDate: new Date() }];
  }
}
