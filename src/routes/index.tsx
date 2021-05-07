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
          key={path}
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
            key={path}
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
      <Switch>
        {authenticated ? (
          <>
            {privateRouteComponents}
            <Route path="/">
              <Redirect to="/feed" />
            </Route>
          </>
        ) : (
          <>
            {publicRouteComponents}
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
