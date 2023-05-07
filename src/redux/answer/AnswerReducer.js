import { SET_ANSWER } from '../constants';

const INIT_STATE = {
  answer: ''
};

const AnswerReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ANSWER:
      return {
        ...state,
        answer: action.answer,
      };

    default:
      return state;
  }
};

export default AnswerReducer;