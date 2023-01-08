import axios from "axios";
import { API_URL } from "./Config";

const API = axios.create({
    baseURL: API_URL
})
//READ
export const getData = () => API.get("/posts")

//CREATE
export const postData = (e) => API.post("/posts", e)

//UPDATE
export const putData = (data) => API.put("/posts/1", data)
export const patchData = (data) => API.patch("/posts/1", data)

//DELETE
export const deleteData = () => API.delete("/posts/1")

//QUWRY
export const queryGet = (userId) => API.get(`/posts?userId=${userId}`)
