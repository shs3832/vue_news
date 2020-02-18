<template>
    <div>
        <ul class="news-list">
            <li v-for="(user, index) in ListItems" :key="index" class="post">
                <div class="points">{{ user.points || 0 }}</div>
                <p>
                    <template v-if="user.domain">
                        <a :href="user.url">{{ user.title }}</a>
                    </template>
                    <template v-else>
                        <router-link :to="`/item/${user.id}`">{{ user.title }}</router-link>
                    </template>
                </p>
                <div class="util">
                    <small>
                        by :
                        <template v-if="user.user">
                            <router-link :to="`/user/${user.user}`">{{ user.user }}</router-link>
                        </template>
                        <template v-else>
                            <a :href="user.url">{{ user.domain }}</a>
                        </template>
                        ,
                        {{ user.time_ago }}
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        // created() {
        //     const name = this.$route.name;
        //     if (name === "news") {
        //         this.$store.dispatch("fetchNews");
        //     } else if (name === "ask") {
        //         this.$store.dispatch("fetchAsk");
        //     } else if (name === "jobs") {
        //         this.$store.dispatch("fetchJobs");
        //     }
        // },
        computed: {
            ListItems() {
                return this.$store.state.list;
                // const name = this.$route.name;
                // if (name === "news") {
                //     return this.$store.state.news;
                // } else if (name === "ask") {
                //     return this.$store.state.ask;
                // } else if (name === "jobs") {
                //     return this.$store.state.jobs;
                // }
            }
        }
    };
</script>

<style scoped lang="scss">
    .news-list {
        margin: 0;
        padding: 0;
        .post {
            list-style: none;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eee;
        }
        .points {
            width: 100px;
            text-align: center;
            color: #42b883;
            // &:empty {
            //     display: none;
            // }
        }
        .util {
            display: block;
            margin-left: 20px;
        }
    }
</style>
