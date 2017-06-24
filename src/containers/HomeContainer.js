import { connect } from 'react-redux';
import Home from '../components/Home';
import { fetchAllQuestions } from '../actions/QuestionActions';

const mapDispatchToProps = dispatch => ({
  onStartClick: () => {
    dispatch(fetchAllQuestions());
  },
});

export default connect(null, mapDispatchToProps)(Home);
