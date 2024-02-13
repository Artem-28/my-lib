import Button from './button.vue'
import Vue, { VueConstructor } from 'vue'
import { PluginObject } from 'vue'

const plugin: PluginObject<any> = {
    install(Vue: VueConstructor) {
        Vue.component(Button.name, Button)
    }
}
export default plugin;

export {
    Button as DSButton
}