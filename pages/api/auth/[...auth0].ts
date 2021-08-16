import { handleAuth, handleCallback, Session } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { getRepository, Repository } from "typeorm";
import { initializeDatabase } from "../../../server/database-connection";
import { User } from "../../../server/domains/user/entities/user-entity";
import { afterCallback } from "../../../server/utils/after-login-callback";

// Here magic happens through Auth0
// This exposes the following api paths:
//  - /api/auth/login
//  - /api/auth/logout
//  - /api/auth/me

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
