import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const style = {
  padding: '10px 0',
};

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.onCheckCallback = this.onCheckCallback.bind(this);
  }

  onCheckCallback(event, isChecked) {
    this.props.toggleAnswerQuestion(
      this.props.question.id,
      event.target.value,
      isChecked
    );
  }

  render() {
    return (
      <div style={style}>
        {this.props.question.answers.map((ans, index) => {
          let isChecked = false;
          let currentQuestion = this.props.answers[this.props.question.id];

          if (currentQuestion && currentQuestion.indexOf(index) > -1) {
            isChecked = true;
          }

          return (
            <Checkbox
              key={index}
              label={ans.text}
              style={style}
              onCheck={this.onCheckCallback}
              value={index}
              checked={isChecked}
            />
          );
        })}
      </div>
    );
  }
}
