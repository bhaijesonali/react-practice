import React from 'react'
import NormalForm from './forms/NormalForm'
import UseState from './useState/UseState'
import Parent from './tab-funtionality/Parent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComponentA from './routing/ComponentA'
import ComponentB from './routing/ComponentB'
import Child from './tab-funtionality/Child'
import CompJson from './api/CompJson'
import Counter from './counter/Counter'
import Demo from './demo/Demo'
import CountDown from './countDown/CountDown'
import UseContext from './context/useContext/UseContext'

function App() {
  return (
    <>
      {/* <NormalForm></NormalForm> */}
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Parent></Parent>}></Route>
      <Route path="/:pageName" element={<Child></Child>}></Route>
    </Routes>
    </BrowserRouter> */}
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<ComponentA></ComponentA>}></Route>
      <Route path="/componentB" element={<ComponentB></ComponentB>}></Route>
    </Routes>
    </BrowserRouter>
     */}
     {/* <CompJson></CompJson> */}
     {/* <Counter></Counter> */}
     {/* <Demo></Demo> */}
     {/* <CountDown></CountDown> */}
     {/* <UseContext></UseContext> */}
     <UseState></UseState>
    </>
  )
}

export default App