import Vue from 'vue';
import Router from 'vue-router';

import ViewMore from '@/page/ViewMore.vue';
import Tab from '@/page/Tab.vue';
import RoutePage from '@/page/RoutePage.vue';
import VuexPage from '@/page/VuexPage.vue';
import Main from '@/page/Skins/Main.vue';
import Turnover from '@/page/Turnover.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            // path: '/pageOne',
            name: 'pageOne',
            component: Main,
            meta: { title: '多皮肤' }
        },
        {
            path: '/pageTwo',
            name: 'pageTwo',
            component: Main,
            meta: { title: '多皮肤' }
        },
        {
            path: '/turnover',
            name: 'turnover',
            component: Turnover,
            meta: { title: '翻转效果' }
        },
        {
            path: '/routePage/:address',
            name: 'routePage',
            component: RoutePage,
            meta: { title: '路由的使用' }
        },
        {
            path: '/tab',
            name: 'tab',
            component: Tab,
            meta: { title: 'tab页切换实例' }
        },
        {
            path: '/vuexPage',
            name: 'vuexPage',
            component: VuexPage,
            meta: { title: 'vuew例子' }
        },
        {
            path: '/viewMore',
            name: 'viewMore',
            component: ViewMore,
            meta: { title: '折叠效果实例' }
        }
    ]
});
