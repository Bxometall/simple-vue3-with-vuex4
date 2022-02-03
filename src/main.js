import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import MyStore from './store'

const store = createStore({
  modules: {
    personModule: MyStore,
  }
})

const app = createApp(App)
app.use(store)
app.mount('#app')