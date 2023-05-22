import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftNavBar from "./components/LeftNavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DailyActivityPage from "./pages/DailyActivityPage";
import RandomActivityPage from "./pages/RandomActivityPage";
import ParentNotesPage from "./pages/ParentNotesPage";

function App() {
  return (
    <Router>
      <div className="container">
        <LeftNavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/daily-activity" element={<DailyActivityPage />} />
            <Route path="/random-activity" element={<RandomActivityPage />} />
            <Route path="/parent-notes" element={<ParentNotesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
