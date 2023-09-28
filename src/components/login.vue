<template>
    <div>
        <VanButton @click="login" v-observer>登录</VanButton>
        <Timer :mst="mst" />
        <VanButton @click="setMst">++</VanButton>
        <VanButton type="primary" @click="setCom(tab)" v-for="(_,tab) in tabs" :key="tab">切换组件</VanButton>
        <i class="icon-wrap">
            <svg-icon @click="animation" :iconClass="'ic_refresh'" :className="className" />
        </i>
        <div>
            <component :is="tabs[tabName]"></component>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed,shallowRef } from 'vue'
import { getUser } from "@/api/user"
import { useUser } from '@/store/user'
import Timer from '@/components/timer.vue'
import tab1 from '@/components/tab1.vue'
import tab2 from '@/components/tab2.vue'
const { setuser } = useUser()
const login = async () => {
    try {
        const user = await getUser(Acction.value)
        setuser(user)
    } catch (error) {

    }
}
const Acction = shallowRef({
    username: "poluk",
    password: "1234567"
})
const tabs = {
    tab1,
    tab2
}
const tabName = ref<"tab1" | "tab2">("tab1")
const setCom = (name: "tab1" | "tab2") => {
    console.log(name);
    tabName.value = name
}

const mst = ref("4800")
const run = ref(false)
const className = computed(() => run.value ? 'ic_refresh running' : 'ic_refresh')
const setMst = () => { mst.value = "100" }
const animation = () => { run.value = !run.value }
</script>

<style lang="scss" scoped>
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.icon-wrap {
    color: red;
    display: block;
    width: 10px;
    height: 10px;
}

.ic_refresh {
    width: 10px;
    height: 10px;
    animation: 1s linear infinite rotate paused;

    &.running {
        animation-play-state: running;
    }
}
</style>
