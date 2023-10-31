import React from 'react'
import {useDispatch, useSelector} from "react-redux"
const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((e)=>{
        console.log(e.show.value)
        return e.show.value
    })
  return (
    <>
        <h1>Hello World {data} </h1>
        <button onClick={dispatch(add())} > click ME </button>

    </>
  )
}

export default Home