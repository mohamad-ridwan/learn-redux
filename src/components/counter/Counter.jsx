import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment} from '../../services/redux/counterSlice'

function Counter(){
    const count = useSelector((state)=> state.bangsat.nilai)
    const dispath = useDispatch()
// tes
    return(
        <>
            <button onClick={()=>dispath(increment())}>
                Increment
            </button>
            <span>value = {count}</span>
            <button onClick={()=>dispath(decrement())}>
                Decrement
            </button>
        </>
    )
}

export default Counter