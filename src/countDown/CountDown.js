import React, { useState, useEffect } from 'react'

function CountDown() {
    const [count, setCount] = useState(0)
    const timer = () => {
        setTimeout(() => {
            setCount((e) => e + 1)
        }, 1000);
    }

    useEffect(() => {
        timer()
    }, [count])

    return (
        <>
            <h1>{count}</h1>
        </>
    )
}

export default CountDown