import axios from 'axios'

function createApi() {
  return axios.create({
    baseURL: process.ENV.BASE_URL,
  })
}

export const api = createApi()
