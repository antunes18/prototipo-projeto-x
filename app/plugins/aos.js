// plugins/aos.js
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    nuxtApp.AOS = AOS
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    })
  }
})