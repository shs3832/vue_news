<template>
    <div>
        <section>
            <user-profile :userInfo="fetchItem">
                <span slot="username">
                    <router-link :to="`/user/${fetchItem.user}`">{{fetchItem.user}}</router-link>
                </span>
                <span slot="time">
                    <slot name="time">{{fetchItem.time_ago}}</slot>
                </span>
            </user-profile>
        </section>
        <section>
            <!-- <p>
                user :
                <router-link :to="`/user/${fetchItem.user}`">{{ fetchItem.user }}</router-link>
            </p>-->
            <p>points : {{ fetchItem.points }}</p>
            <h4 v-html="fetchItem.content"></h4>
        </section>
        <section>
            <ul>
                <li v-for="(fetchItem, index) in fetchItem.comments" :key="index">
                    <div v-html="fetchItem.content"></div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapState } from "vuex";

export default {
    components: {
        UserProfile
    },
    computed: {
        // ...mapState(["item"])
        fetchItem() {
            return this.$store.state.item;
        }
    },
    created() {
        const id = this.$route.params.item;
        this.$store.dispatch("fetchItem", id);
    }
};
</script>

<style scoped>
li {
    margin-bottom: 10px;
}
</style>
