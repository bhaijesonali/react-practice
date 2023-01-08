import React, { useState } from 'react'

function StateBoolean() {
  
  const [bool, setBool] = useState(false)

  const handleBool = () => {
      setBool(!bool)
  }

  const styles = {
      height: '25vh',
      width: '25vw',
      background: "red",
  }

  return (
      <>
          <hr></hr>
          <h1>Boolean</h1>
          {!bool ? <div style={styles}></div> : ""}
          <button onClick={handleBool}>{bool ? "Show" : "Hide"}</button>
      </>
  )
}

export default StateBoolean