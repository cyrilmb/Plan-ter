import './PlantLibrary.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function PlantLibrary() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const plantLibrary = useSelector(store => store.plantLibraryReducer.allPlantsByUserReducer
    );

    const userId = user.id;

    useEffect(() => {
        dispatch({
            type: 'FETCH_PLANT_LIBRARY',
            payload: userId
        });
    }, []);

    return (
        <div>
            <button>ADD A NEW PLANT</button>
            <table>
                <thead>
                    <tr>
                        <th>Common Name</th>
                        <th>Scientific Name</th>
                        <th>Height (cm)</th>
                        <th>Radius (cm)</th>
                        <th>Perennial</th>
                        <th>Sprout Start</th>
                        <th>Death Dormant Start</th>
                        <th>Leaf Type</th>
                        <th>Flower Color</th>
                        <th>Flower Start</th>
                        <th>Flower End</th>
                        <th>Fruit Type</th>
                        <th>Fruit Start</th>
                        <th>Fruit End</th>
                        <th>Sun Exposure</th>
                        <th>Soil Type</th>
                    </tr>
                </thead>
                <tbody>
                    {plantLibrary?.map((plant, i) => (
                        <tr key={i}>
                            <td>{plant.common_name}</td>
                            <td>{plant.sci_name}</td>
                            <td>{plant.height_cm}</td>
                            <td>{plant.radius_cm}</td>
                            <td>{plant.perennial ? 'Yes' : 'No'}</td>
                            <td>{plant.sprout_start}</td>
                            <td>{plant.death_dormant_start}</td>
                            <td>{plant.leaf_type}</td>
                            <td>{plant.flower_color}</td>
                            <td>{plant.flower_start}</td>
                            <td>{plant.flower_end}</td>
                            <td>{plant.fruit_type}</td>
                            <td>{plant.fruit_start}</td>
                            <td>{plant.fruit_end}</td>
                            <td>{plant.sun_exposure}</td>
                            <td>{plant.soil_type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlantLibrary;