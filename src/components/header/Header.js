import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperience, // Assuming singular in portfolio.js
  skillsSection,
  bigProjects, // Use this for display check
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperience.display;
  const viewProjects = bigProjects.display; // Check bigProjects display
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const cvLink = greeting.resumeLink; // Get CV link directly

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          {/* Corrected syntax using curly braces for literal strings */}
          <span className="grey-color">{' <'}</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">{'/>'}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          {cvLink && (
            <li>
              <a href={cvLink} target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          {/* Removed ToggleSwitch li */}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;