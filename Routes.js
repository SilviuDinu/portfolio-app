import AuthRoute from '@auth/AuthRoute';
import { PrivateRoute } from '@auth/PrivateRoute';
import Loader from '@components/Loader/Loader';
import React, { Suspense } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes as Switch } from 'react-router-dom';

const DashboardPage = React.lazy(() => import('@pages/dashboard/DashboardPage'));
const UnassignedPage = React.lazy(() => import('@pages/dashboard/UnassignedPage/UnassignedPage'));
const SavedRepliesPage = React.lazy(() => import('@pages/dashboard/SavedRepliesPage/SavedRepliesPage'));
const AssignedPage = React.lazy(() => import('@pages/dashboard/AssignedPage/AssignedPage'));
const ConversationPage = React.lazy(() => import('@pages/dashboard/ConversationPage/ConversationPage'));
const SettingsPage = React.lazy(() => import('@pages/dashboard/SettingsPage/SettingsPage'));
const DraftsPage = React.lazy(() => import('@pages/dashboard/DraftsPage/DraftsPage'));
const LogInPage = React.lazy(() => import('@pages/authentication/LogInPage'));
const SignUpPage = React.lazy(() => import('@pages/authentication/SignUpPage'));
const NotFoundPage = React.lazy(() => import('@pages/NotFoundPage'));
const PleaseVerifyEmailPage = React.lazy(() => import('@pages/authentication/PleaseVerifyEmailPage'));
const ForgotPasswordPage = React.lazy(() => import('@pages/authentication/ForgotPasswordPage'));
const EmailVerificationLandingPage = React.lazy(() => import('@pages/authentication/EmailVerificationLandingPage'));
const PasswordResetLandingPage = React.lazy(() => import('@pages/authentication/PasswordResetLandingPage'));

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          path='dashboard'
          element={
            <PrivateRoute>
              <Suspense fallback={<Loader />}>
                <DashboardPage />
              </Suspense>
            </PrivateRoute>
          }>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <UnassignedPage />
              </Suspense>
            }
          />
          <Route
            path='conversation/:id'
            exact
            element={
              <Suspense fallback={<Loader />}>
                <ConversationPage />
              </Suspense>
            }
          />
          <Route
            path='assigned'
            exact
            element={
              <Suspense fallback={<Loader />}>
                <AssignedPage />
              </Suspense>
            }
          />
          <Route
            path='resolutions'
            exact
            element={
              <Suspense fallback={<Loader />}>
                <SavedRepliesPage />
              </Suspense>
            }
          />
          <Route
            path='settings'
            exact
            element={
              <Suspense fallback={<Loader />}>
                <SettingsPage />
              </Suspense>
            }
          />

          {/* <Route path='*' element={<UnassignedPage />} /> */}
        </Route>

        <Route
          path='/login'
          exact
          element={
            <AuthRoute>
              <Suspense fallback={<Loader classes={['relative center']} />}>
                <LogInPage />
              </Suspense>
            </AuthRoute>
          }
        />
        <Route
          path='/signup'
          exact
          element={
            <AuthRoute>
              <Suspense fallback={<Loader classes={['relative center']} />}>
                <SignUpPage />
              </Suspense>
            </AuthRoute>
          }
        />
        <Route
          path='/please-verify'
          exact
          element={
            <AuthRoute>
              <Suspense fallback={<Loader classes={['relative center']} />}>
                <PleaseVerifyEmailPage />
              </Suspense>
            </AuthRoute>
          }
        />
        <Route
          path='/verify-email/:emailVerificationString'
          exact
          element={
            <AuthRoute>
              <Suspense fallback={<Loader classes={['relative center']} />}>
                <EmailVerificationLandingPage />
              </Suspense>
            </AuthRoute>
          }
        />
        <Route
          path='/forgot-password'
          exact
          element={
            <AuthRoute>
              <Suspense fallback={<Loader classes={['relative center']} />}>
                <ForgotPasswordPage />
              </Suspense>
            </AuthRoute>
          }
        />
        <Route
          path='/reset-password/:passwordResetCode'
          exact
          element={
            <AuthRoute>
              <Suspense fallback={<Loader classes={['relative center']} />}>
                <PasswordResetLandingPage />
              </Suspense>
            </AuthRoute>
          }
        />

        <Route
          index
          element={
            <Navigate
              exact
              from={'/'}
              to={'/dashboard'}
              replace
            />
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Switch>
    </Router>
  );
};
