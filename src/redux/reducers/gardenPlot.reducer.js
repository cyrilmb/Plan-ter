import { combineReducers } from 'redux';

const allUserPlotsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_GARDEN_PLOTS':
      return action.payload;
    default:
      return state;
  }
};

const gardenPlotReducer = combineReducers({
  allUserPlotsReducer,
});

export default gardenPlotReducer;
