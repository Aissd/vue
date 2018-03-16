<template>
    <div class="footer">
        <!-- pageOne -->
        <div v-if="$route.name == 'pageOne'">
            <h1>pageOne - Footer</h1>
        </div>

        <!-- pageOne -->
        <div v-if="$route.name == 'pageTwo'">
            <h1>pageTwo - Footer</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="scss" scoped>

</style>
