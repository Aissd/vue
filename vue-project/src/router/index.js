import Vue from 'vue';
import Router from 'vue-router';
import ViewMore from '@/page/ViewMore';
import Tab from '@/page/Tab';
import RoutePage from '@/page/RoutePage';
import VuexPage from '@/page/VuexPage';
import Main from '@/page/Skins/Main';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            // path: '/pageOne',
            name: 'pageOne',
            component: Main,
            meta: { title: 'pageOne' }
        },
        {
            path: '/pageTwo',
            name: 'pageTwo',
            component: Main,
            meta: { title: 'pageTwo' }
        },
        {
            path: '/vuexPage',
            name: 'vuexPage',
            component: VuexPage,
            meta: { title: 'vuew例子' }
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
            path: '/viewMore',
            name: 'viewMore',
            component: ViewMore,
            meta: { title: '折叠效果实例' }
        }
    ]
});
