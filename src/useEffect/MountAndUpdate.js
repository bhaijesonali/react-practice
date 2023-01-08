import React, { useEffect, useState } from 'react'

function ComponentDidUpdate() {

    const [A, setA] = useState(false)
    const [B, setB] = useState(false)

    const demo = () => {
        alert("component updated")
    }

    useEffect(() => {
        demo()
    }, [A])

    return (
        <>
            <hr />
            <button onClick={() => setA(!A)}>A</button>
            <button onClick={() => setB(!B)}>B</button>
            <h1>A={String(A)} B={String(B)}</h1>
        </>
    )
}

export default ComponentDidUpdate