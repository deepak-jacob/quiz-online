import * as types from '../constants/ActionTypes';

const answerQuestion = (questionId, answerIndex) => ({
  type: types.RECEIVE_QUESTIONS,
  questionId,
  answerIndex,
});
