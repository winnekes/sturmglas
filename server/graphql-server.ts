import { Claims, getSession, handleCallback } from "@auth0/nextjs-auth0";
import { ApolloServer } from "apollo-server-micro";
import { IncomingMessage, ServerResponse } from "http";
import { AuthChecker, buildSchema } from "type-graphql";
import { RecipeResolver } from "./graphql/mood/recipe-resolver";

export interface Context {
  user?: Claims | null;
}
export const startGraphqlServer = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  // If GraphQL query or mutation is protected via @Authorized decorator this checks if user exists in session
  const authChecker: AuthChecker<Context> = ({ context }) => {
    console.log({ req: req.headers });
    console.log({ context });
    const test = getSession(req, res);
    return !!test?.user;
  };

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      authChecker,
      resolvers: [RecipeResolver],
    }),
    context: { user: getSession(req, res)?.user },
  });

  await apolloServer.start();
  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};
