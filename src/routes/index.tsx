import Login from '@pages/Login';
import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

const Routes: React.FC = () => {
  // TODO: Verificar a autenticação do usuário
  // TODO: Criar componente para rota privada
  // TODO: Criar componente para rota pública

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
