import Vue from "vue";
// base url for REST api

Vue.prototype.$baseURL = process.env.VUE_APP_API_URL == undefined ?
                                                            "http://167.99.252.163/api/memes/"
                                                            : process.env.VUE_APP_API_URL;
