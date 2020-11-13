import Vue from "vue";
// base url for REST api

const baseUrl = process.env.VUE_APP_API_URL;

Vue.prototype.$baseURL = (
    baseUrl
    + (baseUrl[baseUrl.length - 1] == '/' ? '' : '/')
    + 'memes/'
);