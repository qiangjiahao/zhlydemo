
/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import qs from 'qs';
import { Loading, Message } from 'element-ui'
// import { Toast } from 'vant';
// import store from '../store/index'
 
// 环境的切换 
    axios.defaults.baseURL = 'http://dev.xibei.co';
 
// 请求超时时间
axios.defaults.timeout = 3000;
 
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
 
// 请求拦截器
// 添加请求拦截器
var loadinginstace
axios.interceptors.request.use(function (config) {
    // 参数格式转换
    loadinginstace = Loading.service({ fullscreen: true })
    if(config.method=="post"){
        config.data = qs.stringify(config.data);
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    loadinginstace.close()
        Message.error({
        message: '加载超时'
 })
    return Promise.reject(error);
  })
  // http响应拦截器
axios.interceptors.response.use(function(response) {// 响应成功关闭loading
    loadinginstace.close()
    return response
   }, function(error){
    loadinginstace.close()
    Message.error({
    message: '加载失败'
    })
    return Promise.reject(error)
})
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {    
    return new Promise((resolve, reject) => {         
        axios.post(url, params)        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {   
            reject(err.data)        
        })    
    });
}