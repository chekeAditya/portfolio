/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya Cheke",
  title: "Hi, I'm Aditya Cheke",
  subTitle: emoji(
    " I'm a passionate learner who's always willing to learn and work across technologies and domains 💡. I love to explore new technologies and leverage them to solve real-life problems ✨."
  ),
  resumeLink:
    "https://www.canva.com/design/DAEq_RcsLSE/dumh-3tB9s5PEOnp1aU9ug/view?utm_content=DAEq_RcsLSE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chekeAditya",
  linkedin: "https://www.linkedin.com/in/aditya-cheke/",
  gmail: "adityacheke4@gmail.com",
  instagram: "https://www.instagram.com/_._adiix_._/",
  medium: "https://medium.com/@chekeaditya",
  stackoverflow: "https://stackoverflow.com/users/15018171/aditya-cheke",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Android Developer WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Design and build advanced applications for the Android platform"
    ),
    emoji("⚡ Collaborate with uiux-teams to define, design, and implement features"),
    emoji(
      "⚡ Work on bug fixing and improving application performance"
    ),
    emoji(
      "⚡ Solid understanding of the full mobile development life cycle"
    ),
    emoji(
      "⚡ Familier with third-party libraries such as Retrofit/ Navigation-Graph/ Room-Database/ Dependency Injection Hand APIs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-korvue"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "android-architecture",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "room-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "dagger",
      fontAwesomeClassname: ""
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Masai School",
      logo: require("./assets/images/masaiLogo.png"),
      subHeader: "Full-Stack Android Development",
      duration: "June 2021 - Present | Remote",
      desc: "Participated in the Constuct Weeks and Hackathons.",
      descBullets: [
        "In Construct week we had to build application within 4-6 days.",
        "Build clone of Amazon Prime Video-Application in 4 days and got 2nd position in construct week.",
      ]
    },
    {
      schoolName: "Dr. BAMU University",
      logo: require("./assets/images/bamu.png"),
      subHeader: "Bachelor of Science in Computer Science & IT",
      duration: "August 2019 - Present"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Grofers-Application Clone",
      company: "Grofers",
      companylogo: require("./assets/images/groferlog.png"),
      date: "24 July – 28 July",
      desc: "",
      descBullets: [
        "Tech Stack: Java |Android Studio | Firebase |Retrofit | Shared Preference.",
        "Areas of responsibility: Built authentication and handled Splash Screen API-Calling using Retrofit. Developed the Home and Tariff page. Integrated Cart functionality.",
        "A collaborative project built by a team of 3, executed in 4 days."
      ]
    },
    {
      role: "Amazon Prime Video App-Clone",
      company: "Prime-Video",
      companylogo: require("./assets/images/primevideo.jpg"),
      date: "22 August – 26 August",
      desc: "",
      descBullets: [
        "Tech Stack: Kotlin |Android Studio | Firebase |Retrofit",
        "Areas of responsibility: Built authentication and handled Splash Screen, API-Calling using Retrofit. Developed the Home and Tariff page. Integrated Voice Search functionality.",
        "A collaborative project built by a team of 4, executed in 4 days."
      ]
    },
    {
      role: "Grow App-Clone",
      company: "Grow",
      companylogo: require("./assets/images/growIcon.png"),
      date: "26 Sept – 01 Oct",
      desc: "",
      descBullets: [
        "Tech Stack: Kotlin | MVVM-Architecture | Hilt |Retrofit",
        "Areas of responsibility: Built authentication and handled Splash Screen, API-Calling using Retrofit. Developed the Mutual fund page. Integrated Room database to store data.",
        "A collaborative project worked with Ui/Ux team which had 3 designer and 3 developers, executed in 5 days."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display:true,
  title: "Projects",
  subtitle: "SOME PROJECTS WHICH WE BUILD DURING CONSTRUCT WEEKS",
  projects: [
    {
      image: require("./assets/images/groferlog.png"),
      projectName: "Grofers Application-Clone",
      projectDesc: "A clone of the Amazon Prime Video App. Using this application you can buy Stocks and Mutual fundsa and also analyze which is best.",
      footerLink: [
        {
          name: "Github",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/primevideo.jpg"),
      projectName: "Prime-Video Application Clone",
      projectDesc: "A clone of the Amazon Prime Video App. Using this application you can watch movies and shows from anywhere.",
      footerLink: [
        {
          name: "Github",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/growIcon.png"),
      projectName: "Grow Application",
      projectDesc: "A clone of the Amazon Prime Video App. Using this application you can watch movies and shows from anywhere.",
      footerLink: [
        {
          name: "Github",
          url: "http://nextu.se/"
        }
      ]
    }
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
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@chekeaditya/how-i-build-clone-of-m-commerce-grofer-application-2633c358a733",
      title: "Grow Application",
      description:
        "How we build clone of (m-commerce) Grofer Application."
    },
    {
      url: "https://medium.com/@chekeaditya/how-to-create-an-app-like-amazon-prime-video-using-kotlin-13e06111e8d4",
      title: "Prime Video Application",
      description:
        "How to create an app like Amazon Prime Video Using Kotlin."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8830466523",
  email_address: "adityacheke4@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
