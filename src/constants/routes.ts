import { Route } from '@models/route.model';
import React from 'react';

const HomePage = React.lazy(() => import('@pages/Home/Home'));
const AboutMePage = React.lazy(() => import('@pages/AboutMe/AboutMe'));
const ResumePage = React.lazy(() => import('@pages/Resume/Resume'));
const ProjectsPage = React.lazy(() => import('@pages/Projects/Projects'));
const ContactPage = React.lazy(() => import('@pages/Contact/Contact'));

const routes: Route[] = [
  {
    label: 'Home',
    path: '/home',
    component: HomePage,
    isIndexRoute: true,
  },
  {
    label: 'About me',
    path: '/about-me',
    component: AboutMePage,
    isIndexRoute: false,
  },
  {
    label: 'Resume',
    path: '/resume',
    component: ResumePage,
    isIndexRoute: false,
  },
  {
    label: 'projects',
    path: '/Projects',
    component: ProjectsPage,
    isIndexRoute: false,
  },
  {
    label: 'Contact',
    path: '/contact',
    component: ContactPage,
    isIndexRoute: false,
  },
];

export default routes;
