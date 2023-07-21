import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import YardCanvas from "../YardCanvas/YardCanvas";

function GardenPlots() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const plots = useSelector(store => store.gardenPlotReducer.allUserPlotsReducer);

    const userId = user.id;

    const [yardDimensions, setYardDimensions] = useState({
        yardWidth: '',
        yardHeight: ''
    });

    useEffect(() => {
        console.log('yardHeight, yardWidth', yardDimensions.yardHeight, yardDimensions.yardWidth);
        // dispatch({
        //     type: 'FETCH_GARDEN_PLOTS',
        //     payload: userId
        // });
    }, []);


    async function submitYardDimensions() {
        const yardDimensions = [yardWidth, yardHeight];
        try {
            await axios.post('api/yard', yardDimensions);
        } catch (error) {
            console.log('Error posting new yard dimensions:', error);
        }
    }



    return (
        <div className="flex">
            <YardCanvas yardWidth={yardDimensions.yardWidth} yardHeight={yardDimensions.yardHeight} className="flex-1 container mx-auto p-4" />
            <div className="flex-1 container mx-auto p-4">
                <form className="bg-pink-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label className="block text-white text-lg font-bold mb-2" htmlFor="width">
                        First, enter the dimensions of your whole yard:
                    </label>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="width">
                            Width
                        </label>
                        <input
                            value={yardDimensions.yardWidth}
                            onChange={(event) => {
                                setYardDimensions({ ...yardDimensions, yardWidth: event.target.value });
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="width-input" type="int" placeholder="Enter the width in meters"></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="height">
                            Height
                        </label>
                        <input
                            value={yardDimensions.yardHeight}
                            onChange={(event) => {
                                setYardDimensions({ ...yardDimensions, yardHeight: event.target.value });
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="height-input" type="int" placeholder="Enter the height in meters"></input>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => { submitYardDimensions(); }}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GardenPlots;