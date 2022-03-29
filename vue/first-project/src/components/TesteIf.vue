<template>
    <div class="teste-if">
        <h1 v-if="podeVer">Teste IF</h1>
    </div>
  
</template>

<script>
export default {
    name:"TesteIf",
    data(){
        return{
         podeVer: true
        }
    }

}
</script>

<style scoped>

</style>