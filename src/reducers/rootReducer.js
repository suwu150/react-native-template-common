import { combineReducers } from 'redux';
import NavReducer from './navReducer';

const rootReducer = combineReducers({
  navReducer: NavReducer,
});

export default rootReducer;
