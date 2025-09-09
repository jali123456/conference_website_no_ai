/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

// Styles
import 'unfonts.css'
import '@/styles/global.css'

const app = createApp(App)

const head = createHead()

const pinia = createPinia()
app.use(head)
app.use(pinia)

registerPlugins(app)

app.mount('#app')
