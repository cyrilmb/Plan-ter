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

    return (
        <div>
            <Canvas />
            <div class="container mx-auto p-4">
                <form class="bg-pink-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"></input>
                    </div>
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"></input>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-yellow-400 hover:text-yellow-600" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GardenPlots;