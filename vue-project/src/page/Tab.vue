<template>
    <div class="tab">
        <div class="tab-bar">
            <button type="button" class="btn">已上架</button>
            <button type="button" class="btn">待下架</button>
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
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <a href="javascript:;">上架</a>
                            <a href="javascript:;">详情</a>
                        </td>
                        <td>
                            <a href="javascript:;">下架</a>
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
    import tabData from '@/datas/tab.json';
    export default {
        name: 'Tab',
        data() {
            return {
                status: 1, // 1已上架，2待上架
                tableList: []
            };
        },
        mounted() {
            this.pageInitFn();
        },
        methods: {
            pageInitFn() {
                let data = tabData.data;
                this.tableList = data.map(item => item.part_name).filter(itm => {
                    console.log(itm);
                });
                console.log(this.tableList);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
