import { SET_CHAT } from "../constants";

const INIT_STATE = {
  chat: [],
};

const ChatReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_CHAT:
      return {
        ...state,
        chat: [
          ...state.chat,
          {
            question: action.question,
            answer: action.answer,
          },
        ],
      };

    default:
      return state;
  }
};

export default ChatReducer;
