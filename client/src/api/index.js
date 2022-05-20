import * as axios from "axios";
import React from 'react';


class PostService {
  axios
  static axios
  constructor() {
    this.axios = axios.create({
      // withCredentials: true,
      // credentials: 'include',
    //   baseURL: `https://api.weather.yandex.ru/v2/informers?`,
      baseURL: `http://localhost:5000`,
      headers: {
        // "Access-Control-Allow-Headers": "*",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "*"  
        // 'X-Yandex-API-Key': '16a8a26e-306d-4d3c-ac30-3193862c7136',
        // 'Content-Type': 'application/json'
      }
    })
  }
  async getСoordinates(lat, lon) {
      return this.axios.get(`/?latitude=lat=${lat}&longitude=lon=${lon}`)
  }
  async getСitys(lt, ln) {
    return this.axios.get(`/?latitude=lat=${lt}&longitude=lon=${ln}`)
  }
}

export default new PostService()
