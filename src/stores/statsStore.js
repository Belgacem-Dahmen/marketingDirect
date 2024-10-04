import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useStatsStore = defineStore('stats', () => {
  const stats = ref({
    campagnes: [
      {
        nom: "Janvier 2024",
        nbRelanceSms: 100,
        nbRelanceEmail: 99,
        nbRetourAtelier: 25
      },
      {
        nom: "Février 2024",
        nbRelanceSms: 55,
        nbRelanceEmail: 105,
        nbRetourAtelier: 28
      },
      {
        nom: "Mars 2024",
        nbRelanceSms: 22,
        nbRelanceEmail: 112,
        nbRetourAtelier: 30
      },
      {
        nom: "Avril 2024",
        nbRelanceSms: 111,
        nbRelanceEmail: 112,
        nbRetourAtelier: 55
      }
    ],
    quality :{
      total : 1250,
      rgpdYes:900,
      rgpdNo:350,
      avecMobile: 500,
      sansMobile : 750,
      avecEmail:450,
      sansEmail:800,
      }
  })
const campagnesNames = computed(() => {
  return stats.value.campagnes.map((e) => e.nom)
})


const nombreDeRelance = computed(() => {
  return stats.value.campagnes.map((e) => ({'sms' :  e.nbRelanceSms,
    'email' : e.nbRelanceEmail})
  )
})
  const statsRetourAtelier = computed(()=> {
    return stats.value.campagnes.map((e) => e.nbRetourAtelier)
  })

  return {   stats ,statsRetourAtelier,campagnesNames, nombreDeRelance}
})
