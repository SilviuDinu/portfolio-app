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
];
