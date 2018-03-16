<template>
    <!-- 
        1、
        2、
        3、
     -->
    <!-- 切换皮肤组件 -->
    <component v-bind:is="DONE_PAGE_SKIN"></component>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '@/store/types';
    import skinConfig from '@/page/Skins/skinConfig';
    export default {
        name: 'Main',
        data() {
            return {

            };
        },
        components: skinConfig,
        computed: {
            ...mapGetters([types.DONE_PAGE_SKIN])
        },
        mounted() {
            this.pageInitFn();
        },
        methods: {
            pageInitFn() {
                this.$store.dispatch(types.FETCH_PAGE_SKIN, this.$route.name);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
