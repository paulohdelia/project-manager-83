import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound404 from '../pages/NotFound404';
import Start from '../pages/Start';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route component={NotFound404} />
    </Switch>
  );
};

export default Routes;
