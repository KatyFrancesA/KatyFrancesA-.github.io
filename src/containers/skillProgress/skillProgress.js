import React, {useContext} from "react"; // Added useContext import
import "./Progress.scss"; // Reverted SCSS import name
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext"; // Added StyleContext import

// Kept original component name
export default function StackProgress() {
  const { isDark } = useContext(StyleContext);

  if (!techStack.display) {
      return null;
  }

  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skill-progress-container"> {/* Changed class */}
          <div className="skills-bar-container"> {/* Changed class */}
            {/* This heading uses skills-heading, centering handled in SCSS */}
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle} className={isDark ? "progress-bar dark-mode" : "progress-bar"}></span>
                  </div>
                </div>
              );
            })}
          </div>

          {illustration.display && (
             <div className="skills-image-container"> {/* Changed class */}
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Skills Illustration"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
            </div>
          )}

        </div>
      </Fade>
    );
  }
  return null;
}