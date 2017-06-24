import React from 'react';
import Question from './Question';

export default class Questions extends React.Component {
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
