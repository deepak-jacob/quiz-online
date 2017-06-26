import * as types from '../constants/ActionTypes';

/**
 * Reducer for answers
 * 
 * @param {*} state 
 * @param {*} action 
 */
const answers = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
    // when user selecting or unselecting an option
    case types.TOGGLE_ANSWER_TO_QUESTION:
      let questionId = action.questionId;
      let answerIndex = action.answerIndex;

      // get or create current question answer holder
      newState[questionId] = newState[questionId] || [];

      if (action.isSelected) {
        // add answer index
        newState[questionId].push(+answerIndex);
      } else {
        // remove answer index
        newState[questionId].splice(
          newState[questionId].indexOf(answerIndex),
          1
        );
      }

      return newState;

    case types.RECEIVE_ANSWERS:
      // reduce answers array to correct answers
      let correctAnswers = action.answers.reduce((correctCount, answser) => {
        // if no answer found in state, return current count
        if (!state[answser.id]) return correctCount;

        // sort user answers array and join as string for easy comparison
        let userAnswerStr = state[answser.id].sort().join();

        // find only correct answers index sort and join as string
        let serverAnswerStr = answser.answers
          .reduce((serverAnswerArray, ans, index) => {
            if (ans.correct) serverAnswerArray.push(index);
            return serverAnswerArray;
          }, [])
          .sort()
          .join();

        // if userresutls and serverresults are same increment count
        return userAnswerStr === serverAnswerStr
          ? correctCount + 1
          : correctCount;
      }, 0);

      // update newstate
      newState.correctAnswers = correctAnswers;
      return newState;

    default:
      return state;
  }
};

export default answers;
