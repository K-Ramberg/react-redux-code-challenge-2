import { combineReducers } from 'redux';
import directory from './directory/reducers';

const rootReducer = combineReducers({
  directory
});
export default rootReducer;