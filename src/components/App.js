import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomeContainer from '../containers/HomeContainer';
import QuestionContainer from '../containers/QuestionContainer';
import ResultContainer from '../containers/ResultContainer';

const App = ({ appDrawerOpen, handleToggle }) =>
  <div>

    <AppBar title="DVLA like theory test" onLeftIconButtonTouchTap={handleToggle} />

    <Drawer docked={false} open={appDrawerOpen} onRequestChange={handleToggle}>
      <Navigation handleToggle={handleToggle} />
    </Drawer>

    <div style={{ padding: '10px' }}>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/question/:index" component={QuestionContainer} />
      <Route exact path="/results" component={ResultContainer} />
    </div>

  </div>;

App.propTypes = {
  appDrawerOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default App;
