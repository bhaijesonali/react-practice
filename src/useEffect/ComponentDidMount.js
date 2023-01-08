import React, { useEffect, useState } from 'react'

function ComponentDidMount() {
    const [count, setCount] = useState(0)
    console.log("count", count);
    
    const timer = () => {
        setTimeout(() => {
            setCount((c) => c + 1)
        }, 1000)
    }

    useEffect(() => {
        timer()
    }, [])

    return (
        <>
            <hr />
            <h1>Mount {count}</h1>
        </>
    )
}


export default ComponentDidMount