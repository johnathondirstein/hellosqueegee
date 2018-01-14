import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from '../components/Nav';
import Homepage from '../components/HomePage';
import NotFound from '../components/NotFound';
import KitchenerGutterCleaning from '../components/GutterCleaning';
import KitchenerWindowCleaning from '../components/WindowCleaning';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/kitchener-window-cleaning" component={KitchenerWindowCleaning} />
        <Route path="/kitchener-gutter-cleaning" component={KitchenerGutterCleaning} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;