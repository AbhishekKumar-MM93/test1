import axios from 'axios';

const http = axios.create({
    // baseUrl:
    baseURL: "http://localhost:4000"

})
const http2 = axios.create({
    // baseUrl:
    baseURL: "http://localhost:4000"

})

export {http,http2}