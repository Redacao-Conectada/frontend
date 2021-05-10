import { hasAuthority, isLogged } from '@/services/api';
import { roles, UserRole } from '@definitions/general';
import PrivateTemplate from '@templates/Private';
import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import {
  privateRedirects,
  privateRouteList,
  publicRouteList,
} from './routeList';

const getTopRole = (): roles => {
  if (hasAuthority(UserRole.ROLE_ADMIN)) return 'admin';
  if (hasAuthority(UserRole.ROLE_TEACHER)) return 'evaluator';
  return 'student';
};

const Routes: React.FC = () => {
  const activeRole: roles = getTopRole();

  const publicRouteComponents = publicRouteList.map(
    ({ component: Component, path, exact, title }) => {
      document.title = title;

      return (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => <Component {...props} />}
        />
      );
    },
  );

  const privateRouteComponents = privateRouteList[activeRole].map(
    ({ component: Component, path, exact, title }) => {
      document.title = title;

      return (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => (
            <PrivateTemplate role={activeRole}>
              <Component {...props} />
            </PrivateTemplate>
          )}
        />
      );
    },
  );

  const authenticated = isLogged();

  return (
    <BrowserRouter>
      {authenticated ? (
        <Switch>
          {privateRouteComponents}
          <Redirect to={privateRedirects[activeRole]} />
        </Switch>
      ) : (
        <Switch>
          {publicRouteComponents}
          <Redirect to="/login" />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default Routes;
