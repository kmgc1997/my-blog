---
title: Vue项目axios的配置
date: 2023-02-22
tags:
 - Vue
categories:
 -  Vue2笔记
---
---
[axios](https://www.axios-http.cn/) Axios是一个基于promise的网络请求库，可以用于浏览器和node.js

安装
---
npm install axios安装最新版本，npm install axios@xxx指定版本安装。

配置axios
---
在src目录下创建名为utils的文件夹，里面新增request.js文件。
```js
//引入axios
import axios from 'axios';
// 创建 axios 实例
const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // API 请求的默认前缀
  timeout: 6000 // 请求超时时间
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default request
```
在配置接口的文件中引用
---
```js
import { request } from '@/utils/request'

export function getUserList(parameter) {
  //返回的是一个promise对象
  return request({
    url: '/user/list',
    method: 'get',
    params: parameter
  })
}
```
调用封装好的方法
---
```js
import { getUserList } from '@/api/api'

getUserList({param:'xxxx'}).then((res)=>{

})
```