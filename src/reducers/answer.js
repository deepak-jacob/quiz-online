import * as types from '../constants/ActionTypes';

const questions = (state = {}, action) => {
  const newState = { ...state };
  const questionId = action.questionId;
  const answerIndex = action.answerIndex;
  newState[questionId] = newState[questionId] || [];

  switch (action.type) {
    case types.ADD_ANSWER_TO_QUESTION:
      newState[questionId].push(+answerIndex);
      return newState;
    case types.DELETE_ANSWER_TO_QUESTION:
      newState[questionId].splice(newState[questionId].indexOf(answerIndex), 1);
      return newState;
    default:
      return state;
  }
};

export default questions;
