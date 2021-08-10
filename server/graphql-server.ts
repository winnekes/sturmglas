import { Claims, getSession } from "@auth0/nextjs-auth0";
import { ApolloServer } from "apollo-server-micro";
import { IncomingMessage, ServerResponse } from "http";
import { AuthChecker, buildSchema } from "type-graphql";
import { MoodQueries } from "./mood/moods-query";

export interface Context {
  authId?: string | null;
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
      resolvers: [MoodQueries],
      emitSchemaFile: true,
    }),
    context: { authId: getSession(req, res)?.user.sub },
  });

  await apolloServer.start();
  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};
