<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" colspan="3">Clube</th>
            <th class="text-right">Pontos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in clubeListaOrdenada" :key="item.id">
            <td>{{index+1}}</td>
            <td>
                <v-avatar size="36" >
                    <img :src="item.escudo" :alt="item.nome">
                </v-avatar>
            </td>
            <td>{{ item.nome }}</td>
            <td class="text-center">{{ item.pontos }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "ClubeListas",
  data() {
    return {
      clubeListas: [],
    };
  },
  computed: {
      clubeListaOrdenada(){
          const listOrdenada = this.clubeListas.slice(0).sort((a,b) => a.pontos > b.pontos ? -1 : 1);
          return listOrdenada;
      }

  }
  ,
  created() {
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then((res) => res.json())
      .then((json) => {
        this.clubeListas = json;
        console.log(this.clubeListas);
      });
  },
};
</script>

<style scoped></style>
