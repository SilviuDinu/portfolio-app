export const BREAKPOINTS = [
  {
    alias: 'ipadProLandscape',
    mediaQuery:
      'screen and (min-height: 1023.9px) and (max-height: 1024px) and (min-width: 1365.9px) and (max-width: 1366px)',
    priority: 800,
  },
  {
    alias: 'xs',
    mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.9px)',
    priority: 1000,
  },
  {
    alias: 'sm',
    mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.9px)',
    priority: 900,
  },
  {
    alias: 'md',
    mediaQuery: 'screen and (min-width: 960px) and (max-width: 1249.9px)',
    priority: 800,
  },
  {
    alias: 'lg',
    mediaQuery: 'screen and (min-width: 1250px) and (max-width: 1919.9px)',
    priority: 700,
  },
  {
    alias: 'xl',
    mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.9px)',
    priority: 600,
  },
  {
    alias: 'lt-sm',
    overlapping: true,
    mediaQuery: 'screen and (max-width: 599.9px)',
    priority: 950,
  },
  {
    alias: 'lt-md',
    overlapping: true,
    mediaQuery: 'screen and (max-width: 959.9px)',
    priority: 850,
  },
  {
    alias: 'lt-lg',
    overlapping: true,
    mediaQuery: 'screen and (max-width: 1249.9px)',
    priority: 750,
  },
  {
    alias: 'lt-xl',
    overlapping: true,
    mediaQuery: 'screen and (max-width: 1919.9px)',
    priority: 650,
  },
  {
    alias: 'gt-xs',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 600px)',
    priority: -950,
  },
  {
    alias: 'gt-sm',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 960px)',
    priority: -850,
  },
  {
    alias: 'gt-md',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 1250px)',
    priority: -750,
  },
  {
    alias: 'gt-lg',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 1920px)',
    priority: -650,
  },
  {
    alias: 'gt-xl',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 2200px)',
    priority: -650,
  },
];
