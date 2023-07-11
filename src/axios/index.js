import axios from "axios";
import qs from "qs";
import url from "./url.js";

let instance = axios.create({
  timeout: 20000, //请求超时时间
  baseURL: url.dev,
});

instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
instance.defaults.headers.post["Accept"] = "application/json";

instance.interceptors.request.use(
  (config) => {
    let requestData = config.data;

    //post请求需要序列化
    if (config.method === "post") {
      config.data = qs.stringify({
        ...requestData,
      });
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (data) => {
    return Promise.resolve(data.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

//绑定原型
window._axios = instance;
export default instance;
