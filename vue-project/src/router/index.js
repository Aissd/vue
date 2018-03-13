import Vue from 'vue';
import Router from 'vue-router';
import ViewMore from '@/page/ViewMore';
import Tab from '@/page/Tab';
import Route from '@/page/Route';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/route/:address',
            name: 'route',
            component: Route
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
