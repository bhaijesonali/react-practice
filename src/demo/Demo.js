import { Button } from '@mui/material'
import React, { useState } from 'react'

function Demo() {
  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const [num, setNum] = useState(0)

  const numberOne = (e) => {
    setNumber1(Number(e.target.value))
  }

  const numberTwo = (e) => {
    setNumber2(Number(e.target.value))
  }

  const handleChange = () => {
    setNum(`Add:${number1 + number2}, Sub:${number1 - number2}, Multipy:${number1 * number2}, Divide:${number1 / number2}`)
  }

  return (
    <>
      <div className="App">
        <div>
          <input onChange={numberOne} placeholder="Enter Number " name="a"/>
          <input onChange={numberTwo} placeholder="Enter Number" name="b" />
          <button onClick={handleChange}> calculate</button>
        </div>
      </div>
      <h1>{num}</h1>
    </>
  )
}

export default Demo
