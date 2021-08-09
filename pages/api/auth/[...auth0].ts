import { handleAuth, handleCallback, Session } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { getRepository, Repository } from "typeorm";
import { initializeDatabase } from "../../../server/database-connection";
import { User } from "../../../server/entities/user-entity";

// Here magic happens through Auth0
// This exposes the following api paths:
//  - /api/auth/login
//  - /api/auth/logout
//  - /api/auth/callback
//  - /api/auth/me

// todo DB connection
// store user if not exists
const afterCallback = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session,
  state: {}
) => {
  await initializeDatabase();
  const userRepository = getRepository("User") as Repository<User>;
  const existingUser = await userRepository.findOne({
    where: { authId: session.user?.sub },
  });

  if (existingUser) {
    return session;
  }

  const user = userRepository.create();
  user.authId = session.user.sub ?? "";
  user.email = session.user.email ?? "";
  await userRepository.save(user);

  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
