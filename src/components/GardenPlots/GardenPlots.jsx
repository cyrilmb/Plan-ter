import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function GardenPlots() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const userId = user.id;

    useEffect(() => {
        dispatch({
            type: 'FETCH_ALL_PLOTS',
            payload: userId
        });
    }, []);

    return;
}

export default GardenPlots;