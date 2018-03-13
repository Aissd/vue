<template>
    <!-- toggle 折叠列表 
        1、给列表的每个item值添加一个len属性（item是一个对象）
        2、隐藏的原理是比对index值，index小于len属性，则隐藏
        3、
    -->
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>产品</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tr, tr_index) in tableList" :key="tr_index">
                <td @click="viewMore(tr)">
                    <ul>
                        <li v-if="td_index < tr.len" v-for="(td, td_index) in tr.part_name" :key="td_index" v-text="td.part_name"></li>
                        <li v-if="tr.part_name.length > 3 && tr.len == 3">...</li>
                        <li v-if="tr.part_name.length === 0">空</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import viewMoreData from '@/datas/viewmore.json';
    export default {
        name: 'ViewMore',
        data() {
            return {
                tableList: []
            };
        },
        mounted() {
            this.pageInitFn();
        },
        methods: {
            pageInitFn() {
                let data = viewMoreData.data;
                this.tableList = data.map(item => {
                    item.len = 3;
                    return item;
                });
            },
            viewMore(target) {
                target.len = target.len == 3 ? target.part_name.length : 3;
            }
        }
    }
</script>

<style scoped>
    .table td {
        cursor: pointer;
    }
</style>
