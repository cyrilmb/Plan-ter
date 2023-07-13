import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Canvas from "../CanvasComponent";

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

    function submitYardDimensions() {

    }

    return (
        <div>
            <Canvas />
            <div class="container mx-auto p-4">
                <form class="bg-pink-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="height">
                            Height
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="height-input" type="int" placeholder="Enter the height in meters"></input>
                    </div>
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="width">
                            Width
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="width-input" type="int" placeholder="Enter the width in meters"></input>
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            onClick={submitYardDimensions()}
                            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GardenPlots;