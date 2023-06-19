import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPlantLibrary(action) {
  try {
    let response = yield axios.get(`/api/plantLibrary/${action.payload}`);
    yield put({ type: 'SET_PLANT_LIBRARY', payload: response.data });
  } catch (error) {
    console.error('Error getting plant library', error);
  }
}

function* plantLibrarySaga() {
  yield takeLatest('FETCH_PLANT_LIBRARY', getPlantLibrary);
}

export default plantLibrarySaga;
