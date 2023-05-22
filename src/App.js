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
            <Route path="/daily-activity-tracker/" element={<HomePage />} />
            <Route path="/daily-activity-tracker/profile" element={<ProfilePage />} />
            <Route path="/daily-activity-tracker/daily-activity" element={<DailyActivityPage />} />
            <Route path="/daily-activity-tracker/random-activity" element={<RandomActivityPage />} />
            <Route path="/daily-activity-tracker/parent-notes" element={<ParentNotesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
