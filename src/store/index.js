import Vue from "vue";
import Vuex from "vuex";
// import module from "./module";
Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    // modules: {
    //     Module: module,
    // },
    state: {
        // gloabal vars
        resultMemessy : []
    },
    mutations: {
        setResultMemessy(state,payload){
            payload.map(item =>{
                state.resultMemessy.push(item)
            })
            // state.resultMemessy = payload;
        }
    },
    getters: {

    },
    actions: {
        async universalApi(_, req) {
            // return promise with server respsonse
            let Url = new URL(Vue.prototype.$baseURL);
            if (req.query) {
                Object.keys(req.query).forEach(key =>
                    Url.searchParams.append(key, req.query[key])
                );
            }
            const response = await window.fetch(Url, {
                // base url setted in plugin
                method: req.method,
                body: req.data ? JSON.stringify(req.data) : void 0
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
