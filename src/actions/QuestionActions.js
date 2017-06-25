import * as types from '../constants/ActionTypes';

const receiveQuestions = questions => ({
  type: types.RECEIVE_QUESTIONS,
  questions,
});

export const toggleAnswerQuestion = (questionId, answerIndex, isSelected) => ({
  type: types.TOGGLE_ANSWER_TO_QUESTION,
  questionId,
  answerIndex,
  isSelected,
});

export const fetchAllQuestions = () => dispatch => {
  fetch('/questions.json')
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receiveQuestions(json));
    })
    .catch(function(error) {
      console.log('request failed', error);
    });
};
