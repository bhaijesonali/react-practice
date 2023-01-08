import React from 'react'
import { deleteData, getData, patchData, postData, putData, queryGet } from './Api'

function CompJson() {


    const handleGet = async () => {
        const res = await getData()
        console.log(res.data)
    }
    const handlePost = async () => {
        const store = { id: 101, body: "Sonali", title: "Electrical enginner", userId: 101 }
        const res = await postData(store)
        console.log(res.data);
    }
    const handlePut = async () => {
        const store = { id: 1, body: "Devendra", title: "Front End developer", userId: 1 }
        const res = await putData(store)
        console.log(res.data);
    }
    const handlePatch = async () => {
        const store = { body: "Devashree" }
        const res = await patchData(store)
        console.log(res.data);
    }
    const handleDelete = async () => {
        const res = await deleteData()
        console.log(res.data);
    }
    const handleQuery = async () => {
        const a = 1
        const res = await queryGet(a)
        console.log(res.data);
    }
    return (
        <>
            <button onClick={handleGet}>GET</button>
            <button onClick={handlePost}>POST</button>
            <button onClick={handlePut}>PUT</button>
            <button onClick={handlePatch}>PATCH</button>
            <button onClick={handleDelete}>DELETE</button>
            <button onClick={handleQuery}>QUERY</button>
        </>
    )
}

export default CompJson