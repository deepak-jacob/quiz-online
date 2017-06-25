import { combineReducers } from 'redux';
import env from './env';
import questions from './questions';
import answers from './answers';

const rootReducer = combineReducers({
  env,
  questions,
  answers,
});

export default rootReducer;
