import React, { createContext, useContext, useState } from 'react'


const ContextD = createContext()
function ContextFile({ children }) {
    const [first, setFirst] = useState("Sonali")
    return (
        <>
            <ContextD.Provider value={first}>
                {children}
            </ContextD.Provider>
        </>
    )
}
export default ContextFile

export const ContextGet = () => {
    return useContext(ContextD)
}