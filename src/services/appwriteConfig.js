import { Client, Account, Databases, Query } from "appwrite";
import { ID } from "appwrite";
import { v4 as uuidv4 } from "uuid";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("64676cf547e8830694b8"); // Your project ID

export const account = new Account(client);

// Database≠
export const databases = new Databases(client, "64773737337f23de254d");

// let promise = account.createVerification('http://localhost:5173/Home');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

let promise = databases.listDocuments(
  "64773737337f23de254d",
  "647905d239ca167a89f1",
  [
    // Query.equal('food_name')
  ]
);

promise.then(
  function (response) {
    console.log(response);
  },
  function (error) {
    console.log(error);
  }
);

 export const userId = account.get();

userId.then(function (response) {
    console.log(response.$id);
}, function (error) {
    console.log(error);
});

export const saveBookmark = async (recipe) => {
  try {
    const documentId = uuidv4(); // Generate a random UUID
    console.log("Recipe:", recipe);
    console.log("Document ID:", documentId); // Log the generated UUID

   const savedRecipe = await databases.createDocument(
     "64773737337f23de254d", // Your project ID
     "6479a9441b13f7a9ad4d", // Collection ID for User Saved Recipe collection
     documentId, // Use the generated UUID as the document ID
     recipe
   );

    console.log("Saved Recipe:", savedRecipe);
    return savedRecipe;
  } catch (error) {
    throw new Error(error);
  }
};



// const account = new Account(client);

// Register User
// createAccount: (email, password, name) => {
//   return api.provider
// }

// export const account = sdk.account;
