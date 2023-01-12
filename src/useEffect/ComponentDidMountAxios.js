import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ComponentDidMountAxios() {
    const [toggle, setToggle] = useState(false)
    const [count, setCount] = useState(0)
    const [data, setData] = useState()

    const ApiCall = () => {
        const URL = "https://jsonplaceholder.typicode.com/users"
        axios.get(URL)
            .then((res) => {
                console.log(res.data)
                
                setData(res.data)
            })
    }

    const handleClick = () => {
        setToggle(!toggle)
    }

    const timer = () => {
        setTimeout(() => {
            setCount((c) => c + 1)
        }, 1000);
    }

    //component did mount
    // useEffect(() => {
    //     ApiCall()
    // }, [])

    //component did update
    // useEffect(() => {
    //     ApiCall()
    // }, [toggle])

    //component did update every second
    // useEffect(() => {
    //     timer()
    //     ApiCall()
    // }, [count])

    //store data and print
    // useEffect(() => {
    //     ApiCall()
    // }, [])

    const getData = () => {
        ApiCall()
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click</button>
            <button onClick={getData}> get data on Click</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {/* optional chaining */}
                {/* {data?.map((items) => {
                    return <>
                        <tbody>
                            <tr key={items.id} >
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                            </tr>
                        </tbody>
                    </>
                })} */}

                {/* using && operator */}
                {/* {data && data.map((items) => {
                    return <>
                        <tbody>
                            <tr key={items.id} >
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                            </tr>
                        </tbody>
                    </>
                })} */}

            </table>
        </>
    )
}

export default ComponentDidMountAxios