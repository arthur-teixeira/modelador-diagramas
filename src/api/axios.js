import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

export default api