import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { submitForm } from '../../services/redux/form'

function FormData(){
    const [value, setValue] = useState({
        name: '',
        age: '',
        address: ''
    })

    const dispath = useDispatch()
    const history = useNavigate()
    
    function changeInput(e){
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            margin: '0 auto'
        }} onSubmit={(e)=>{
            e.preventDefault()
            dispath(submitForm({data: value}))
            history('/result-form/1')
        }}>
            <input type="text" name='name' value={value.name} onChange={changeInput} placeholder="name"/>
            <input type="text" name='age' value={value.age} onChange={changeInput} placeholder="age"/>
            <input type="text" name='address' value={value.address} onChange={changeInput} placeholder="address"/>
            <button style={{display: 'none'}}></button>
        </form>
        </>
    )
}

export default FormData