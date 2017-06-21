import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { reducer as formReducer } from 'redux-form';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/AppContainer';
import hanaReducers from './reducers';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const middleware = [thunk];
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
/* eslint-enable */

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(
  combineReducers({
    hanaReducers,
    form: formReducer,
  }), enhancer,
);

injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'));

registerServiceWorker();
