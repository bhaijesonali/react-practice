import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Child() {
    const { pageName } = useParams()
    console.log(pageName)
    return (
        <>
            <div style={{ width: "50%", display: "flex", justifyContent: "space-between" }}>
                <Link to="/A">Comp A</Link>
                <Link to="/B">Comp B</Link>
                <Link to="/C">Comp C</Link>
            </div>
        </>
    )
}

export default Child