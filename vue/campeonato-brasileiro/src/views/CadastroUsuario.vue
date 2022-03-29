<template>
  <form>
      <div class="login">
        <h2>Login</h2>
      </div>
    
    <v-text-field class="mr-4 ml-4"
      v-model="name"
      :error-messages="nameErrors"
      label="Nome"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field class="mr-4 ml-4"
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-select class="mr-4 ml-4"
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Selecione um pacote"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-checkbox class="mr-4 ml-4"
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Você aceita receber novidades sobre o Brasileirão?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>
    <v-container>
    <v-btn  @click="submit"> submit </v-btn>
    <v-btn class="mr-4 ml-4" @click="clear"> clear </v-btn>
    </v-container>
  </form>
</template>

<script>

export default {
  
  name: "CadastroUsuario",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Nome é obrigatório",
      
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",
    ],
    select: null,
    items: ["Pacote Básico", "Pacote Torcedor", "Pacote Jammer", "Airdrop"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
.login {
  text-align: center;
  margin-top: 30px;
}

</style>
