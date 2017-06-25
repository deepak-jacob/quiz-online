import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Result from '../components/Result';
import { fetchAllAnswers } from '../actions/AnswerActions';

const mapStateToProps = (state, { match }) => ({
  correctAnswers: state.quizReducers.answers.correctAnswers,
  total: state.quizReducers.questions.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllAnswers: fetchAllAnswers,
    },
    dispatch
  );

class ResultContainer extends React.Component {
  componentWillMount() {
    this.props.fetchAllAnswers();
  }

  render() {
    return this.props.hasOwnProperty('correctAnswers')
      ? <Result {...this.props} />
      : <div>Loading... </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
