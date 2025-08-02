import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'
const IcecreamView = () => {
    const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    const [value, setValue] = useState(1)
    return (
        <div>
            <h2>Number of Ice creams - {numOfIcecream}</h2>
            <button
                onClick={() => dispatch(ordered())}>Icecream Ordered</button>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.currentTarget.value))} />
            <button
                onClick={() => dispatch(restocked(value))}>Icecream Restocked</button>
        </div>
    )
}

export default IcecreamView