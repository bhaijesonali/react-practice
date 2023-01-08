import React, { useState } from 'react'

function StateString() {
    const [str, setStr] = useState("Devendra")

    const handleChange = () => {
        setStr("Sonali")
    }
    return (
        <>
            <h1>{str}</h1>
            <button onClick={handleChange}>change</button>
        </>
    )
}

export default StateString