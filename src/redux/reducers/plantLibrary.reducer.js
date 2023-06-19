import { combineReducers } from 'redux';

const allPlantsByUserReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLANT_LIBRARY':
      return action.payload;
    default:
      return state;
  }
};

const plantLibraryReducer = combineReducers({
  allPlantsByUserReducer,
});

export default plantLibraryReducer;
