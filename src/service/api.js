import axios from 'axios'

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  params: {
    apiKey: 'f582df05a95e42c2953879eae218ff72'
  }
})

export default api
