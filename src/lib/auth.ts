import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const mongoUrl = process.env.MONGODB_URL;

if (!mongoUrl) {
  throw new Error("MONGODB_URL is not defined in environment variables.");
}

const client = new MongoClient(mongoUrl);

await client.connect();

const db = client.db("TrendyHaat");

export const auth = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },

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