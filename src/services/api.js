import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-cadastro-1.onrender.com',
  timeout: 60000
})


fetch('https://backend-cadastro-1.onrender.com/healthz')

export default api
