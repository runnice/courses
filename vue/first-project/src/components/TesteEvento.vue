<template>
  <div class="TesteEvento">
      <h2 @:click="deixarMaiuscula">TesteEvento</h2>
      <p>{{ mensagem }}</p>
  </div>
</template>

<script>
export default {
    name: 'TesteEvento',
    data(){
        return{
            mensagem:"O gato roeu a roupa do rei de roma!"
        }
    },
    methods: {
        deixarMaiuscula(){
            this.mensagem = this.mensagem.toUpperCase();
        }
    }

}
</script>


<style scoped>

</style>