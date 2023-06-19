import { combineReducers } from 'redux';

const allUserPlantsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLANT_LIBRARY':
      return action.payload;
    default:
      return state;
  }
};

const plantLibraryReducer = combineReducers({
  allUserPlantsReducer,
});

export default plantLibraryReducer;
