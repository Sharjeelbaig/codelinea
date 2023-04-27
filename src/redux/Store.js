import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './RootReducer';

// eslint-disable-next-line import/prefer-default-export
export function configureStore(InitialState) {
  const Store = createStore(
    RootReducer,
    InitialState,
     applyMiddleware(thunk)
  );
  return Store;
}