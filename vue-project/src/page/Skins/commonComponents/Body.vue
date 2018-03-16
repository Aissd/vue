<template>
    <div class="body">
        <!-- pageOne -->
        <div v-if="$route.name == 'pageOne'">
            <h1>pageOne - Body</h1>
        </div>

        <!-- pageOne -->
        <div v-if="$route.name == 'pageTwo'">
            <h1>pageTwo - Body</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Body'
    }
</script>

<style lang="scss" scoped>

</style>
