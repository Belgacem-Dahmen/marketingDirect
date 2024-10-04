import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useStatsStore = defineStore('stats', () => {
  const stats = ref({
    campagnes: [
      {
        nom: "Janvier 2024",
        nbRelanceSms: 120,
        nbRelanceEmail: 99,
        nbRetourAtelier: 25
      },
      {
        nom: "Février 2024",
        nbRelanceSms: 135,
        nbRelanceEmail: 105,
        nbRetourAtelier: 28
      },
      {
        nom: "Mars 2024",
        nbRelanceSms: 140,
        nbRelanceEmail: 112,
        nbRetourAtelier: 30
      },
      {
        nom: "Avril 2024",
        nbRelanceSms: 140,
        nbRelanceEmail: 112,
        nbRetourAtelier: 55
      }
    ]
  })
const campagnesNames = computed(() => {
  return stats.value.campagnes.map((e) => e.nom)
})


const nombreDeRelance = computed(() => {
  return stats.value.campagnes.map((e) => { return 
   {
    e.nbRelanceSms,
    e.nbRelanceEmail}
   }
  )
})
  const statsRetourAtelier = computed(()=> {
    return stats.value.campagnes.map((e) => e.nbRetourAtelier)
  })

  return { stats ,statsRetourAtelier,campagnesNames, nombreDeRelance}
})
