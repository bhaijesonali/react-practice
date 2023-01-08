import { Button } from '@mui/material'
import React, { useState } from 'react'

function Counter() {
  const [val, setVal] = useState(0)
  console.log(val)

  const handelChange = () => {
    setVal((e) => e + 1)
  }

  return (
    <>
      <h1>{val}</h1>
      <Button onClick={handelChange}>click</Button>
    </>
  )
}

export default Counter