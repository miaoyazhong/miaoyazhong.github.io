/* Change this file to get your personal Portfolio */


// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// import nyanCatGif from "./assets/images/nyanCat.gif";

const splashScreen = {
  enabled: false, // set false to disable splash screen
  // animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Miaoya Zhong",
  title: "Hi, I'm Miaoya",
  subTitle: emoji(
    "I am a passionate STEAM teacher and learning designer with an enthusiastic interest in computer science and education. As a lifelong learner, I love exploring new technologies and sharing to inspire next-generation learners."
  ),
  resumeLink:
    " ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/miaoyazhong",
  linkedin: "https://www.linkedin.com/in/miaoya-zhong-041501153/",
  gmail: "miaoya969@outlook.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Expected 2027",
      desc: "Grade: 4.12/4.0",
      // desc2: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Learn the essential elements of computing theory including logic, proof techniques, combinatorics, algorithm analysis, discrete data models (sets, relations, trees), and finite automata.",
      //   "Gain an understanding of the programming techniques and tools necessary for software engineering, database management, and website development.",
      // ]
    },
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Education in Learning Design, Innovation, and Technology",
      duration: "Sept 2021 - May 2022",
      desc: "Grade: 4.0/4.0",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "University of Wisconsin–Madison",
      logo: require("./assets/images/uwmadison_logo.png"),
      subHeader: "Bachelor of Science in Education",
      duration: "Sept 2017 - Dec 2020",
      desc: "Grade: 3.93/4.0 (Graduate with distinction)",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computer Science Teacher",
      company: "The Quarry Lane School",
      companylogo: require("./assets/images/quarrylaneLogo.png"),
      date: "Aug 2023 – Present",
      desc: "Teach AP CSP and middle school computer science",
      descBullets: [
        "Design and develop individualized AP CSP and middle school computer science curriculum for Grade 7-12 students, fostering computational thinking, interest in Computer Science, and a strong foundation in programming.",
        "Lead Game Design club， enhancing student engagement and promoting a collaborative learning community."
      ]
    },
    {
      role: "Teacher",
      company: "Stanford Madera Grove\nChildren's Center",
      companylogo: require("./assets/images/ICRILogo.png"),
      date: "June 2022 – June 2023",
      desc: "Implement Various activities and documentation with Reggio Emilia Approach",
      descBullets: [
        "Utilized classroom materials to implement STEAM activities and promote an environment conducive to age-appropriate levels of development, interests, and special needs of the children.",
        "Created documentation of student work such as portfolios and wall display."
      ]
    },
    {
      role: "Teacher(Lego Construction & Robotic Programming)",
      company: "TCTM Kids IT Education Inc.",
      companylogo: require("./assets/images/TCTMLogo.png"),
      date: "Feb 2021 – Jul 2021",
      desc: "Teach Lego construction and robotic programming from Pre to 8",
      descBullets: [
        "Taught Lego construction and robotic programming with Scratch, Lego Mindstorms, Lego WeDo 2.0, and Python in Grade Pre-8",
        "Worked on developing the product exhibitions and activity design, assisted in training new teachers",
        "Total sales of incumbency: $100,000"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/goprogram.jpeg"),
      projectName: "Go Programm: Free Curriculum for Scratch Programming",
      projectDesc: "Discover a diverse collection of open-source Scratch projects designed for self-guided learning. These projects collectively feature interactive storybooks and references with a cross-curricular design incorporating Art, Math, Literacy, and Computer Science. Engage with different sections to experience varied learning pathways, creating fun and meaningful learning experiences.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.goprogram.fun/home"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/bdml.png"),
    //   projectName: "Tactiel Sensing for Underwater Robotics",
    //   projectDesc: "Design and fabricate the tactile sensor for OceanOneK, a humanoid robot developed by Stanford University.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://bdml.stanford.edu/Main/MiaoyaSummerJournal"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

const researchSection = {
  title: "Research",
  subtitle: "SOME RESEARCH THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/bdml.png"),
      image2: require("./assets/images/SRCLogo.png"),
      image3: require("./assets/images/SFChronicleLogo.jpg"),
      projectName: "Whisker-inspired Tactile Sensor for Underwater Robotics",
      projectDesc: "Build the whisker-inspired tactile sensors for OceanOneK, a humanoid robot developed by Stanford University.",
      footerLink: [
        {
          name: "Project Website",
          url: "https://sites.google.com/stanford.edu/whiskertactile/home"
        },
        {
          name: "SRC Launch Demo",
          url: "https://src.stanford.edu/demo/underwater-whisker-sensing"
        },
        {
          name: "Media Coverage",
          url: "https://www.sfchronicle.com/tech/article/stanford-robotics-lab-home-helpers-19869354.php"
        }
        
      ]
    },
    {
      image: require("./assets/images/bdml.png"),
      projectName: "Tactile Sensing for OceanOneK Hand",
      projectDesc: "Design and fabricate the tactile sensor for the hand of OceanOneK",
      footerLink: [
        {
          name: "Project Website",
          url: "http://bdml.stanford.edu/Main/MiaoyaSummerJournal"
        }
      ]
    },
    // {
    //   image: require("./assets/images/bdml.png"),
    //   projectName: "Tactile Sensing for OceanOneK Hand",
    //   projectDesc: "Design and fabricate the tactile sensor for the hand of OceanOneK",
    //   footerLink: [
    //     {
    //       name: "Project Website",
    //       url: "http://bdml.stanford.edu/Main/MiaoyaSummerJournal"
    //     }
    //   ]
    // }
  ],

  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "miaoya969@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  researchSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
