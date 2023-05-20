import { SET_QUESTION } from '../constants';

const INIT_STATE = {
  question: ''
};

const QuestionReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        question: action.question,
      };

    default:
      return state;
  }
};

export default QuestionReducer;