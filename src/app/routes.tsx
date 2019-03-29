import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import { NotFound } from '@app/components/pages/404';
import { Dashboard } from '@app/domains/Dashboard/Dashboard';
import { Metrics } from '@app/domains/Metrics/Metrics';

export interface AppRoute {
  label: string;
  component: | React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  icon: any;
  exact?: boolean;
  path: string;
}

const routes: AppRoute[] = [
  {
    path: '/',
    label: 'Dashboard',
    component: Dashboard,
    exact: true,
    icon: null
  },
  {
    path: '/metrics',
    label: 'Metrics',
    component: Metrics,
    exact: true,
    icon: null
  }
];

const Routes = () => (
  <Switch>
    {routes.map(({path, exact, component}, idx) => (
      <Route path={path} exact={exact} component={component} key={idx} />
    ))}
    <Route component={NotFound} />
  </Switch>
);

export { Routes, routes };
