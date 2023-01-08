import React from 'react'
import ContextComp from './ContextComp'
import ContextCompNew from './ContextCompNew'
import ContextFile from './ContextFile'

function AdvanceContext() {
  return (
    <>
    <ContextFile>
      <ContextComp></ContextComp>
      <ContextCompNew></ContextCompNew>
    </ContextFile>
    </>
  )
}

export default AdvanceContext