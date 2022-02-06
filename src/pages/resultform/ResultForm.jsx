import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

function ResultForm() {
    const data = useSelector(state => state.dataForm.data)

    const params = useParams()
    const history = useNavigate()

    return (
        <>
            name: {data.name}
            age: {data.age}
            address: {data.address}

            <button onClick={() => {
                history('/result-form/anjing')
            }}>
                change page
            </button>

            path: {params.path}
        </>
    )
}

export default ResultForm