import React from 'react'
import { ContextGet } from './ContextFile'

function ContextCompNew() {
 const val = ContextGet()
    return (
    <>
    <p>{val}</p>
    </>
  )
}

export default ContextCompNew