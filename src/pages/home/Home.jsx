import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getData } from '../../services/redux/blogdata'

function Home() {
    const [data, setData] = useState({
        title: 'Berita Terkini',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique asperiores laudantium id cumque adipisci impedit libero accusamus perferendis fugit est. Ad quos nulla labore illo numquam ab explicabo perferendis ullam.',
        date: '08 February, 2022',
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function toPage(){
        await navigate('/blog-detail')
        dispatch(getData({dataBlog: data}))
    }

    return (
        <>
            {data && Object.keys(data).length > 0 ? (
                <div className="card-blog" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px'
                }}>
                    <h3>{data.title}</h3>
                    <p>{data.text}</p>
                    <span>{data.date}</span>
                    <button onClick={toPage}>Read More</button>
                </div>
            ) : (
                <p>loading</p>
            )}
        </>
    )
}

export default Home