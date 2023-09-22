import { readFileSync } from "fs";
import { join } from "path";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { Resolvers } from "@apollo/client/core/types";
import { resolvers } from "../../apollo/resolver";

const typeDefs = readFileSync(
  join(process.cwd(), "apollo/documents/schema.gql"),
  "utf-8"
);

const apolloServer = new ApolloServer<Resolvers>({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer);
