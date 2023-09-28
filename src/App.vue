<script setup lang="ts">
import ic_success from '@/assets/png/ic_success.png'
</script>

<template>
  <img :src="ic_success" alt="" srcset="">
    <router-view v-slot="{ Component, route }">
      <Component :is="Component" :key="route.fullPath"></component>
    </router-view>
</template>

<style scoped></style>
