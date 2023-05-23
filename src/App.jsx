import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Scanner from "./views/Scanner";
import Settings from "./views/Settings";
import Messaging from "./views/Messaging";
import Homepage from "./views/Homepage";
import Onboarding from "./views/Onboarding";
import Profile from "./views/Profile";
import Shopping from "./views/Shopping";
import YourLibrary from "./views/YourLibrary";
import SideBarNavigation from "./components/Navigation/SideBarNavigation";
import Header from "./components/Header";
import ViewDish from "./views/ViewDish";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Scanner" element={<Scanner />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Messaging" element={<Messaging />} />
        <Route path="/YourLibrary" element={<YourLibrary />} />
        <Route path="/ViewDish" element={<ViewDish/>} />

      </Routes>
      <Navigation />
      <SideBarNavigation />
    </Router>

    // {/* <Onboarding /> */}
    // {/* <Navigation /> */}
    // {/* <SideBarNavigation /> */}
  );
}

export default App;
