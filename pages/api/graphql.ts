import "reflect-metadata";
import type { PageConfig } from "next";
import Cors from "micro-cors";
import { startGraphqlServer } from "../../server/graphql-server";

const cors = Cors();

// To access GraphQL endpoint on IoT device we need to enable Cors, Next.js disables CORS by default
export default cors((req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  return startGraphqlServer(req, res);
});

// This disables Next.js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
