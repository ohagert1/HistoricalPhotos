import axios from 'axios';
import react from 'react';
import { combineReducers } from 'redux';
import photosReducer from './photosReducer';

const rootReducer = combineReducers({
  photos: photosReducer
});

export default rootReducer;
export * from './actionCreators';
