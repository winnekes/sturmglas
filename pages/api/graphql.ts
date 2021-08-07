import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import type { PageConfig } from "next";
import Cors from "micro-cors";
import { buildSchema } from "type-graphql";

import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { RecipeResolver } from "../../server/graphql/mood/recipe.resolver";

const cors = Cors();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  const schema = await buildSchema({
    resolvers: [RecipeResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();
  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

// disable next js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
