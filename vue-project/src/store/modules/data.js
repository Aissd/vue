import * as types from '@/store/types';
console.log(types);
// 驱动应用的数据源
const state = {
    productList: []
};

// 渲染数据
const getters = {
    [types.DONE_PRODUCT_LIST]: state => {
        return state.productList;
    }
};

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const mutations = {
    [types.TOGGLE_PRODUCT_LIST](state, data) {
        state.productList = data;
    }
};

// 响应在 view 上的用户输入导致的状态变化
const actions = {
    [types.FETCH_PRODUCT_LIST]({commit}) {
        let data = require('../../datas/VuexPage.json');
        commit(types.TOGGLE_PRODUCT_LIST, data.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};