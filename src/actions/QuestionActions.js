import * as types from '../constants/ActionTypes';

const receiveQuestions = questions => ({
  type: types.RECEIVE_QUESTIONS,
  questions,
});

export const addAnswerQuestion = (questionId, answerIndex) => ({
  type: types.ADD_ANSWER_TO_QUESTION,
  questionId,
  answerIndex,
});

export const delAnswerQuestion = (questionId, answerIndex) => ({
  type: types.DELETE_ANSWER_TO_QUESTION,
  questionId,
  answerIndex,
});

export const fetchAllQuestions = () => dispatch => {
  fetch('/questions.json')
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
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

export const checkResult = formValues => () => {
  const formData = Object.keys(formValues)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(formValues[k])}`)
    .join('&');

  fetch('/rcnuts', {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  });
};

export const getNutsFromState = state => state.hanaReducers.nuts;
