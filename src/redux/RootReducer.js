import { combineReducers } from 'redux';
import InputReducer from './input/InputReducer'
import OutputReducer from './output/OutputReducer'
import QuestionReducer from './question/QuestionReducer';
import ChatReducer from './chat/ChatReducer';


const RootReducers = combineReducers({
InputReducer,
OutputReducer,
QuestionReducer,
ChatReducer
});

export default RootReducers;