const memessy = {
    namespaced: true,
    state: () => ({
        resultMemessy : []
    }),
    mutations : {
        setResultMemessy(state,payload){
            state.resultMemessy = payload;
        }
    },
    actions : {
        async reloadMemessy({ dispatch, commit }, search) {
            const response = await dispatch(
                "universalApi",
                {
                    endpoint: "memes/",
                    method: "GET",
                    query: {
                        'q': search
                    }
                },
                {root : true}
            );
            commit("setResultMemessy", response);
            return response;
        },
    }
}
export default memessy;