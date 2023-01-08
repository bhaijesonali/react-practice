import React from 'react'
import { useLocation } from 'react-router-dom'

function ComponentB() {
    const location = useLocation()
    return (
        <>
            {location.state.id}
            {location.state.color}
        </>
    )
}

export default ComponentB