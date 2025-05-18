import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AboutPage from "./pages/AboutPage";
import MissionPage from "./pages/MissionPage";
import Dashboard from "./components/Dashboard";
import { loadState, saveState } from "./utils/storageUtils";
import { AppState } from "./types";

function App() {
  const defaultState: AppState = { habits: [], theme: "light" };
  const [appState, setAppState] = useState<AppState>(defaultState);

  // Load initial state from localStorage
  useEffect(() => {
    const storedState = loadState();
    const initialState: AppState = storedState || defaultState;
    setAppState(initialState);

    // Apply theme to document
    document.documentElement.classList.toggle(
      "dark",
      initialState.theme === "dark"
    );
  }, []);

  const handleToggleTheme = () => {
    const newTheme: "light" | "dark" =
      appState.theme === "light" ? "dark" : "light";
    const updatedState: AppState = { ...appState, theme: newTheme };
    setAppState(updatedState);
    saveState(updatedState);

    // Apply theme
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Navbar theme={appState.theme} onToggleTheme={handleToggleTheme} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/mission" element={<MissionPage />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                habits={appState.habits}
                theme={appState.theme}
                onToggleTheme={handleToggleTheme}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
