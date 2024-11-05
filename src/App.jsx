import NavBar from "./components/NavBar.jsx";
import Landing from "./components/Landing.jsx";
import AboutMe from "./components/AboutMe.jsx";
import SkillsList from "./components/SkillsList.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import Contact from "./components/Contact.jsx";
import { useState } from "react";
import "../src/App.css";

function App() {
  const [isActive, setIsActive] = useState(true);

  const toggleStyle = () => {
    setIsActive(!isActive);
  };

  const activeStyle = {
    backgroundColor: isActive ? '#212529' : 'white',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={activeStyle}>
      <NavBar toggleStyle={toggleStyle} isActive={isActive} />
      <Landing isActive={isActive} />
      <AboutMe isActive={isActive} />
      <SkillsList isActive={isActive} />
      <ExperienceSection isActive={isActive} />
      <ProjectSection isActive={isActive} />
      <Contact isActive={isActive} />
    </div>
  );
}

export default App;