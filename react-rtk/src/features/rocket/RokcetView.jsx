import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from './rocketSlice';

const RockerView = () => {
    const dispatch = useDispatch();
    const rocket = useSelector((state) => state.rocket)
    //passing empty array , so useEffect oly runs when component mounts
    useEffect(() => {
        dispatch(fetchRockets())
    }, [])
    return (
        <div>
            <h2>Rocket Info</h2>
            {rocket.status == "loading" &&
                <div>Loading...</div>
            }
            {rocket.status == "failed" && rocket.error ?
                <div>Error: {rocket.error}</div> : null}

            {rocket.status == "succeeded" && rocket.rockets.length ? (
                <ul>
                    {rocket.rockets.map((rocket) => (
                        <li key={rocket.id}>{rocket.rocket_name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default RockerView