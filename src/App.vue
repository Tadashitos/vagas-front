<template>
  <div>
    <vagas-favoritas />
    <topo-padrao @navegar="componente = $event" />
    <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>
      <p>{{ alerta.descricao }}</p>
    </alerta>
    <conteudo v-if="visibilidade" :conteudo="componente" />
  </div>
</template>

<script>
import Alerta from './components/comuns/Alerta.vue'
import VagasFavoritas from './components/comuns/VagasFavoritas.vue'
import Conteudo from './components/layouts/Conteudo.vue'
import TopoPadrao from './components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  components: {
    Conteudo: Conteudo,
    TopoPadrao: TopoPadrao,
    VagasFavoritas: VagasFavoritas,
    Alerta: Alerta
  },
  data: () => ({
    visibilidade: true,
    componente: 'Home',
    exibirAlerta: false,
    alerta: {tipo: '', titulo: '', descricao: ''}
  }),
  mounted(){
    this.emitter.on('alerta', (a) => {
      this.alerta = a
      this.exibirAlerta = true
      setTimeout(() => {
        this.exibirAlerta = false
      }, 4000)
    })
  }
}
</script>

<style scoped>

  h1{
    color: red;
  }

</style>
