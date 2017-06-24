import React from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router-dom';

const style = {
  margin: '10px 0',
};

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.onCheckCallback = this.onCheckCallback.bind(this);
  }

  onCheckCallback(event, isChecked) {
    if (isChecked) {
      this.props.addAnswerQuestion(this.props.question.id, event.target.value);
    } else {
      this.props.delAnswerQuestion(this.props.question.id, event.target.value);
    }
  }

  render() {
    return (
      <Card>
        <CardText>
          {this.props.question.question.text}
          <div style={{ padding: '10px 0' }}>
            {this.props.question.answers.map((ans, index) => {
              let isChecked = false;

              console.log('QID', this.props.question.id);
              console.log('ANS', this.props.answer);
              console.log('index', index);

              if (
                this.props.answer[this.props.question.id] &&
                this.props.answer[this.props.question.id].indexOf(index) > -1
              ) {
                isChecked = true;
              }

              console.log(isChecked);

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
        </CardText>
        <CardActions>
          <FlatButton
            label="Prev"
            containerElement={
              <Link to={`/question/${+this.props.index - 1}`} />
            }
          />
          <FlatButton
            label="Next"
            containerElement={
              <Link to={`/question/${+this.props.index + 1}`} />
            }
          />
        </CardActions>
      </Card>
    );
  }
}
