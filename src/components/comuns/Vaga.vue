<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>
                        {{ titulo }}
                    </div>
                    <div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" v-model="favoritada" />
                            <label class="form-check-label">Favoritar</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
        <p>{{ descricao }}</p>
        </div>
        <div class="card-footer">
        <small class="text-muted">Salário: {{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo }} | Publicação: {{ getPublicacao }}</small>
        </div>
    </div> 
</template>

<script>
    export default {
        data: () => ({
            favoritada: false
        }),
        watch: {
            favoritada(valorNovo){
                if(valorNovo){
                    this.emitter.emit('favoritarVaga', this.titulo)
                } else{
                    this.emitter.emit('desfavoritarVaga', this.titulo)
                }
            }
        },
        name: 'Vaga',
        //props: ['titulo', 'descricaoVaga', 'salario', 'modalidade', 'tipo', 'publicacao'],
        props: {
            titulo: {
                type: String,
                required: true,
                validator(p){
                    console.log('Prop: ', p, p.length)
                    if(p.length < 6){
                        return false
                    } else{
                        return true
                    }
                    //return true //Se estiver válido
                    //return false //Se estiver inválido
                }
            },
            descricao: {
                type: String,
                required: true
                //default: 'O contratante não adicionou nenhuma descrição para esta vaga'
                /*
                default(){
                    return '*'.repeat(20)
                }
                */
            },
            salario: {
                type: [Number, String],
                required: true 
            },
            modalidade: {
                type: String,
                required: true
            },
            tipo: {
                type: String,
                required: true
            },
            publicacao: {
                type: String,
                required: true
            }
        },
        computed:{
            getModalidade(){
                switch(this.modalidade){
                    case '1': return 'Home Office'
                    case '2': return 'Presencial'
                }
                return ''
            },
            getTipo(){
                switch(this.tipo){
                    case '1': return 'CLT'
                    case '2': return 'PJ'
                }
                return ''
            },
            getPublicacao(){
                let dataPublicacao = new Date(this.publicacao)
                return dataPublicacao.toLocaleDateString('pt-BR')
            }
        }
    }
</script>
