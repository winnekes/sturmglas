import { getSession } from "@auth0/nextjs-auth0";
import { ApolloServer } from "apollo-server-micro";
import { IncomingMessage, ServerResponse } from "http";
import { AuthChecker, buildSchema, NonEmptyArray } from "type-graphql";
import { User } from "./user/entities/user-entity";
import { AddMoodMutation } from "./mood/graphql/add-mood-mutation";
import { LatestMoodQuery } from "./mood/graphql/latest-mood-query";
import { MoodQuery } from "./mood/graphql/mood-query";
import { MoodsQuery } from "./mood/graphql/moods-query";
import { ProfileQuery } from "./user/graphql/profile-query";
import { SaveRefreshTokenMutation } from "./user/graphql/save-refresh-token-mutation";
import { getUser } from "./utils/get-user";

export interface Context {
  authId?: string;
  user?: User;
}

export const startGraphqlServer = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const queries: NonEmptyArray<Function> = [
    LatestMoodQuery,
    MoodsQuery,
    MoodQuery,
    ProfileQuery,
  ];
  const mutations: NonEmptyArray<Function> = [
    AddMoodMutation,
    SaveRefreshTokenMutation,
  ];

  const authId: string = getSession(req, res)?.user.sub;
  const user = authId && (await getUser(authId));

  const authChecker: AuthChecker<Context> = ({ context }) => {
    return !!context.user;
  };

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      authChecker,
      resolvers: [...queries, ...mutations],
    }),
    context: { authId, user },
  });

  await apolloServer.start();
  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};
