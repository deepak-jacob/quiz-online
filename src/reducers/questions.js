import * as types from '../constants/ActionTypes';

/**
 * Reducer of questions once reviced form backend
 * save received questions to state
 * 
 * @param {*} state 
 * @param {*} action 
 */

const questions = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_QUESTIONS:
      return [...action.questions];
    default:
      return state;
  }
};

export default questions;
