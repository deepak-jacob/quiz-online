import * as types from '../constants/ActionTypes';

const answers = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.TOGGLE_ANSWER_TO_QUESTION:
      let questionId = action.questionId;
      let answerIndex = action.answerIndex;
      newState[questionId] = newState[questionId] || [];

      if (action.isSelected) {
        newState[questionId].push(+answerIndex);
      } else {
        newState[questionId].splice(
          newState[questionId].indexOf(answerIndex),
          1
        );
      }

      return newState;

    case types.RECEIVE_ANSWERS:
      let correctAnswers = action.answers.reduce((correctCount, answser) => {
        if (!state[answser.id]) return correctCount;
        let userAnswerStr = state[answser.id].sort().join();
        let serverAnswerStr = answser.answers
          .reduce((serverAnswerArray, ans, index) => {
            if (ans.correct) serverAnswerArray.push(index);
            return serverAnswerArray;
          }, [])
          .sort()
          .join();

        return userAnswerStr === serverAnswerStr
          ? correctCount + 1
          : correctCount;
      }, 0);

      newState.correctAnswers = correctAnswers;
      return newState;

    default:
      return state;
  }
};

export default answers;
