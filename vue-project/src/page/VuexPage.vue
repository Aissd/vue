<template>
    <!-- 
        1、view 里使用辅助函数 mapGetters，将 store 中的 getters 映射到局部计算属性 （实时）
        2、view 里调用 store.dispath 函数，分发 action
        3、js 里，FETCH -> TOGGLE -> DONE 
        4、view 里的辅助函数 mapGetters 发现数据变化后，实时响应到 view 
     -->
    <div class="vuexPage">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>名称</th>
                    <th>图片</th>
                    <th>价格</th>
                    <th>类型</th>
                    <th>生产日期</th>
                    <th>存货量</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in productList" :key="index">
                    <td v-text="item.product_name"></td>
                    <td>
                        <img v-if="item.product_img" :src="item.product_img" alt="产品图片" />
                        <span v-else>无</span>
                    </td>
                    <td v-text="item.product_price"></td>
                    <td v-text="transformType(item.product_type)"></td>
                    <td v-text="item.product_createTime"></td>
                    <td v-text="item.product_storeNum"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import * as types from '@/store/types';
    import { mapGetters } from 'vuex';
    export default {
        name: 'VuexPage',
        data() {
            return {
                productList: null
            };
        },
        computed: {
            ...mapGetters([types.DONE_PRODUCT_LIST])
        },
        mounted() {
            this.pageInitFn();
        },
        methods: {
            pageInitFn() {
                this.$store.dispatch(types.FETCH_PRODUCT_LIST);
                this.productList = this.DONE_PRODUCT_LIST;
            },
            transformType(type) {
                switch(type) {
                    case '1':
                        return '饮料';
                    case '2':
                        return '饼干';
                    case '3':
                        return '其他';
                }
            }
        }
    }
</script>


<style lang="sass" scoped>

</style>

