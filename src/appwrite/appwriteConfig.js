import { Client, Account, Databases } from "appwrite";


const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("64676cf547e8830694b8");


export const account = new Account(client);

export const databases = new Databases(client);