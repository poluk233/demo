<script setup lang="ts">

</script>

<template>
    <div class="tab-wrap">
        <div class="tab-item" v-for="i in 100" :key="i">{{ i }}</div>
    </div>
</template>

<style lang="scss" scoped>
.tab-item {
    width: 100px;
    height: 100px;
    margin-bottom: 2px;
    background-color: skyblue;
}
</style>