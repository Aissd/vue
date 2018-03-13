<template>
    <!-- 
        1、router.push(location, onComplete, onAbort);
        2、onComplete，onAbort：这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 
            或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用
        3、注意：如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 /users/1 -> /users/2)，
            你需要使用 beforeRouteUpdate 来响应这个变化 (比如抓取用户信息)。
            或者使用watch监听
     -->
    <div class="router">
        <h1>命名的路由</h1>
        <a href="javascript:;" @click="routerTo('route', { address: 'A' })">地址A</a>
        <a href="javascript:;" @click="routerTo('route', { address: 'B' })">地址B</a>
        <h1>带查询参数</h1>
        <a href="javascript:;" @click="router('route', { address: 'C' })">地址C</a>
        <a href="javascript:;" @click="router('route', { address: 'D' })">地址D</a>
    </div>
</template>

<script>
    import router from '@/router';
    export default {
        name: 'Route',
        watch: {
            '$route': 'pageInitFn' // 路由地址不变，只是参数发生了变化，就会触发函数
        },
        mounted() {
            this.pageInitFn();
        },
        // beforeRouteUpdate (to, from, next) {
        //     console.log(to);
        //     console.log(from);
        //     console.log(next);
        // },
        methods: {
            pageInitFn() {
                console.log('---');
            },
            // 带查询参数 register?plan=private
            routerTo(url, query) {
                router.push({
                    path: url,
                    query: query
                });
            },
            // 命名的路由 /user/123
            router(url, params) {
                router.push({
                    name: url,
                    params: params
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
