import React from 'react'
import StateArray from './StateArray'
import StateBoolean from './StateBoolean'
import StateNumber from './StateNumber'
import StateObject from './StateObject'
import StateString from './StateString'

function UseState() {
  return (
    <>
    <StateString></StateString>
    <StateNumber></StateNumber>
    <StateBoolean></StateBoolean>
    <StateArray></StateArray>
    <StateObject></StateObject>
    </>
  )
}

export default UseState