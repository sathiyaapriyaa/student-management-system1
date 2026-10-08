import { useState } from "react";
import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";

  const completePractice = () => {
    setPracticeCount(practiceCount + 1);
  };

  const resetPractice = () => {
    setPracticeCount(0);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <Header />

      {showProfile && (
        <StudentProfile
          name={studentName}
          department={studentDepartment}
          year={studentYear}
          practiceCount={practiceCount}
        />
      )}

      <button onClick={completePractice}>
        Complete Practice
      </button>

      <button onClick={resetPractice}>
        Reset
      </button>

      <button onClick={toggleProfile}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      <Footer />
    </div>
  );
}

export default App;