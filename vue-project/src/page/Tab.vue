<template>
    <!-- 
        1、tab页，根据参数切换列表
        2、由于地址栏有参数，所以刷新也不会影响
     -->
    <div class="tab">
        <div class="tab-bar">
            <button type="button" class="btn btn-default" :class="{ 'btn-primary': tab_status == 1 }" @click="selectTab({ tab_status: 1 })">已上架</button>
            <button type="button" class="btn btn-default" :class="{ 'btn-primary': tab_status == 2 }" @click="selectTab({ tab_status: 2 })">待下架</button>
        </div>
        <div class="tab-container">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>产品</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableList" :key="index">
                        <td v-text="item.part_name"></td>
                        <td v-if="item.tab_status == 1">
                            <a href="javascript:;">下架</a>
                            <a href="javascript:;">详情</a>
                        </td>
                        <td v-else>
                            <a href="javascript:;">上架</a>
                            <a href="javascript:;">编辑</a>
                            <a href="javascript:;">详情</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import router from '@/router';
    import tabData from '@/datas/tab.json';
    export default {
        name: 'Tab',
        data() {
            return {
                tab_status: null, // 1已上架，2待上架
                tableList: []
            };
        },
        mounted() {
            this.pageInitFn();
        },
        methods: {
            pageInitFn() {
                this.tab_status = this.$route.query.status == undefined ? 1 : this.$route.query.status;
                this.tableList = tabData.data.filter(item => item.status == this.tab_status);
            },
            selectTab(query) {
                this.routeTo('tab', query);
                this.pageInitFn();
            },
            routeTo(url, query) {
                router.push({
                    path: url,
                    query: {
                        status: query.tab_status
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
