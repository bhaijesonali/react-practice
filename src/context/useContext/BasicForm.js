import { Button } from '@mui/material'
import React, { createContext, useState } from 'react'
import Level1 from './Level1'

export const UserContext = createContext()
function BasicForm() {
    const [input, setInput] = useState({})
    const [data, setData] = useState([])
    console.log(data)

    const handleChange = (e) => {
        setInput((dat) => {
            return {
                ...dat, [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, input])
    }
    return (
        <>
            <UserContext.Provider value={data}>
                    <form>
                        <input type="text" name="user" onChange={handleChange}></input>
                        <input type="password" name="pass" onChange={handleChange}></input>
                        <Button type="submit" onClick={handleSubmit}>Submit</Button>
                    </form>
                    <Level1></Level1>
            </UserContext.Provider>
        </>
    )
}

export default BasicForm