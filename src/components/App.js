import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {
  Route,
  Link
} from 'react-router-dom'
import Navigation from './Navigation';
import Home from './Home';
import Question from './Question';


const App = ({ appDrawerOpen, handleToggle }) => (
  <div>

    <AppBar
      title="Quizline"
      onLeftIconButtonTouchTap={handleToggle}
      iconElementRight={<FlatButton
        label="Login"
        containerElement={<Link to="/login" />}
      />}
    />

    <Drawer
      docked={false}
      open={appDrawerOpen}
      onRequestChange={handleToggle}
    >
      <Navigation handleToggle={handleToggle} />
    </Drawer>

    <div style={{padding: "10px"}}>
      <Route exact path="/" component={Home} />
      <Route path="/question" component={Question} />
    </div>

  </div>
);

App.propTypes = {
  appDrawerOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default App;
