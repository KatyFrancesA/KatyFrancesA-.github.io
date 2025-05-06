import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  if (!skillsSection.softwareSkills || skillsSection.softwareSkills.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            if (!skills || !skills.skillName || !skills.fontAwesomeClassname) {
              return null;
            }
            return (
              <li
                key={i}
                className="software-skill-inline"
                title={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname} aria-hidden="true"></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}