import "./App.css";
import { Client } from "appwrite";
import Onboarding from "./views/Onboarding";

function App() {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64676cf547e8830694b8");

  return (
    <>
      <h1 className="text-laurel-green font-sans">Hello World</h1>
      <p className="font-sans">Cook like a pro, Mamaput's got the flow!</p>
<Onboarding/>
    </>
  );
}

export default App;
