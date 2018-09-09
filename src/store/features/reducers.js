import { combineReducers } from 'redux';
import clickCounter from './clickCounter/reducers';
import directory from './directory/reducers';

const rootReducer = combineReducers({
  clickCounter,
  directory
});
export default rootReducer;