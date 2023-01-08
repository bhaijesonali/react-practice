import React, { useState } from 'react'

function StateArray() {
  const [arr, setArr] = useState([1])

  const handleArray = () => {
      setArr([...arr, arr.length + 1])
  }

  return (
      <>
          <hr />
          <h1>Array</h1>
          <button onClick={handleArray}>Update</button>
          <h1>{String(arr)}</h1>
          <ul>
              {arr.map((n, i) => {
                  return <li key={i}>{n}</li>
              })}
          </ul>

      </>
  )
}
export default StateArray