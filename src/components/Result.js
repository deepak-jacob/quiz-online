import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Home = ({ correctAnswers, total }) =>
  <Card>
    <CardTitle title="Result" />
    <CardText>
      {correctAnswers} out of {total}
    </CardText>
  </Card>;

export default Home;
