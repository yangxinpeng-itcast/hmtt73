// 配置axios

import axios from 'axios'


//创建一个axios对象放默认路径及token
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0',
})


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const user = window.sessionStorage.getItem('hm73')
  if (user) {
    // 这里写config.hewders也可以
    instance.defaults.headers = {
      Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('hm73')).token
    }
  }
  //   console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (error.response && error.response.status === 401) {
    //因为本文件不是vue组件，所以不能用$router.push进行跳转
    location.hash='#/login'
  }
  return Promise.reject(error);
});



//导出instance
export default instance
