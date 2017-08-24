/*
* @Author: chengbaosheng
* @Date:   2017-08-24 14:23:40
* @Last Modified by:   chengbaosheng
* @Last Modified time: 2017-08-24 15:30:09
*/
import storage from '../utils/storage'
import axios from 'axios'
import { baseUrl } from './index'

let fetcher = axios.create({
  method: 'post',
  baseURL: baseUrl,
  // baseURL: 'http://10.0.31.116:8081',
  // baseURL: 'http://10.0.31.125:8081',
  withCredentials: true,
  transformRequest: [function (data) {
    const userInfo = storage.get('user')
    if (userInfo && data && !data.NOUSERINFO) {
      data.userName = userInfo.userName
      data.accessToken = userInfo.accessToken
    }
    return JSON.stringify(data)
  }],
  headers: {
    'Acces-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
})

fetcher.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

fetcher.interceptors.response.use(function (response) {
  if (response.data.code === 89001 || response.data.code === 81001) {
    location.href = '/login'
  }
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default fetcher.post
