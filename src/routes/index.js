import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// import { BrowserRouter } from 'react-router-dom';

import SingnIn from '../pages/SignIn';

import DashboardClient from '../pages/client/Dashboard';
import DashboardAdm from '../pages/admin/DasboardAdm';

export default function Routes() {
  return (
 //   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DashboardClient} />
      <Route exact path="/adm" component={SingnIn} />

      <Route exact path="/dashboardadm" component={DashboardAdm} isPrivate />
    </Switch>
  //  </ BrowserRouter>
  );
}
