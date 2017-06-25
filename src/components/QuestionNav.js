import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const NEXT = 'NEXT';
const PREV = 'PREV';

const buildUrl = (index, total, type) => {
  if (type === PREV)
    return index === '1' ? `/question/${+index}` : `/question/${+index - 1}`;
  else if (type === NEXT)
    return index < total ? `/question/${+index + 1}` : `/results`;
};

const QuestionNav = ({ index, total }) => {
  return (
    <div>

      <FlatButton
        label="Prev"
        containerElement={<Link to={buildUrl(index, total, PREV)} />}
      />
      <FlatButton
        label="Next"
        containerElement={<Link to={buildUrl(index, total, NEXT)} />}
      />

    </div>
  );
};

export default QuestionNav;
