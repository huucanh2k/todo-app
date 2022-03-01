const axios = require("axios")

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/todos/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
})

export default axiosInstance
