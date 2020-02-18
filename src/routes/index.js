import Vue from 'vue';
import VueRouter from 'vue-router';

import news from '../views/news.vue';
import ask from '../views/ask.vue';
import jobs from '../views/jobs.vue';
import userView from '../views/userView.vue';
import itemView from '../views/itemView.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';
// import CreateListView from '../views/CreateListView';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news', // url
            name: 'news',
            //component: CreateListView('news') // url 의 페이지 (컴포넌트)
            component: news,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store
                    .dispatch('fetchList', to.name)
                    .then(() => {
                        next();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        {
            path: '/ask',
            name: 'ask',
            //component: CreateListView('ask')
            component: ask,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store
                    .dispatch('fetchList', to.name)
                    .then(() => {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            //component: CreateListView('jobs')
            component: jobs,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store
                    .dispatch('fetchList', to.name)
                    .then(() => {
                        next();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        {
            // :param
            path: '/user/:id',
            component: userView
        },
        {
            path: '/item/:item',
            component: itemView
        }
    ]
});
