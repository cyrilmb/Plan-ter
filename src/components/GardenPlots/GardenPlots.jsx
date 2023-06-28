import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function GardenPlots() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const plots = useSelector(store => store.gardenPlotReducer.allUserPlotsReducer);

    const userId = user.id;

    useEffect(() => {
        dispatch({
            type: 'FETCH_GARDEN_PLOTS',
            payload: userId
        });
    }, []);

    return;
}

export default GardenPlots;