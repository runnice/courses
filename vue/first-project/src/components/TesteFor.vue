<template>
  <div class="TesteFor">
      <h2>Teste2</h2>
      <ul>
        <li v-for="animal of animais" :key="animal.id">
            <img :src="animal.url" :alt="animal.name">
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"TesteFor",
    data(){
        return{
            animais: [
                {
                    id:1,
                    name:'Gatinho',
                    url: 'http://s2.glbimg.com/4Ek8CnZSuYyyvaNQEPPiX_d-faA=/e.glbimg.com/og/ed/f/original/2017/11/24/gali1.jpg'
                },
                {
                    id:2,
                    name:'Cachorro',
                    url: 'https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>