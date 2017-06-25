import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const Home = ({ onStartClick }) =>
  <Card>
    <CardTitle
      title="Practice driving theory tests"
      subtitle="Riding and Road Safety"
    />
    <CardText>
      <p>
        This practice theory test is provided so you can see how the theory test
        works.
      </p>
      <p>
        This test content are taken from DVLA site, but we are not affilated to
        DVLA.
      </p>
      <p>This is a test open source project use at your own risk.</p>

      <p>The test has only 8 questions at the moment</p>

    </CardText>
    <CardActions>
      <FlatButton
        label="Start test"
        containerElement={<Link to="/question/1" />}
      />
    </CardActions>
  </Card>;

export default Home;
