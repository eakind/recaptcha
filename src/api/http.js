import Vue from 'vue/dist/vue';
import axios from 'axios';
import { apiAddr } from './config';

axios.defaults.baseURL = apiAddr;
axios.defaults.headers = {
  'Content-Type': 'application/json;'
};

axios.interceptors.request.use(
  config => {
    for (let key in config.params) {
      if (config.params[key] === null || config.params[key] === undefined || config.params[key] === '') {
        delete config.params[key];
      }
    }
    if (config.method === 'get') {
      config.params.dc_current_time = Date.now();
    }
    let cookieArr = document.cookie.match(new RegExp('(^| )' + '_xsrf' + '=([^;]*)(;|$)'));
    if (cookieArr) {
      config.headers['X-csrftoken'] = decodeURI(cookieArr[2]);
    }
    if (config.method === 'post') {
      if (config.url.includes('upload-data')) {
        config.headers['Content-Type'] = 'multipart/form-data';
      }
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (typeof (response.data) === 'object') {
        if (response.data.code === 0) {
          return response.data;
        } else {
          return response.data;
        }
      } else {
        // eslint-disable-next-line no-eval
        // return eval('(' + response.data + ')');
        return response.data;
      }
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
        case 403:
          sessionStorage.clear();
          window.location.href = '/dccp/auth/login/';
          break;
      }
    } else {
    }
    return Promise.reject(error);
  });
Vue.prototype.$axios = axios;
