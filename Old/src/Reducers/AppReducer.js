import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import ColorReducer from './ColorReducer';

const AppReducer = combineReducers({
  nav: NavReducer,
  color: ColorReducer,
});

export default AppReducer;