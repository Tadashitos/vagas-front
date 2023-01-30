import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

//createApp(App).mount('#app')

//Criando a instância do mitt
const EMITTER = mitt()

//Iniciar a instância do Vue com base no componente App
const APP = createApp(App)

//Configurar a instância do pacote mitt como sendo uma propriedade global
APP.config.globalProperties.emitter = EMITTER

//Associar a instância do Vue com o elemento html de id app
APP.mount('#app')