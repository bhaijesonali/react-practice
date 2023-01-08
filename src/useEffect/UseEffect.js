import React from 'react'
import ComponentDidMount from './ComponentDidMount'
import ComponentDidMountAxios from './ComponentDidMountAxios'
import ComponentDidUpdate from './ComponentDidUpdate'
import ComponentWillUnmount from './ComponentWillUnmount'
import MountAndUpdate from './MountAndUpdate'

function UseEffect() {
    return (
        <>
            {/* <MountAndUpdate></MountAndUpdate> */}
            {/* <ComponentDidMount></ComponentDidMount> */}
            {/* <ComponentDidUpdate></ComponentDidUpdate> */}
            <ComponentWillUnmount></ComponentWillUnmount>
            {/* <ComponentDidMountAxios></ComponentDidMountAxios> */}
        </>
    )
}

export default UseEffect