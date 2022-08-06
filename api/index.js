import axios from 'axios'

function createApi() {
  return axios.create({
    baseURL: process.env.BASE_URL,
  })
}

export const api = createApi()
