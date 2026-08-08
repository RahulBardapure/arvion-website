import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { vRevealGroup } from './directives/reveal'
import './style.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.directive('reveal-group', vRevealGroup)
app.mount('#app')

function dismissSplash() {
  const el = document.getElementById('arvion-splash')
  if (!el) return
  el.classList.add('is-done')
  window.setTimeout(() => el.remove(), 400)
}

router.isReady().then(() => {
  // Brief beat so the mark is visible even on fast loads
  window.setTimeout(dismissSplash, 280)
})
