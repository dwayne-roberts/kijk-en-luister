import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ShowPage from './containers/ShowPage';
import EpisodePage from './containers/EpisodePage';
import PlayerBar from './components/PlayerBar';

export default () => (
  <App>
    <Switch>
      <Route path={routes.SHOW} component={ShowPage} />
      <Route path={routes.EPISODE} component={EpisodePage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
    <PlayerBar />
  </App>
);
