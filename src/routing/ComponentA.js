import React from 'react'
import { useNavigate } from 'react-router-dom'

function ComponentA() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/componentB", { state: { id: 1, color: "red" } })
    }
    return (
        <>
            <button onClick={handleClick} >ComponentB</button>
        </>
    )
}

export default ComponentA