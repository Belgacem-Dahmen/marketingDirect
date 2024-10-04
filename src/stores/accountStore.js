import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', () => {
  const account = ref({
    nom : "dahmen",
    prenom: "kacem",
    nomCommercial : "Garage Dahmen" ,
    nomDiffusionSms : "GGE DAHMEN",
    adresseDiffusion : "26 Rue Boukhari",
    villeDiffusion : "Tunis",
    telephoneDiffusion : 21344059,
    emailDiffusion : "bdahmen@garage.com",
    siteWeb : "www.dahmen-garage.com",
    urlRdv : "www.dahmen-garage.com/rdv"
     })
    
    function updateAcc ()  {
        console.log("updating account info");
    }
  return { account,updateAcc }
})

