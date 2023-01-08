import React, { useEffect } from 'react'

function ComponentWillUnmount() {


    useEffect(() => {

        console.log("jivant");

        return () => {
            console.log("mela");
        }
    }, [])


    return (
        <>
        </>
    )
}

export default ComponentWillUnmount