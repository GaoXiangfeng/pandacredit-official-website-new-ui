import axios from 'axios'
import store from '../store/index'
import {Notice} from 'iview'
import Promise from './promise.service'
import Bus from './bus.service'
import localStorage from './localStorage.service'
import config from '../config/index'

let CancelToken = axios.CancelToken //axios中断取消请求
let httpQueue = [] //请求队列
let cancelArr = [] //存储取消方法
let timeout = 200 //延时loading
let loadingTimeOut
let closeTimeOut
const opRedirectUrl = config.initUrl

axios.defaults.headers.common['X-Auth-Token'] = localStorage.get('token')

function beforeRequest(modal){
    if(!modal) modal = 'common'
    httpQueue.push(modal)
    loadingTimeOut = setTimeout(()=>{
        if(httpQueue.length != 0){
            Bus.$emit(`${modal}ShowLoading`)
        }
    },timeout)
    closeTimeOut = setTimeout(()=>{
        Bus.$emit(`${modal}HideLoading`)
    },30 * 60 * 1000)
}

function afterRequest(modal){
    if(!modal) modal = 'common'
    clearTimeout(loadingTimeOut)
    let index = httpQueue.indexOf(modal)
    if(index > -1){
        httpQueue.splice(index,1)
    }
    if(httpQueue.indexOf(modal) == -1){
        clearTimeout(closeTimeOut)
        setTimeout(()=>{
            Bus.$emit(`${modal}HideLoading`)
        },100)
    }
}

function clearRequest(){
    let modalArr = Array.from(new Set(httpQueue))
    for(let i = 0; i < modalArr.length; i++){
        Bus.$emit(`${modalArr[i]}HideLoading`)
    }
    httpQueue = []
}

//http 拦截器
axios.interceptors.request.use(
    config => {
        beforeRequest(config.headers._loading)
        if(localStorage.get('token')){
            config.headers.common['X-Auth-Token'] = localStorage.get('token') || ''
            config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        afterRequest(response.config.headers._loading)

        if(response.status < 200 || response.status > 300
            || response.data.code == 1 
            || response.data.code == '0001'
            || response.data.businessCode == '0001'){
                Notice.error({
                    desc: response && response.data && response.data.msg || '后端服务异常',
                })

                store.dispatch('change_spin_show',false)
            
                return Promise.reject(response && response.data)
        }

        if (response.data && ((response.data.code === '0000' && response.data.businessCode === '0000')
            || response.data.code === 0)) {
            return response.data.data || response.data
        }

        return response.data
    },
    error => {
        if(axios.isCancel(error)){
            clearRequest()
        }else{
            afterRequest(error.request.config.headers._loading)
            if(error.response){
                switch(error.response.status){
                    case 401:
                        window.location.href = opRedirectUrl
                        return
                }
            }
        }
        return Promise.reject(error)
    }
)

export default {
    get (url, options) {
        return new Promise((resolve, reject) => {
            axios.get(url, Object.assign({}, options, {
                cancelToken: new CancelToken((c)=> {
                    cancelArr.push(c)
                })
            })).then(res => {
                resolve(res)
            }).catch(e => {
                if(!axios.isCancel(e)){
                    reject(e)
                }
            })
        })
    },
    post (url, data, options) {
        return new Promise((resolve, reject) => {
            axios.put(url, data, Object.assign({}, options, {
                cancelToken: new CancelToken( (c) => {
                    cancelArr.push(c)
                })
            })).then(res => {
                resolve(res)
            }).catch( e => {
                if(!axios.isCancel(e)) {
                    reject(e)
                }
            })
        })
    },
    put (url, data, options) {
        return new Promise((resolve, reject) => {
            axios.put(url, data, Object.assign({}, options, {
                cancelToken: new CancelToken((c) => {
                    cancelArr.push(c)
                })
            })).then(res => {
                resolve(res)
            }).catch(e => {
                if (!axios.isCancel(e)) {
                    reject(e)
                }
            })
        })
    },
    delete (url, options) {
        return new Promise((resolve, reject) => {
            axios.delete(url, Object.assign({}, options, {
                cancelToken: new CancelToken((c) => {
                    cancelArr.push(c)
                })
            })).then(res => {
                resolve(res)
            }).catch(e => {
                if (!axios.isCancel(e)) {
                    reject(e)
                }
            })
        })
    },
    cancel () {
        cancelArr.map(cancel => cancel())
    }
}


