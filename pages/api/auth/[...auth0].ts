import { handleAuth, handleCallback, handleLogin } from "@auth0/nextjs-auth0";
import { afterCallback } from "../../../server/utils/after-login-callback";

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "/oasis",
    });
  },
});
