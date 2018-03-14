import Vue from 'vue';
import Router from 'vue-router';
import ViewMore from '@/page/ViewMore';
import Tab from '@/page/Tab';
import RoutePage from '@/page/RoutePage';
import VuexPage from '@/page/VuexPage';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            // path: '/vuexPage',
            name: 'vuexPage',
            component: VuexPage
        },
        {
            path: '/routePage/:address',
            name: 'routePage',
            component: RoutePage
        },
        {
            path: '/tab',
            name: 'tab',
            component: Tab
        },
        {
            path: '/viewMore',
            name: 'viewMore',
            component: ViewMore
        }
    ]
});
