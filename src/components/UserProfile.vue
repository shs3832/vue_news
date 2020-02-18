<template>
    <div>
        <p>
            name :
            <slot name="username"></slot>
        </p>
        <p>
            time :
            <slot name="time"></slot>
        </p>
        <!-- <p>created : {{ userInfo.created }}</p>-->
    </div>
</template>

<script>
export default {
    props: {
        userInfo: Object
    }
    // computed: {
    //     userInfo() {
    //         return this.$store.state.user;
    //     }
    // }
};
</script>

<style>
</style>