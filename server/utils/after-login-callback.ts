import { Session } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { getRepository, Repository } from "typeorm";
import { initializeDatabase } from "../database-connection";
import { User } from "../user/entities/user-entity";

export const afterCallback = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session
) => {
  await initializeDatabase();
  const userRepository = getRepository("User") as Repository<User>;
  const user =
    (await userRepository.findOne({
      where: { authId: session.user?.sub },
    })) || userRepository.create();

  user.authId = session.user.sub ?? "";
  user.email = session.user.email ?? "";
  user.firstName = session.user.given_name ?? "";
  user.pictureUrl = session.user.picture ?? "";
  user.lastLogin = session.user.last_login ?? new Date();
  await userRepository.save(user);

  return session;
};
