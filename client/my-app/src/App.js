import "./styles.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftNavBar from "./components/LeftNavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DailyActivityPage from "./pages/DailyActivityPage";
import PreviousActivitiesPage from "./pages/PreviousActivitiesPage";
import ParentNotesPage from "./pages/ParentNotesPage";

export default function App() {
  return (
    <Router>
      <div className="container">
        <LeftNavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/daily-activity" element={<DailyActivityPage />} />
            <Route path="/previous-activities" element={<PreviousActivitiesPage />} />
            <Route path="/parent-notes" element={<ParentNotesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}




// import "./styles.css";
// import React, { useState } from 'react';
// import Dropdown from './components/Dropdown';
// // import LeftNavBar from "./components/LeftNavBar";

// export default function App() {
//   const [selected, setSelected] = useState("Choose One");

//   return (
//     <div className="container">
//       <h2 style={{ textAlign: "center" }}>Welcome To Your Daily Activity!</h2>
//         <Dropdown selected={selected} setSelected={setSelected} />
//     </div>
//   );
// };
