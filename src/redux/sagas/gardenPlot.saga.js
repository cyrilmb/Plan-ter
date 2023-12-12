import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getGardenPlots() {
  try {
    console.log('action.payload', action.payload);
    let response = yield axios.get(`/api/gardenPlots/${action.payload}`);
    yield put({ type: 'SET_GARDEN_PLOTS', payload: response.data });
  } catch (error) {
    console.error('Error getting plots information', error);
  }
}

function* addYardDimensions() {
  try {
    yield axios.post(`/api/yard`, action.payload);
  } catch (error) {
    console.error('Error posting yard dimensions', error);
  }
}

function* gardenPlotsSaga() {
  yield takeLatest('FETCH_GARDEN_PLOTS', getGardenPlots);
  yield takeLatest('ADD_YARD_DIMENSIONS', addYardDimensions);
}

export default gardenPlotsSaga;
