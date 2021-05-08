import { roles } from '@definitions/general';
import PrivateTemplate from '@templates/Private';
import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { privateRouteList, publicRouteList } from './routeList';

const Routes: React.FC = () => {
  const activeRole: roles = 'student';
  const authenticated = true;

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

  // TODO: Alterar o Redirect de acordo com o role

  return (
    <BrowserRouter>
      {authenticated ? (
        <Switch>
          {privateRouteComponents}
          <Redirect to="/example" />
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
