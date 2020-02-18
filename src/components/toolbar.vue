<template>
    <div>
        <ul>
            <li>
                <router-link to="/news">news</router-link>
            </li>

            <li>
                <router-link to="/ask">ask</router-link>
            </li>

            <li>
                <router-link to="/jobs">jobs</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
div {
    background-color: #42b883;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    li {
        margin: 0 10px;
        padding: 10px 5px;
    }
}

a {
    color: white;
}

.router-link-exact-active {
    color: #35492e;
}
</style>
