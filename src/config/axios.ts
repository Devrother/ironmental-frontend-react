import axios from 'axios'
import { apiConfig } from 'src/constants'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: apiConfig.TIME_OUT,
})

export default instance
