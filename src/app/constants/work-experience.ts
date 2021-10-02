/*
  To add a new work experience section you can copy and paste
  one of the models below (the ones inside { } braces) and change
  the 'experience1' or 'experience2' word with 'experience3' or 
  whatever the number is next. The rest should stay the same.

  In addition to that, you need to go to /assets/tokens.json file
  and under "resume" object, you can create a new object called
  "experience3" (just like "experience1" and "experience2") and
  write your content manually there:

  e.g.: "company": "Google" etc.
*/

export const workExperience = [
  {
    title: 'Deloitte Digital',
    position: 'resume.experiences.experience1.position',
    company: 'resume.experiences.experience1.company',
    city: 'resume.experiences.experience1.city',
    period: 'resume.experiences.experience1.period',
    responsibilities: [
      'resume.experiences.experience1.responsibilities.item1',
      'resume.experiences.experience1.responsibilities.item2',
    ],
  },
  {
    title: 'Themeisle',
    position: 'resume.experiences.experience2.position',
    company: 'resume.experiences.experience2.company',
    city: 'resume.experiences.experience2.city',
    period: 'resume.experiences.experience2.period',
    responsibilities: [
      'resume.experiences.experience2.responsibilities.item1',
      'resume.experiences.experience2.responsibilities.item2',
    ],
  },
];

export const projects = [
  {
    title: 'resume.projects.resumeApp.title',
    city: 'resume.projects.resumeApp.city',
    description: 'resume.projects.resumeApp.description',
    period: 'resume.projects.resumeApp.period',
    tools: [
      'resume.projects.resumeApp.tools.tool1',
      'resume.projects.resumeApp.tools.tool2',
      'resume.projects.resumeApp.tools.tool3',
      'resume.projects.resumeApp.tools.tool4',
      'resume.projects.resumeApp.tools.tool5',
    ],
    website: '#',
    repo: 'https://github.com/SilviuDinu/portfolio-app',
    videoUrl: 'assets/videos/portfolio-app-Broadband High.mp4',
    gifUrl: 'assets/videos/portfolio-app.gif',
    alt: 'portfolio web application gif',
    isVideo: true
  },
  {
    title: 'resume.projects.project1.title',
    city: 'resume.projects.project1.city',
    description: 'resume.projects.project1.description',
    period: 'resume.projects.project1.period',
    tools: [
      'resume.projects.project1.tools.tool1',
      'resume.projects.project1.tools.tool2',
      'resume.projects.project1.tools.tool3',
      'resume.projects.project1.tools.tool4',
      'resume.projects.project1.tools.tool5',
      'resume.projects.project1.tools.tool6',
    ],
    website: 'https://forecast-report.com/',
    repo: 'https://github.com/SilviuDinu/react-weather-app',
    videoUrl: 'assets/videos/react-weather-app-Broadband High.mp4',
    gifUrl: 'assets/videos/react-weather-app.gif',
    alt: 'react weather app gif',
    isVideo: true
  },
  {
    title: 'resume.projects.project2.title',
    city: 'resume.projects.project2.city',
    description: 'resume.projects.project2.description',
    period: 'resume.projects.project2.period',
    tools: [
      'resume.projects.project2.tools.tool1',
      'resume.projects.project2.tools.tool2',
      'resume.projects.project2.tools.tool3',
      'resume.projects.project2.tools.tool4',
      'resume.projects.project2.tools.tool5',
    ],
    repo: 'https://github.com/SilviuDinu/web-sockets-chat',
    videoUrl: 'assets/videos/web-sockets-chat-Broadband High.mp4',
    gifUrl: 'assets/videos/web-sockets-chat.gif',
    alt: 'web sockets chat react app gif',
    isVideo: true
  },
  {
    title: 'resume.projects.project3.title',
    city: 'resume.projects.project3.city',
    description: 'resume.projects.project3.description',
    period: 'resume.projects.project3.period',
    tools: [
      'resume.projects.project3.tools.tool1',
      'resume.projects.project3.tools.tool2',
      'resume.projects.project3.tools.tool3',
      'resume.projects.project3.tools.tool4',
      'resume.projects.project3.tools.tool5',
    ],
    website: 'https://slv.lol/',
    repo: 'https://github.com/SilviuDinu/url-shortener',
    videoUrl: 'assets/videos/url-shortener-Broadband High.mp4',
    gifUrl: 'assets/videos/url-shortener.gif',
    alt: 'vue utl shortener app gif',
    isVideo: true
  },
  {
    title: 'resume.projects.project4.title',
    city: 'resume.projects.project4.city',
    description: 'resume.projects.project4.description',
    period: 'resume.projects.project4.period',
    tools: [
      'resume.projects.project4.tools.tool1',
      'resume.projects.project4.tools.tool2',
      'resume.projects.project4.tools.tool3',
      'resume.projects.project4.tools.tool4',
      'resume.projects.project4.tools.tool5',
      'resume.projects.project4.tools.tool6',
    ],
    repo: 'https://github.com/SilviuDinu/cercetare_sem2_BE',
    videoUrl: 'assets/videos/disease-predictor-Broadband High.mp4',
    gifUrl: 'assets/videos/disease-predictor.gif',
    isVideo: true,
    alt: 'disease predictor app gif'
  },
  {
    title: 'resume.projects.project5.title',
    city: 'resume.projects.project5.city',
    description: 'resume.projects.project5.description',
    period: 'resume.projects.project5.period',
    tools: [
      'resume.projects.project5.tools.tool1',
      'resume.projects.project5.tools.tool2',
      'resume.projects.project5.tools.tool3',
      'resume.projects.project5.tools.tool4',
      'resume.projects.project5.tools.tool5',
    ],
    repo: 'https://github.com/SilviuDinu/smoke-detector',
    videoUrl: 'https://www.youtube.com/embed/-RQZF3_onj4',
    alt: 'smoke detector system video',
    isVideo: true,
    isYTVideo: true
  },
];

