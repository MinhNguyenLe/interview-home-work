import {combineReducers} from 'redux';
import bloggerReducer from './blogger/blogger-reducer';

const rootReducer = combineReducers({
  dataBlog : bloggerReducer,
});

export default rootReducer;