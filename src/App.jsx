import "./App.css";
import { Client } from "appwrite";
import Onboarding from "./views/Onboarding";
import Navigation from "./components/Navigation";
import SideBarNavigation from "./components/SideBarNavigation";

function App() {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64676cf547e8830694b8");

  return (
    <>
  

<Onboarding/>
{/* <Navigation/> */}

<SideBarNavigation/>
    </>
  );
}

export default App;
