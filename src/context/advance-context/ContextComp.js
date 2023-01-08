import React from 'react'
import { ContextGet } from './ContextFile'

function ContextComp() {
 const val = ContextGet()
 console.log(val)
    return (
    <>
    <h1>{val}</h1>
    </>
  )
}

export default ContextComp