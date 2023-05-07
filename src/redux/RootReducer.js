import { combineReducers } from 'redux';
import InputReducer from './input/InputReducer'
import OutputReducer from './output/OutputReducer'
import QuestionReducer from './question/QuestionReducer';
import AnswerReducer from './answer/AnswerReducer';


const RootReducers = combineReducers({
InputReducer,
OutputReducer,
QuestionReducer,
AnswerReducer
});

export default RootReducers;