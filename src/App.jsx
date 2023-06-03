import React, { useState, useEffect } from "react";
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
import CommentSection from "./components/CommentSection";
import SavedRecipe from "./views/SavedRecipe";
import AllDone from "./views/AllDone";
import Logout from "./views/Logout";
import RecipesPage from "./views/RecipesPage";
import AddShoppingCategory from "./views/AddShoppingCategory";
import LoadingIndicator from "./components/LoadingIndicator"; // Import the loading indicator component
import { useNavigate } from "react-router-dom";

const closeModal = () => {
  // Implementation for closing the modal
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate the data fetch delay from Appwrite
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Function to set the authentication status once the user logs in or signs up successfully
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("Working...it should display the hamburger");
  };

  return (
    <Router>
      {isLoading ? (
        <LoadingIndicator /> // Show the loading indicator while data is being fetched
      ) : (
        <>
          <Routes>
            <Route path="/" element={<SignUp handleLogin={handleLogin} />} />
            <Route path="/Onboarding" element={<Onboarding />} />
            <Route path="/Home" element={<Homepage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route
              path="/Login"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route path="/Scanner" element={<Scanner />} />
            <Route path="/Shopping" element={<Shopping />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Messaging" element={<Messaging />} />
            <Route path="/YourLibrary" element={<YourLibrary />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route
              path="/Achievement"
              element={<Achievement closeModal={closeModal} />}
            />
            <Route path="/NewRecipe" element={<NewRecipe />} />
            <Route
              path="/UserPreferencePage"
              element={<UserPreferencePage />}
            />
            <Route path="/ViewDish/:id" element={<ViewDish />} />
            <Route path="/RecipeDirection/:id" element={<RecipeDirection />} />
            <Route path="/CommentSection" element={<CommentSection />} />
            <Route
              path="/SavedRecipe/:category"
              element={<SavedRecipe closeModal={closeModal} />}
            />
            <Route path="/AllDone" element={<AllDone />} />
            <Route
              path="/AddShoppingCategory"
              element={<AddShoppingCategory />}
            />
            <Route path="/RecipesPage" element={<RecipesPage />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
          {isLoggedIn && (
            <>
              <Navigation />
              <SideBarNavigation />
            </>
          )}
        </>
      )}
    </Router>
  );
}

export default App;
