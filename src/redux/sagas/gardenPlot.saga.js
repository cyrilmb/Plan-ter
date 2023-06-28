import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getGardenPlots() {
  try {
    let response = yield axios.get(`/api/gardenPlots/${action.payload}`);
    yield put({ type: 'SET_GARDEN_PLOTS', payload: response.data });
  } catch (error) {
    console.error('Error getting plots information', error);
  }
}

function* gardenPlotsSaga() {
  yield takeLatest('FETCH_GARDEN_PLOTS', getGardenPlots);
}

export default gardenPlotsSaga;
