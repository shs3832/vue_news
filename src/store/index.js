import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: {},
        list: []
    },
    // getters: {
    //     askList(state) {
    //         return state.ask;
    //     }
    // },
    actions,

    // action은 비동기 호출시 사용
    // mutation 으로 넘길때는 vue 내장함수 context api 를 사용함

    mutations

    // this 가 아닌 state로 vuex에서는 접근 가능
    // setNews(state, response) {
    //     state.news = response;
    // },
    // setJobs(state, response) {
    //     state.jobs = response;
    // },
    // setAsk(state, response) {
    //     state.ask = response;
    // }
});
