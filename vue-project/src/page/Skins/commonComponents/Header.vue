<template>
    <div class="header">
        <!-- pageOne -->
        <div v-if="$route.name == 'pageOne'">
            <h1>pageOne - Header</h1>
        </div>

        <!-- pageOne -->
        <div v-if="$route.name == 'pageTwo'">
            <h1>pageTwo - Header</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss" scoped>

</style>
