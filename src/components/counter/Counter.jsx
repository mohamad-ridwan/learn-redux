import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment} from '../../services/redux/counterSlice'
import FormData from '../formdata/FormData'

function Counter(){
    const count = useSelector((state)=> state.bangsat.nilai)
    const dataForm = useSelector((state)=> state)
    const dispath = useDispatch()
    
    return(
        <>
            <button onClick={()=>dispath(increment({action: 3}))}>
                Increment
            </button>
            <span>value = {count}</span>
            <button onClick={()=>dispath(decrement())}>
                Decrement
            </button>

            <FormData/>
        </>
    )
}

export default Counter