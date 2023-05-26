import React from "react";
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
import Achievement from "./views/Achievement";
import UserPreferencePage from "./views/UserPreferencePage";
import NewRecipe from "./views/NewRecipe";
import ViewDish from "./views/ViewDish";
import RecipeDirection from "./views/RecipeDirection";
import MyProfile from "./views/MyProfile";

const closeModal = () => {
  // Implementation for closing the modal
};

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
        <Route path="/MyProfile" element={<MyProfile />} />
        {/* <Route path="/Achievement" element={<Achievement />} /> */}
        <Route
          path="/Achievement"
          element={<Achievement closeModal={closeModal} />}
        />
        <Route path="/NewRecipe" element={<NewRecipe />} />
        <Route path="/UserPreferencePage" element={<UserPreferencePage />} />
        <Route path="/ViewDish/:id" element={<ViewDish />} />
        <Route path="/RecipeDirection/:id" element={<RecipeDirection />} />
      </Routes>
      <Navigation />
      <SideBarNavigation />
    </Router>
  );
}

export default App;
