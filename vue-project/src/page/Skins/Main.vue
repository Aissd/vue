<template>
    <!-- 切换皮肤组件 -->
    <component v-bind:is="DONE_PAGE_SKIN"></component>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '@/store/modules/data';
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
        }
    }
</script>

<style lang="scss" scoped>

</style>
