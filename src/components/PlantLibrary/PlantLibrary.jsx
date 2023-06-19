import './PlantLibrary.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function PlantLibrary() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const plantLibrary = useSelector(store => store.plantLibraryReducer);

    const userId = user.id;

    useEffect(() => {
        dispatch({
            type: 'FETCH_PLANT_LIBRARY',
            payload: userId
        });
    }, []);

    console.log('userId', userId);
    console.log(plantLibrary);

    return;
};

export default PlantLibrary;