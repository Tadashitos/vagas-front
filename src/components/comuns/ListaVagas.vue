<template>
    <!--
    <slot name="titulo" :dadosTitulo="{ titulo: 'Título Lista', numeroVagas: 15 }">
        <p>Título da lista de vagas</p>
    </slot>
    -->

    <slot :vagas="vagas">
        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
                <Vaga v-bind="vaga" />
            </div>
        </div>
    </slot>

    <!--
    <slot name="rodape" :dadosRodape="{ titulo: 'Rodapé Lista', paginacao: {numeroPaginas: 10, paginaAtual: 5} }">
        <p>Rodapé da lista de vagas</p>
    </slot>
    -->
</template>

<script>
    import Vaga from '@/components/comuns/Vaga.vue'

    export default {
        name: 'ListaVagas',
        components: {
            Vaga
        },
       data: () => ({
        vagas: []
       }),
       activated(){
        this.vagas = JSON.parse(localStorage.getItem('vagas'))
       },
       mounted(){
        this.emitter.on('filtrarVagas', vaga => {
            const VAGAS = JSON.parse(localStorage.getItem('vagas'))
            this.vagas = VAGAS.filter(registro => registro.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
        })
       }
    }
</script>
