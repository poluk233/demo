<template>
    <div>
        <RouterView v-slot="{ Component, route }">
            <Component :is="Component" :key="route.fullPath"></Component>
        </RouterView>
        <div class="fixed bottom-0 flex justify-between items-center h-10 w-[100%] pl-1 pr-1">
            <div @click="router.push('/hello')">hello</div>
            <div>哈哈</div>
            <div @click="router.push('/login')">login</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
