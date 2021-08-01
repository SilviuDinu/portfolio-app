export const routes = [
  {
    name: 'Home',
    component: 'Home',
    path: '/',
    isExternal: false,
  },
  {
    name: 'About me',
    path: '/about-me',
    component: 'AboutMe',
    isExternal: false,
  },
  {
    name: 'Resume',
    path: '/resume',
    component: 'Resume',
    isExternal: false,
  },
  {
    name: 'Projects',
    path: '/projects',
    component: 'Projects',
    isExternal: false,
  },
  {
    name: 'Contact',
    path: '/contact',
    component: 'Contact',
    isExternal: false,
  },
  {
    name: 'Github',
    path: 'https://github.com/SilviuDinu/portfolio-app',
    target: '_blank',
    isExternal: true,
  },
];
