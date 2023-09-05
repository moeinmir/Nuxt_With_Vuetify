
import { updateAppConfig } from '#app'
import { defuFn } from '/home/mirani/Reference_Projects/N_V/Nuxt_With_Vuetify/nuxt_with_vuetify/node_modules/defu/dist/defu.mjs'

const inlineConfig = {}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
