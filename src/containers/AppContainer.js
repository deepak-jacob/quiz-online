import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import App from '../components/App';
import { getAppDrawerOpenState, handleToggle } from '../actions/EnvActions';

const mapStateToProps = store => ({
  appDrawerOpen: getAppDrawerOpenState(store),
});

export default withRouter(connect(mapStateToProps, { handleToggle })(App));
