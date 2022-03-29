<template>
  <div id="app">
    <!-- <NewComponent/>
    <TesteIf/>
    <TesteFor/>
    <TesteEvento/>
    <ConselhosApi/> -->
    <ContadorVue/>
  </div>
</template>

<script>

// import NewComponent from './components/NewComponent.vue'
// import TesteIf from './components/TesteIf.vue'
// import TesteFor from './components/TesteFor.vue'
// import TesteEvento from './components/TesteEvento.vue'
// import ConselhosApi from './components/ConselhosApi.vue'
import ContadorVue from './components/Contador.vue'

export default {
  name: 'App',
  components: {
    // NewComponent,
    // TesteIf,
    // TesteFor,
    // TesteEvento,
    // ConselhosApi
    ContadorVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
