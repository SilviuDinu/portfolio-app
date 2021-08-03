
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
    name: 'Deloitte Digital',
    position: 'resume.experience1.position',
    company: 'resume.experience1.company',
    city: 'resume.experience1.city',
    period: 'resume.experience1.period',
    responsibilities: [
      'resume.experience1.responsibilities.item1',
      'resume.experience1.responsibilities.item2',
    ],
  },
  {
    name: 'Themeisle',
    position: 'resume.experience2.position',
    company: 'resume.experience2.company',
    city: 'resume.experience2.city',
    period: 'resume.experience2.period',
    responsibilities: [
      'resume.experience2.responsibilities.item1',
      'resume.experience2.responsibilities.item2',
    ],
  },
];
