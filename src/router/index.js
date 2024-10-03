import { createWebHistory, createRouter } from 'vue-router'



import MarketingDirect from '../pages/MarketingDirect.vue'
import Statistiques from '../pages/Statistiques.vue'
import MonCompte from '../pages/MonCompte.vue'
import MesClients from '../pages/MesClients.vue'
import NotFound from '../pages/NotFound.vue'
import EntrésAtelier from '../pages/EntrésAtelier.vue'

const routes = [
  { path: '/', component: Statistiques },
  { path: '/marketing-direct', component: MarketingDirect },
  { path: '/retour-atelier', component: EntrésAtelier },
  { path: '/mon-compte', component: MonCompte },
  { path: '/mes-clients', component: MesClients },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})