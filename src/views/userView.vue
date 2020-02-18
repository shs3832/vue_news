<template>
    <div>
        <!-- <p>name : {{ userInfo.id }}</p>
        <p>karma : {{ userInfo.karma }}</p>
        <p>created : {{ userInfo.created }}</p>-->
        <user-profile :userInfo="userInfo">
            <span slot="username">{{ userInfo.id }}</span>
            <span slot="time">{{ userInfo.created }}</span>
        </user-profile>
    </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
    components: {
        UserProfile
    },
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        const userID = this.$route.params.id;
        this.$store.dispatch("fetchUser", userID);
    }
};
</script>

<style></style>
