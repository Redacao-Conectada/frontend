import PrivateTemplate from '@templates/Private';
import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { privateRouteList, publicRouteList } from './routeList';

const Routes: React.FC = () => {
  // TODO: Verificar a autenticação do usuário

  const authenticated = false;

  const publicRouteComponents = publicRouteList.map(
    ({ component: Component, path, exact, title }) => {
      document.title = title;

      return (
        <Route
          path={path}
          exact={exact}
          render={(props) => <Component {...props} />}
        />
      );
    },
  );

  const privateRouteComponents = privateRouteList.map(
    ({ component: Component, path, exact, title }) => {
      document.title = title;

      return (
        <PrivateTemplate>
          <Route
            path={path}
            exact={exact}
            render={(props) => <Component {...props} />}
          />
        </PrivateTemplate>
      );
    },
  );

  return (
    <BrowserRouter>
      {authenticated ? (
        <Switch>
          {privateRouteComponents}
          <Redirect to="/feed" />
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
