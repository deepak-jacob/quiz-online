import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Question from '../components/Question';
import {
  fetchAllQuestions,
  toggleAnswerQuestion,
} from '../actions/QuestionActions';

const getQuestionFromIndex = (questions, index) => {
  if (questions && questions[index - 1]) {
    return questions[index - 1];
  }
  return null;
};

const mapStateToProps = (state, { match }) => ({
  index: match.params.index,
  total: state.quizReducers.questions.length,
  question: getQuestionFromIndex(
    state.quizReducers.questions,
    match.params.index
  ),
  answers: state.quizReducers.answers,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadQuestions: fetchAllQuestions,
      toggleAnswerQuestion: toggleAnswerQuestion,
    },
    dispatch
  );

class QuestionContainer extends React.Component {
  componentWillMount() {
    if (!this.props.question) {
      this.props.loadQuestions();
    }
  }

  render() {
    return this.props.question
      ? <Question {...this.props} />
      : <div>Loading... </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
