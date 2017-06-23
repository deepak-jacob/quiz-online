import { combineReducers } from 'redux';
import env from './env';
import questions from './questions';
import answer from './answer';

const rootReducer = combineReducers({
  env,
  questions,
  answer,
});

export default rootReducer;
