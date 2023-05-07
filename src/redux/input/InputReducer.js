import { SET_INPUT } from '../constants';

const INIT_STATE = {
  input: ''
};

const InputReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: action.code,
      };

    default:
      return state;
  }
};

export default InputReducer;