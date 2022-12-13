import axios, { AxiosRequestConfig } from "axios"

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
})

class Http {
  async get(url: string, config?: AxiosRequestConfig) {
    await instance.get(url, { ...config })
  }

  async post(url: string, data: any, config?: AxiosRequestConfig) {
    await instance.post(url, data, config)
  }

  async put(url: string, data: any, config?: AxiosRequestConfig) {
    await instance.put(url, data, { ...config })
  }

  async delete(url: string, config?: AxiosRequestConfig) {
    await instance.delete(url, { ...config })
  }
}

export const http = new Http()
