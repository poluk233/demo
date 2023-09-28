import { createApp } from "vue";
import App from "@/App.vue";
import { createPinia } from "pinia";
import { router } from "@/router";
import { gtime } from "@/utils/global";
import globalComponent from '@/utils/globalComponent'
import  directive  from "@/utils/directive";

import 'virtual:svg-icons-register';
import "@/style/global.scss";
import "@/style/tailwind.scss";
const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(globalComponent)
app.use(directive)
app.config.globalProperties._gtime = gtime;

app.mount("#app");
