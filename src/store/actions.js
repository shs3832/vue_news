import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchLists } from '../api/index.js';
export default {
    // fetchNews(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             //mutation 접근법
    //             context.commit('setNews', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error));
    // },

    // fetchJobs({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => {
    //             commit('setJobs', data);
    //         })
    //         .catch(error => console.log(error));
    // },
    // fetchAsk({ commit }) {
    //     return fetchAskList()
    //         .then(({ data }) => {
    //             commit('setAsk', data);
    //         })
    //         .catch(error => console.log(error));
    // },
    // fetchUser({ commit }, name) {
    //     return fetchUserInfo(name)
    //         .then(({ data }) => commit('setUser', data))
    //         .catch(error => console.log(error));
    // },

    async fetchUser({ commit }, name) {
        try {
            const response = await fetchUserInfo(name);
            commit('setUser', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async fetchItem({ commit }, item) {
        try {
            const response = await fetchItemInfo(item);
            commit('setItem', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    // fetchItem({ commit }, item) {
    //     return fetchItemInfo(item)
    //         .then(({ data }) => commit('setItem', data))
    //         .catch(error => console.log(error));
    // },

    // fetchList({ commit }, name) {
    //     return fetchLists(name).then(({ data }) => {
    //         commit('setList', data);
    //         return data;
    //     });
    // }
    async fetchList({ commit }, name) {
        try {
            let response = await fetchLists(name);
            commit('setList', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
};
