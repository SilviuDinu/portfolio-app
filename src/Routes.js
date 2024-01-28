import React, { Suspense } from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import routes from './constants/routes';

const NotFoundPage = React.lazy(() => import('@pages/NotFound/NotFound'));

export const Routes = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        {routes.map(({ path, component: Page, isIndexRoute }, idx) => {
          return (
            <Route
              key={idx}
              index={isIndexRoute}
              path={path}
              exact
              element={<Page />}
            />
          );
        })}

        <Route
          index
          element={
            <Navigate
              exact
              from={'/'}
              to={'/home'}
              replace
            />
          }
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Switch>
    </Suspense>
  );
};
