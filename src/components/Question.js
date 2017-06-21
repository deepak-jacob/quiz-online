import React from 'react';
import {Card, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

const style = {
    margin: '10px 0'
}

const Question = () => (
  <Card>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

      <div style={{padding: "10px 0"}}>
         <Checkbox label="choice one" style={style} />
         <Checkbox label="choice two" style={style} />
         <Checkbox label="choice three" style={style} />
         <Checkbox label="choice four" style={style} />
      </div>

    </CardText>
    <CardActions>
      <FlatButton label="Prev" />
      <FlatButton label="Next" />
    </CardActions>
  </Card>
);


export default Question;