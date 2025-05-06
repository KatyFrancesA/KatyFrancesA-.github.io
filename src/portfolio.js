/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// Import your loading animation JSON
import loadingAnimation from "./assets/lottie/loading.json"; // Make sure loading.json is in this path

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: loadingAnimation, // Use the loading animation
  duration: 3500 // Adjust duration as needed for loading.json (e.g., 2500ms)
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "KatyFrancesA",
  title: "Hi, I'm Katy",
  subTitle: emoji(
    "Aspiring IT professional looking for entry level IT roles. Actively building skills through self directed learning and projects, with a long term goal of specialising in cybersecurity. 🚀"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1y4-F4iVoLSpNdmnuafSPfVtz8KVFR913bwsPnSUtMzM/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/KatyFrancesA",
  linkedin: "https://www.linkedin.com/in/katyfrancesa/",
  gmail: "katyfrances@tutamail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Skill Stack",
  // subTitle: " Aspiring Security Analyst who wants to explore the art of digital defence",
  skills: [
    emoji(
      "⚡ Gaining hands on experience with security fundamentals and IT support - from network security to endpoint protection"
    ),
    emoji("⚡ Building a solid understanding of networking, firewalls, VPNs and secure configurations for safe enterprise environments"),
    emoji(
      "⚡ Studying cyber fundamentals, incident response and system hardening"
    )
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Bash", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "PowerShell", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Go", fontAwesomeClassname: "fas fa-code" },
    { skillName: "YAML", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "HTML", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Regex", fontAwesomeClassname: "fas fa-search" },
    { skillName: "Networking", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Firewalls", fontAwesomeClassname: "fas fa-shield-alt" },
    { skillName: "OSI Model", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "CIA Triad", fontAwesomeClassname: "fas fa-lock" },
    { skillName: "MFA Solutions", fontAwesomeClassname: "fas fa-key" },
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Gateshead College",
      logo: require("./assets/images/gatesheadLogo.png"),
      subHeader: "Level 4 Software Development and Testing",
      duration: "January - March 2025",
      desc: "Developed skills in software development, testing, debugging and Agile methodologies. Shifted focus to cybersecurity after the course.",
      descBullets: [
        "Learned Java, testing frameworks (JUnit, Mockito, Spring) and Agile workflows.",
        "Studied manual and automated testing techniques and security best practices."
      ]
    },
    {
      schoolName: "Firebrand",
      logo: require("./assets/images/firebrandLogo.png"),
      subHeader: "Software Development Fundamentals",
      duration: "Oct - Feb 2022",
      desc: "Learned Python and C#, along with cloud basics, databases and web development. Focused on gaining a solid foundation in software development.",
      descBullets: ["Introduced to Python, C#, cloud computing and databases",
        "Achieved MTA 98-361 and PCAP-31-02 certifications."]
    }
  ]
};

