import { Client, Account, Databases, Query, Storage } from "appwrite";
import { ID } from "appwrite";
import { v4 as uuidv4 } from "uuid";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("64676cf547e8830694b8"); // Your project ID

export const account = new Account(client);

export const storage = new Storage(client);

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


export const saveProfile = async (profile) => {
  try {
    const documentId = uuidv4(); // Generate a random UUID
    console.log("Profile:", profile);
    console.log("Document ID:", documentId); // Log the generated UUID

    const savedProfile = await databases.createDocument(
      
      "64773737337f23de254d", // Your project ID
      "647b7649a8bd0a7073be", // Collection ID for the user profiles collection
      
        documentId,
       profile, // Pass the profile object as the value for the 'data' parameter
      
      
    );
    console.log("Saved Profile:", savedProfile);
    return savedProfile;
  } catch (error) {
    throw new Error(error);
  }
};



export const createRecipe = async (formData) => {
  try {
    const documentId = uuidv4(); // Generate a random UUID
    console.log('Recipe:', formData);
    console.log('Document ID:', documentId);

    const response = await databases.createDocument(
      "64773737337f23de254d", // Your project ID
      "647b9e24d59661e7bfbe", // Your collection ID
      documentId, // Use the generated UUID as the document ID
      formData,
    );

    console.log('Recipe created:', response);
    return response; // Optionally, return the created recipe document
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error;
  }
};







// const account = new Account(client);

// Register User
// createAccount: (email, password, name) => {
//   return api.provider
// }

// export const account = sdk.account;
