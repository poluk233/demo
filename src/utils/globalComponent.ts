import {App} from "vue";
import SvgIcon from '@/components/SvgIcon.vue'

export default {
    install(app:App){
        app.component('SvgIcon',SvgIcon)
    }
}