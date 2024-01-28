import { Route } from '@models/route.model';
import React from 'react';

const HomePage = React.lazy(() => import('@pages/Home/Home'));
const AboutMePage = React.lazy(() => import('@pages/AboutMe/AboutMe'));
const ResumePage = React.lazy(() => import('@pages/Resume/Resume'));
const ProjectsPage = React.lazy(() => import('@pages/Projects/Projects'));
const ContactPage = React.lazy(() => import('@pages/Contact/Contact'));

const routes: Route[] = [
  {
    label: '/home',
    path: '/home',
    component: HomePage,
    isIndexRoute: true,
  },
  {
    label: '/about me',
    path: '/about-me',
    component: AboutMePage,
    isIndexRoute: false,
  },
  {
    label: '/resume',
    path: '/resume',
    component: ResumePage,
    isIndexRoute: false,
  },
  {
    label: '/projects',
    path: '/projects',
    component: ProjectsPage,
    isIndexRoute: false,
  },
  {
    label: '/contact',
    path: '/contact',
    component: ContactPage,
    isIndexRoute: false,
  },
];

export default routes;