export const education = [
  {
    position: 'resume.education.education1.position',
    company: 'resume.education.education1.company',
    city: 'resume.education.education1.city',
    period: 'resume.education.education1.period',
  },
  {
    position: 'resume.education.education2.position',
    company: 'resume.education.education2.company',
    city: 'resume.education.education2.city',
    period: 'resume.education.education2.period',
  },
  {
    position: 'resume.education.education3.position',
    company: 'resume.education.education3.company',
    city: 'resume.education.education3.city',
    period: 'resume.education.education3.period',
  },
];

export const skills = [
  {
    type: 'professional',
    list: [
      {
        token: 'resume.skills.professional.js',
        level: 90,
        priority: 1
      },
      {
        token: 'resume.skills.professional.angular',
        level: 86,
        priority: 1
      },
      {
        token: 'resume.skills.professional.react',
        level: 83,
        priority: 1
      },
      {
        token: 'resume.skills.professional.vue',
        level: 65,
        priority: 2
      },
      {
        token: 'resume.skills.professional.nodeExpress',
        level: 80,
        priority: 1
      },
      {
        token: 'resume.skills.professional.socket',
        level: 68,
        priority: 2
      },
      {
        token: 'resume.skills.professional.htmlCss',
        level: 90,
        priority: 2
      },
      {
        token: 'resume.skills.professional.db',
        level: 72,
        priority: 2
      },
      {
        token: 'resume.skills.professional.rest',
        level: 82,
        priority: 2
      },
      {
        token: 'resume.skills.professional.python',
        level: 72,
        priority: 2
      },
      {
        token: 'resume.skills.professional.php',
        level: 57,
        priority: 2
      },
      {
        token: 'resume.skills.professional.java',
        level: 45,
        priority: 2
      },
      {
        token: 'resume.skills.professional.cpp',
        level: 45,
        priority: 2
      },
    ],
  },
  {
    type: 'languages',
    list: [
      'resume.skills.languages.english',
      'resume.skills.languages.romanian',
    ],
  },
  {
    type: 'developmentTools',
    list: [
      'resume.skills.developmentTools.git',
      'resume.skills.developmentTools.jira',
      'resume.skills.developmentTools.azure',
      'resume.skills.developmentTools.jenkins',
      'resume.skills.developmentTools.sonar',
    ],
  },
  {
    type: 'personal',
    list: [
      'resume.skills.personal.realiable',
      'resume.skills.personal.organised',
      'resume.skills.personal.punctual',
      'resume.skills.personal.teamPlayer',
      'resume.skills.personal.fastLearner',
      'resume.skills.personal.motivated',
      'resume.skills.personal.curios',
    ],
  },
];
