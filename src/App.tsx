import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import SkillsList from "./components/SkillsList";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import { useState } from "react";
import "../src/App.css";

function App() {
  const [isActive, setIsActive] = useState(true);

  const toggleStyle = () => {
    setIsActive(!isActive);
  };

  const activeStyle = {
    backgroundColor: isActive ? '#16181d' : '#f4f6f8',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={activeStyle}>
      <NavBar toggleStyle={toggleStyle} isActive={isActive} />
      <Landing isActive={isActive} />
      <AboutMe isActive={isActive} />
      <SkillsList isActive={isActive} />
      <ExperienceSection isActive={isActive} />
      <EducationSection isActive={isActive} />
      <ProjectSection isActive={isActive} />
      <Contact isActive={isActive} />
    </div>
  );
}

export default App;