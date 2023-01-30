<template>
  <div>
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>

  import Home from '@/components/views/Home.vue'
  import PublicarVaga from '@/components/views/PublicarVaga.vue'

  export default {
      name: 'Conteudo',
      components: {
        Home,
        PublicarVaga
      },
      props: {
        conteudo: {
          type: String,
          required: true
        }
      }
      /*,
      beforeCreate(){
        console.log('Antes de criar', this.teste)
      },
      created(){
        console.log('Criado', this.teste)
      },
      beforeMount(){
        console.log('Antes de montar', this.teste)
      },
      mounted(){
        console.log('Montado', this.teste)
      },
      beforeUpdate(){
        console.log('Antes de atualizar')
      },
      updated(){
        console.log('Atualizado')
      },
      beforeUnmount(){
        console.log('Antes de desmontar/destruir')
      },
      unmounted(){
        console.log('Desmontado/destruído')
      },
      errorCaptured(){
        console.log('Erro capturado')
      },
      renderTracked(){
        console.log('Re-renderização rastreada')
      },
      renderTriggered(){
        console.log('Re-renderização acionada')
      },
      activated(){
        console.log('Componente é ativado')
      },
      deactivated(){
        console.log('Componente é desativado')
      }
      */
  }
</script>

<style module>

  h1{
    color: green;
  }

  .teste-1{
    background-color: red;
  }

  #teste-2{
    background-color: yellow;
  }

</style>

