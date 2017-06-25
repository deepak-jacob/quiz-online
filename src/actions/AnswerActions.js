import * as types from '../constants/ActionTypes';

const receiveAnswers = answers => ({
  type: types.RECEIVE_ANSWERS,
  answers,
});

export const fetchAllAnswers = () => dispatch => {
  fetch('/answers.json')
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
      dispatch(receiveAnswers(json));
    })
    .catch(function(error) {
      console.log('request failed', error);
    });
};
