import { MongoClient } from "mongodb";

import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";
import { betterAuth } from "better-auth";

const mongoUrl = process.env.MONGODB_URL;

if (!mongoUrl) {
  throw new Error("MONGODB_URL is not defined.");
}

const globalForMongo = global as typeof globalThis & {
  mongoClient?: MongoClient;
};

const client =
  globalForMongo.mongoClient ?? new MongoClient(mongoUrl);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

await client.connect();

const db = client.db("TrendyHaat");

export const auth = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },
  session : {
    cookieCache : {
      enabled : true ,
      strategy  : 'jwt' ,
      maxAge  : 7 * 24 * 60 * 60
    }
  },
  plugins : [
    jwt()
  ],

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "User",
      },
      createdAt: {
        type: "date",
        defaultValue: () => new Date(),
      },
      updatedAt: {
        type: "string",
        defaultValue: "Never Updated",
      },
    },
  },
});