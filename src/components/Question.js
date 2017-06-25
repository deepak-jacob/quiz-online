import React from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import Options from './Options';
import QuestionNav from './QuestionNav';

const Question = props => {
  return (
    <Card>
      <CardText>

        {props.question.question.text}
        <Options {...props} />

      </CardText>
      <CardActions>

        <QuestionNav {...props} />

      </CardActions>
    </Card>
  );
};

export default Question;
