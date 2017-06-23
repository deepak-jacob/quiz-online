import * as types from '../constants/ActionTypes';

const questions = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_QUESTIONS:
      return [...action.questions];
    default:
      return state;
  }
};

export default questions;
