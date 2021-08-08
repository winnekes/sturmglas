import { handleAuth, handleCallback, Session } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

// Here magic happens through Auth0
// This exposes the following api paths:
//  - /api/auth/login
//  - /api/auth/logout
//  - /api/auth/callback
//  - /api/auth/me

// todo DB connection
// store user if not exists
const afterCallback = (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session,
  state: {}
) => {
  {
    console.log({ session });
  }
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
