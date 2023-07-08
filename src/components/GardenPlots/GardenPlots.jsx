import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function GardenPlots() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const plots = useSelector(store => store.gardenPlotReducer.allUserPlotsReducer);

    const userId = user.id;

    function draw() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);
    }
}
draw();

useEffect(() => {
    dispatch({
        type: 'FETCH_GARDEN_PLOTS',
        payload: userId
    });
}, []);

return;
}

export default GardenPlots;