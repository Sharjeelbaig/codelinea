import { combineReducers } from 'redux';
import InputReducer from './input/InputReducer'
import OutputReducer from './output/OutputReducer'

const RootReducers = combineReducers({
InputReducer,
OutputReducer,
});

export default RootReducers;