import React, { useState } from 'react'
import "./formStyle.css"

function NormalForm() {
    const [store, setStore] = useState([])
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData((data) => {
            return { ...data, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStore([...store, formData])
    }

    return (
        <>
            <form style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75vh" }}>
                <div style={{ height: "25vh", width: "20vw", border: "2px solid black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div><input type="text" placeholder='Enter Your name' name="fullName" onChange={handleChange}></input></div>
                    <div><input style={{ width: "10.75vw" }} type="date" placeholder='Birth Date' name="dob" onChange={handleChange}></input></div>
                    <div><input type="email" placeholder='Enter Your Email' name="emailId" onChange={handleChange}></input></div>
                    <div><input type="password" placeholder='Password' name="passwordVal" onChange={handleChange}></input></div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Date of birth</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {store.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.fullName}</td>
                                <td>{item.dob}</td>
                                <td>{item.emailId}</td>
                                <td>{item.passwordVal}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}

export default NormalForm