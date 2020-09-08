<template>
    <div id="app">

<!--        <first></first>-->
<!--        <hr>-->
<!--        <second></second>-->
        <h3>欢迎访问百知教育</h3>
        <router-link to="/index">首页</router-link>
        <router-link to="/user">用户列表页</router-link>
        <router-link to="/three">第三页</router-link>
        <hr>

        <router-view></router-view>

    </div>
</template>

<script>
    import First from "./components/First";
    import Second from "./components/Second";

    export default {
        name: 'App',
        components:{
            first:First,
            second:Second,
        }
    }
</script>

<style>

</style>
