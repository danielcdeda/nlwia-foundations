import axios from "axios";

export const sever = axios.create({
    baseURL: "http://localhost:3333",
})