// Tech Stack Section
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Cybersecurity Fundementals", progressPercentage: "65%" },
    { Stack: "Scripting (Bash, PowerShell, Python)", progressPercentage: "50%" },
    { Stack: "Networking & Firewalls", progressPercentage: "45%" },
    { Stack: "Programming", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperience = {
  display: true,
  experience: [
    {
      role: "IT Self Study / Home Lab Projects",
      company: "Personal Development",
      companylogo: require("./assets/images/selfLogo.png"),
      date: "April 2025 – Present",
      desc: "Actively developing practical IT and cybersecurity skills through hands on projects in a home lab environment. Focused on network security, system administration and security tool usage.",
      descBullets: [
        "Configuring and managing virtual machines (VirtualBox)",
        "Practicing network scanning and analysis (Nmap, Wireshark)",
        "Exploring security tools and ethical hacking concepts (Metasploit)",
        "Documenting learning and lab setups on GitHub" 
      ]
    },
    {
      role: "Customer Service Advisor",
      company: "G4S",
      companylogo: require("./assets/images/g4sLogo.png"),
      date: "September 2022 – Present",
      desc: "Developed problem solving skills in a fast-paced environment. Focused on providing secure client data handling and risk management.",
      descBullets: [
        "Ensured secure handling of customer data",
        "Managed risk by following company security protocols"
      ]
    },
    {
      role: "Graphic Artist",
      company: "Kool Kat Illustrations",
      companylogo: require("./assets/images/kkiLogo.png"),
      date: "Jan 2022 – Present",
      descBullets: [
        "Utilised SEO, market research and analytics to increase reach and sales.",
        "Used Adobe Illustrator, InDesign and Procreate to create branding assets."
      ]
    },
    {
      role: "Customer Advisor",
      company: "Student Loans Company",
      companylogo: require("./assets/images/slcLogo.png"),
      date: "Feb 2020 – Jan 2022",
      descBullets:  [
        "Researched complex queries using internal databases and documentation.",
        "Maintained compliance with data handling and privacy protocols.",
      ]
    }
  ]
};

// Open Source Projects Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section
const bigProjects = {
  title: "Projects",
  //subtitle: "My Personal Projects & Learning",
  projects: [
    {
      image: require("./assets/images/ITLabsLogo.png"),
      projectName: "IT HomeLab & Learning",
      projectDesc: "An ongoing project documenting my learning journey in IT fundamentals and cybersecurity. Includes notes, scripts and configurations covering networking, operating systems, virtualisation, security concepts, hardware troubleshooting and basic scripting.",
      footerLink: [ 
        { 
        name: "Visit GitHub Repo",
        url:  "https://github.com/KatyFrancesA/IT-HomeLab-Learning-Repo"
      } 
    ]
    },
    {
      image: require("./assets/images/MSPLogo.png"),
      projectName: "Simulated MSP Lab Environment",
      projectDesc: "Created a virtual lab simulating a managed service provider setup using VirtualBox. Set up multiple client VMs, domain controller and firewall rules. Practiced remote support scenarios, patching and ticketing simulations. Documentation includes diagrams, bash/powershell scripts and ITIL-aligned support logs.",
      footerLink: [ 
        { 
          name: "Visit GitHub Repo",
          url: "https://github.com/KatyFrancesA/IT-HomeLab-Learning-Repo"
        } 
      ]
    }

  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",
  achievementsCards: [
    {
      title: "Software Development Fundementals (MTA 98-361)",
      subtitle: "Microsoft certification covered core programming concepts, OOP, web and desktop app development, databases and software development processes.",
      image: require("./assets/images/mtaLogo.png"),
      imageAlt: "MTA 98-361 Logo",
      footerLink: [ { name: "Certification Details", url: "https://learn.microsoft.com/en-us/certifications/mta-software-development-fundamentals/" } ]
    },
    {
      title: "PCAP-31-02 – Certified Associate in Python Programming",
      subtitle: "Python Institute certification covered Python programming concepts, including control structures, functions, OOP, modules, file handling, exceptions and best practices.",
      image: require("./assets/images/pcapLogo.png"),
      imageAlt: "PCAP Logo",
      footerLink: [ { name: "Course Link", url: "https://pythoninstitute.org/pcap" } ]
    },
    {
      title: "SC-900: Microsoft Security, Compliance, and Identity Fundamentals",
      subtitle: "Microsoft certification covering foundational knowledge of security, compliance and identity concepts across cloud-based and related Microsoft services.",
      image: require("./assets/images/sc900.png"),
      imageAlt: "SC-900 Certification Logo",
      footerLink: [ { name: "Certification Details", url: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/?practice-assessment-type=certification" } ]
    },
  ],
  display: true
};

// Blog Section (Keep the definition, but set display to false)
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section (Keep the definition, but set display to false)
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false
};

// Podcast Section (Keep the definition, but set display to false)
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info Section
const contactInfo = {
  title: emoji("Contact Me"),
  //subtitle:
    //"Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44 7777 906 334",
  email_address: "katyfrances@gmail.com"
};

// Twitter Section (Keep the definition, but set display to false)
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

// Ensure ALL defined constants are exported
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperience,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection, 
  podcastSection, 
  contactInfo,
  twitterDetails, 
  isHireable,
  resumeSection
};