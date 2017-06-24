import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Route, Link } from 'react-router-dom';
import Navigation from './Navigation';
import HomeContainer from '../containers/HomeContainer';
import QuestionsContainer from '../containers/QuestionsContainer';

const App = ({ appDrawerOpen, handleToggle }) =>
  <div>

    <AppBar
      title="Quizline"
      onLeftIconButtonTouchTap={handleToggle}
      iconElementRight={
        <FlatButton label="Login" containerElement={<Link to="/login" />} />
      }
    />

    <Drawer docked={false} open={appDrawerOpen} onRequestChange={handleToggle}>
      <Navigation handleToggle={handleToggle} />
    </Drawer>

    <div style={{ padding: '10px' }}>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/question/:index" component={QuestionsContainer} />
    </div>

  </div>;

App.propTypes = {
  appDrawerOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default App;
