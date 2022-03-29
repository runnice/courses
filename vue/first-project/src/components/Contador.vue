<template>
    <div class="contador-vue">
        <h1>Meu Contador</h1>
        <p>Contador: {{ contador }}</p>
        <button @click="removerUm">-</button>
        <button @click="somarUm">+</button>
    </div>
</template>

<script>
export default {
    name: "ContadorVue",
    data() {
        return {
            contador: 0
        };
    },
    methods: {
        somarUm() {
            this.contador++;
        },
        removerUm() {
            this.contador--;
        }
  }
};
</script>

<style scoped></style>
