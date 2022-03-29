<template>
  <div class="ConselhosApi">
      <ul>
          <li v-for="slip of slips" :key="slip.id">
              <a>{{slip.advice}}</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'ConselhosApi',
    data(){
        return{
            slips:[]
            
        }
    },
    created(){
        fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(json => {
            this.slips=json;
        })
    }

}
</script>

<style scoped>

</style>