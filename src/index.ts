import * as components from './components'
import Vue, { VueConstructor } from 'vue'

const DSLibrary = {
    install(app: VueConstructor) {
        // Auto import all components
        for (const componentKey in components) {
            app.use((components as any)[componentKey])
        }
    }
}

export default DSLibrary

// export all components as vue plugin
export * from './components'