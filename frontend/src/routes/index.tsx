import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound404 from '../pages/NotFound404';
import SignInClient from '../pages/SignInClient';
import SignInDev from '../pages/SignInDev';
import Start from '../pages/Start';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/sign-in/dev" exact component={SignInDev} />
      <Route path="/sign-in/client" exact component={SignInClient} />
      <Route component={NotFound404} />
    </Switch>
  );
};

export default Routes;
