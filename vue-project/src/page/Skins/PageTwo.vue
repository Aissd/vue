<template>
    <div class="pageTwo">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './commonComponents/Header.vue';
    import Body from './commonComponents/Body.vue';
    import Footer from './commonComponents/Footer.vue';
    export default {
        name: 'pageTwo',
        data() {
            return {

            };
        },
        components: { Header, Body, Footer}
    }
</script>

<style lang="scss" scoped>
    
</style>
