import { fetchPhotos } from './actionCreators.js';
const GET_PHOTOS = 'GET_PHOTOS';

export default function photosReducer(state=[], action) {
  let newState = [...state];

  switch(action.type) {

    case GET_PHOTOS:
      newState = newState.concat(action.photos);
      return newState;

    default:
      return state;

  }
}

