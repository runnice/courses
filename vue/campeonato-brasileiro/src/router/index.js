import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import ClubeListas from '../views/ClubeListas.vue'
import CadastroUsuario from '../views/CadastroUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/classificacao',
    name: 'ClubeListas',
    component: ClubeListas
  },
  {
    path: '/cadastro',
    name: 'CadastroUsuario',
    component: CadastroUsuario
  }
]

const router = new VueRouter({
  routes
})

export default router
