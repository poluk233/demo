


<script setup lang="ts">
import { ref, watch} from 'vue'
import useCurrentInstance from '@/utils/useCurrentInstance'
import { timeFormat } from '@/utils/global'
const { proxy } = useCurrentInstance()
const props= defineProps({
    mst: String,
    mmp: String
})

const timer = ref(+(props.mst as string))
watch(() => props.mst, (cur) => {
    timer.value = Number(cur) 
    console.log('哈哈哈');
})
const time = ref("")
const setTime = () => {
    timer.value++
    time.value = timeFormat(timer.value)
}
proxy._gtime.addTimeCallBack(setTime)



</script>

<template>
    {{ time }}
</template>

<style scoped></style>