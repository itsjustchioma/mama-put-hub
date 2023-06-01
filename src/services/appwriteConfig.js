import { Client, Account } from "appwrite";

const client = new Client();

// const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("64676cf547e8830694b8"); // Your project ID

export const account = client.account;