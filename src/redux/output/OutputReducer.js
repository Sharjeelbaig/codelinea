import { SET_OUTPUT } from '../constants';

const INIT_STATE = {
  explanation: '',
  language: '',
  depthExplanation: '',
  sample:'',
  sampleExplanation:'',
};

const OutputReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_OUTPUT:
      return {
        ...state,
        explanation: action.explanation,
        language: action.language,
        depthExplanation: action.depthExplanation,
        sample:action.sample,
        sampleExplanation:action.sampleExplanation
      };

    default:
      return state;
  }
};

export default OutputReducer;