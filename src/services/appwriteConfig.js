import { Client, Account, Databases, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("64676cf547e8830694b8"); // Your project ID

export const account = new Account(client);

// Database≠
export const databases = new Databases(client, "64773737337f23de254d");
 


let promise = databases.listDocuments(
  "64773737337f23de254d",
  "647905d239ca167a89f1",
  [
      
  ]
);

promise.then(function (response) {
  console.log(response);
}, function (error) {
  console.log(error);
});
// const account = new Account(client);

// Register User
// createAccount: (email, password, name) => {
//   return api.provider
// }

// export const account = sdk.account;
