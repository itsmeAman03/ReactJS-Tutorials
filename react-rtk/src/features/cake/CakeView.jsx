import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCake)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cake - {numOfCakes}</h2>
            <button
                onClick={() => dispatch(ordered())}>Cake Ordered</button>
            <button
                onClick={() => dispatch(restocked(10))}>Cake Restocked</button>
        </div>
    )
}

export default CakeView