import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDirectCampagne = defineStore('directCampagne', () => {
  const campagnes = ref([
    {
      id: 1,
      nomCampagne: "Campagne Printemps",
      contacts: 1200,
      sms: 500,
      email: 700,
      date: "2024-09-01",
      montant: "1500€",
      statut: "En cours",
      actions: "Modifier | Supprimer",
    },
    {
      id: 2,
      nomCampagne: "Campagne Été",
      contacts: 800,
      sms: 300,
      email: 500,
      date: "2024-06-15",
      montant: "1200€",
      statut: "Terminé",
      actions: "Voir",
    },
    {
      id: 3,
      nomCampagne: "Campagne Hiver",
      contacts: 2000,
      sms: 1000,
      email: 1000,
      date: "2024-12-01",
      montant: "2500€",
      statut: "Planifié",
      actions: "Voir",
    },
  ])
  function addCampagne(campagne) {
    campagnes.value.push(campagne)
  }

  return { campagnes, addCampagne }
})
