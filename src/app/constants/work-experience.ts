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
    website: 'resume.projects.project1.website',
    repo: 'resume.projects.project1.repo',
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
    repo: 'resume.projects.project2.repo',
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
    website: 'resume.projects.project3.website',
    repo: 'resume.projects.project3.repo',
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
    repo: 'resume.projects.project4.repo',
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
    repo: 'resume.projects.project5.repo',
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
    js: {
      token: 'resume.skills.professional.js',
      level: 85
    },
    angular: {
      token: 'resume.skills.professional.angular',
      level: 85
    },
    react: {
      token: 'resume.skills.professional.react',
      level: 85
    },
    vue: {
      token: 'resume.skills.professional.vue',
      level: 85
    },
    nodeExpress: {
      token: 'resume.skills.professional.nodeExpress',
      level: 85
    },
    socket: {
      token: 'resume.skills.professional.socket',
      level: 85
    },
    htmlCss: {
      token: 'resume.skills.professional.htmlCss',
      level: 85
    },
    db: {
      token: 'resume.skills.professional.db',
      level: 85
    },
    rest: {
      token: 'resume.skills.professional.rest',
      level: 85
    },
    python: {
      token: 'resume.skills.professional.python',
      level: 85
    },
    php: {
      token: 'resume.skills.professional.php',
      level: 85
    },
    java: {
      token: 'resume.skills.professional.java',
      level: 85
    },
    cpp: {
      token: 'resume.skills.professional.cpp',
      level: 85
    },
  },
  {
    type: 'languages',
    english: 'resume.skills.languages.english',
    romanian: 'resume.skills.languages.romanian',
  },
  {
    type: 'developmentTools',
    git: 'resume.skills.developmentTools.git',
    jira: 'resume.skills.developmentTools.jira',
    azure: 'resume.skills.developmentTools.azure',
    jenkins: 'resume.skills.developmentTools.jenkins',
    sonar: 'resume.skills.developmentTools.sonar',
  },
  {
    type: 'personal',
    realiable: 'resume.skills.personal.realiable',
    organised: 'resume.skills.personal.organised',
    punctual: 'resume.skills.personal.punctual',
    teamPlayer: 'resume.skills.personal.teamPlayer',
    fastLearner: 'resume.skills.personal.fastLearner',
    motivated: 'resume.skills.personal.motivated',
    curios: 'resume.skills.personal.curios',
  },
];
