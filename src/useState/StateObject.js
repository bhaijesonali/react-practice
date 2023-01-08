import { Male } from '@mui/icons-material'
import React, { useState } from 'react'

function StateObject() {
  const [obj, setObj] = useState({ fname: 'Devendra', gender: 'Male', dob: '30 june' })
  const handleObject = () => {
    setObj({ ...obj, ["fname"]: "Sonali", ["gender"]: "female", ["dob"]: "6 April" })
  }
  return (
    <>
      <h1>Object</h1>
      <p>{obj.fname}</p>
      <p>{obj.gender}</p>
      <p>{obj.dob}</p>
      <button onClick={handleObject}> Change </button>
    </>
  )
}

export default StateObject