import Vue from "vue";
import Vuex from "vuex";
import memessy from "./memessy";
Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        Memessy: memessy,
    },
    state: {
        // gloabal vars

    },
    mutations: {

    },
    getters: {

    },
    actions: {
        async universalApi(_, req) {
            // return promise with server respsonse
            let Url = new URL(Vue.prototype.$baseURL + req.endpoint);
            if (req.query) {
                Object.keys(req.query).forEach(key =>
                    Url.searchParams.append(key, req.query[key])
                );
            }
            const response = await window.fetch(Url, {
                // base url setted in plugin
                method: req.method,
                body: req.data ? req.data : void 0
            });
            if (!response.ok) {
                const json = await response.json();
                console.group("%c Error in request: ", " color: #939");
                console.log("Full response: ", response);
                console.groupEnd(")");
                throw json;
            } else {
                return await response.json();
            }
        },
    }
});
