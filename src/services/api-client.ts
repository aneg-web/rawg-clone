import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '969064c1bf314cbdb73d98779117a20e'
  }
})