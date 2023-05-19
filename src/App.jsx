import "./App.css";
import { Client } from "appwrite";

function App() {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64676cf547e8830694b8");

  return (
    <>
      <h1 className="text-red-500">Hello World</h1>
      <p>Cook like a pro, MamaPut's got the flow!</p>
    </>
  );
}

export default App;
