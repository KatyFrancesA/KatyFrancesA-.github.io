import React from "react";
import "./SocialMedia.scss";
// Import BOTH socialMediaLinks AND contactInfo from portfolio.js
import { socialMediaLinks, contactInfo } from "../../portfolio";

export default function SocialMedia() {
  // We only render the component if EITHER social links are enabled OR a phone number exists
  if (!socialMediaLinks.display && !contactInfo.number) {
    return null;
  }

  return (
    <div className="social-media-div">
      {/* GitHub */}
      {socialMediaLinks.display && socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {/* LinkedIn */}
      {socialMediaLinks.display && socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {/* Gmail */}
      {socialMediaLinks.display && socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google" // Keep class or change if needed
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      {/* Phone */}
      {contactInfo.number ? ( // Check contactInfo directly
        <a
          href={`tel:${contactInfo.number}`}
          className="icon-button phone" // Class for styling
          aria-label="Phone"
        >
          <i className="fas fa-phone"></i>
          <span></span>
        </a>
      ) : null}

      {/* Other Optional Icons (Only render if socialMediaLinks.display is true) */}
      {socialMediaLinks.display && socialMediaLinks.gitlab ? (
         <a href={socialMediaLinks.gitlab} className="icon-button gitlab" target="_blank" rel="noopener noreferrer" aria-label="GitLab"><i className="fab fa-gitlab"></i><span></span></a>
      ) : null}

      {socialMediaLinks.display && socialMediaLinks.facebook ? (
         <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i><span></span></a>
      ) : null}

      {socialMediaLinks.display && socialMediaLinks.instagram ? (
         <a href={socialMediaLinks.instagram} className="icon-button instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i><span></span></a>
      ) : null}

      {socialMediaLinks.display && socialMediaLinks.twitter ? (
         <a href={socialMediaLinks.twitter} className="icon-button twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i><span></span></a>
      ) : null}

      {socialMediaLinks.display && socialMediaLinks.medium ? (
         <a href={socialMediaLinks.medium} className="icon-button medium" target="_blank" rel="noopener noreferrer" aria-label="Medium"><i className="fab fa-medium"></i><span></span></a>
      ) : null}

      {socialMediaLinks.display && socialMediaLinks.stackoverflow ? (
         <a href={socialMediaLinks.stackoverflow} className="icon-button stack-overflow" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow"><i className="fab fa-stack-overflow"></i><span></span></a>
      ) : null}

      {socialMediaLinks.display && socialMediaLinks.kaggle ? (
         <a href={socialMediaLinks.kaggle} className="icon-button kaggle" target="_blank" rel="noopener noreferrer" aria-label="Kaggle"><i className="fab fa-kaggle"></i><span></span></a>
      ) : null}
    </div>
  );
}