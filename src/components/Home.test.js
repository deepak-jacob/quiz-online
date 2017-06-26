import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

it('Home component should render without crashing', () => {
  injectTapEventPlugin();
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider>
      <Router>
        <Home />
      </Router>
    </MuiThemeProvider>,
    div
  );
});
