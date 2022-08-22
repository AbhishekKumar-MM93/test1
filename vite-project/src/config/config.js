import axios from 'axios';

const http = axios.create({
    // baseUrl:
    baseURL: "http://localhost:5911"

})
const http2 = axios.create({
    // baseUrl:
    baseURL: "http://localhost:5911"

})

export {
    http,
    http2
}