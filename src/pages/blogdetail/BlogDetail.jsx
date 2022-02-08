import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function BlogDetail() {
    const data = useSelector(state => state.dataBlog.data)

    return (
        <>
            <h1>Blog Detail</h1>
            <Link to="..">Back To Home</Link>
            <br />
            {data && Object.keys(data).length > 0 ? (
                <div className="card-blog" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px'
                }}>
                    <h3>{data.title}</h3>
                    <p>{data.text}</p>
                    <span>{data.date}</span>
                </div>
            ) : (
                <p>Loading</p>
            )}
        </>
    )
}

export default BlogDetail