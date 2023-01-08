import React, { useState } from 'react'

function StateNumber() {
  const [num, setNum] = useState(0)
  const hamdleNumber = () => {
    setNum((n) => n + 1)
  }

  return (
    <>
      <h1>Number</h1>
      <h1>{num}</h1>
      <button onClick={hamdleNumber}>Increase</button>
    </>
  )
}


export default StateNumber