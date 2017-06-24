import { connect } from 'react-redux';
import Questions from '../components/Questions';
import {
  fetchAllQuestions,
  addAnswerQuestion,
  delAnswerQuestion,
} from '../actions/QuestionActions';

const getQuestionFromIndex = (questions, index) => {
  if (questions && questions[index]) {
    return questions[index];
  }
  return null;
};

const mapStateToProps = (state, { match }) => {
  return {
    index: match.params.index,
    question: getQuestionFromIndex(
      state.quizReducers.questions,
      match.params.index
    ),
    answer: state.quizReducers.answer,
  };
};
//TODO use bindActionCreators instead
const mapDispatchToProps = dispatch => ({
  loadQuestions: () => {
    dispatch(fetchAllQuestions());
  },
  addAnswerQuestion: (...args) => {
    dispatch(addAnswerQuestion(...args));
  },
  delAnswerQuestion: (...args) => {
    dispatch(delAnswerQuestion(...args));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
