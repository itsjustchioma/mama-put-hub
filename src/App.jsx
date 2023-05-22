import { Client } from "appwrite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Photos from "./views/Photos";
import Settings from "./views/Settings";
import Messaging from "./views/Messaging";
import Homepage from "./views/Homepage";
import Onboarding from "./views/Onboarding";
import Profile from "./views/Profile";

function App() {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64676cf547e8830694b8");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Messaging" element={<Messaging />} />
      </Routes>
      {/* <Navigation /> */}
    </Router>

    // {/* <Onboarding /> */}
    // {/* <Navigation /> */}
    // {/* <SideBarNavigation /> */}
  );
}

export default App;
