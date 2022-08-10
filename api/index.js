import axios from 'axios'

function createApi() {
  console.log('123', process.env.baseUrl)
  return axios.create({
    baseURL: process.env.baseUrl,
  })
}

export const api = createApi()
