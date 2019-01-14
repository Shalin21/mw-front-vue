
/* global localStorage */

import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:8082/'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ZGV2Z2xhbi1jbGllbnQ6ZGV2Z2xhbi1zZWNyZXQ='
  }
})
