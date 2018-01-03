import axios from 'axios';

const GET_PHOTOS = 'GET_PHOTOS';

export function getPhotos(photos) {
  return {
    type: GET_PHOTOS,
    photos: photos
  };
}

export function fetchPhotos() {
  return function thunk(dispatch) {
    axios.get('/photosReq')
    .then(res => res.data)
    .then(photos => {
      const action = getPhotos(photos);
      dispatch(action);
    })
    .catch((err) => {
      console.error(err);
    });
  };
}


