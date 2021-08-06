import "reflect-metadata";
import { ApolloServer, gql } from "apollo-server-micro";
import type { PageConfig } from "next";
import Cors from "micro-cors";

const cors = Cors();

// TODO graphql-codegen
// TODO type-graphql
const typeDefs = gql`
  type Product {
    # id
    id: Int
    name: String
    price: Int
  }

  type Query {
    blipb: [Product]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    blipb: () => {
      return [{ id: 1, name: "", price: 30 }];
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

await apolloServer.start();

export default cors((req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  return apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

// disable next js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
