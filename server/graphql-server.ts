import { getSession } from "@auth0/nextjs-auth0";
import { ApolloServer } from "apollo-server-micro";
import { IncomingMessage, ServerResponse } from "http";
import { AuthChecker, buildSchema } from "type-graphql";
import { getRepository, Repository } from "typeorm";
import { User } from "./identity-access/entities/user-entity";
import { AddMoodMutation } from "./mood/graphql/add-mood-mutation";
import { MoodQuery } from "./mood/graphql/mood-query";
import { MoodsQuery } from "./mood/graphql/moods-query";

export interface Context {
  authId?: string | null;
  user?: User;
}

const getUser = (authId: string): Promise<User | undefined> => {
  const userRepository = getRepository("User") as Repository<User>;
  return userRepository.findOne({
    where: { authId },
  });
};
export const startGraphqlServer = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  // If GraphQL query or mutation is protected via @Authorized decorator this checks if user exists in session
  const authChecker: AuthChecker<Context> = ({ context }) => {
    const test = getSession(req, res);
    return !!test?.user;
  };

  const authId = getSession(req, res)?.user.sub;

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      authChecker,
      resolvers: [MoodsQuery, MoodQuery, AddMoodMutation],
    }),
    context: { authId, user: authId && (await getUser(authId)) },
  });

  await apolloServer.start();
  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};
