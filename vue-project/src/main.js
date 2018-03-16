// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store';
import '@/assets/css/main.scss';

Vue.config.productionTip = false;

// // 根据路由地址切换title
// router.beforeEach((to) => {
//     // to 和 from 都是 路由信息对象
//     if(to.meta.title) {
//         document.title = to.meta.title;
//     }
// });

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store
});
