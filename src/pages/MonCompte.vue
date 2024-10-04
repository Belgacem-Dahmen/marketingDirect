<script setup>
import { useAccountStore } from "../stores/accountStore";

const accountStore = useAccountStore();
const account = accountStore.account;
</script>

<template>
  <h1 class="monCompte_header">Information de diffusion</h1>

  <div class="monCompte_abo">
    <p>
      Offre : ABO MMP MENSUEL PERFORMANCE AGENT 1 SITE - GNAC 12M Date de fin
      d'abonnement : 01/07/2025
    </p>
  </div>

  <div v-if="account" class="form_container">
    <h3>
      Ces informations sont utilisées dans votre communication à destination des
      automobilistes.
    </h3>
    <form>
      <div class="form-group">
        <label for="Prénom ">Prénom :</label>
        <input type="text" :value="account.prenom" />
      </div>

      <div class="form-group">
        <label for="nom ">Nom :</label>
        <input type="text" :value="account.nom" />
      </div>

      <div class="form-group">
        <label for="nomComercial ">Nom Commercial :</label>
        <input type="text" :value="account.nomCommercial" />
      </div>

      <div class="form-group">
        <label for="nomDiffusion ">Nom de diffusion SMS:</label>
        <input type="text" :value="account.nomDiffusionSms" />
      </div>

      <div class="form-group">
        <label for="adresseDiffusion ">Adresse de diffsuion:</label>
        <input type="text" :value="account.adresseDiffusion" />
      </div>

      <div class="form-group">
        <label for="villeDiffusion ">Ville de diffsuion:</label>
        <input type="text" :value="account.villeDiffusion" />
      </div>

      <div class="form-group">
        <label for="telDiffusion ">Telephone de diffusion:</label>
        <input type="text" :value="account.telephoneDiffusion" />
      </div>

      <div class="form-group">
        <label for="email "> E-mail:</label>
        <input type="email" :value="account.emailDiffusion" />
      </div>
      <div class="form-group">
        <label for="siteWeb ">Site Web:</label>
        <input type="text" :value="account.siteWeb" />
      </div>
      <div class="form-group">
        <label for="urlRdv ">URL de prise de RDV</label>
        <input type="text" :value="account.urlRdv" />
      </div>

      <div class="form-group">
        <button>Mettre a jour</button>
        <button>Annuler</button>
      </div>
    </form>
  </div>

  <div v-else="">merci de verifier les informations account</div>
</template>

<style>
.monCompte_header {
  font-weight: bold;
  background-color: white;
}

.monCompte_abo {
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.form_container {
  margin: 25px auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
}
.form_container h3 {
  margin: 20px;
  text-align: center;
}
.form_container form {
  display: flex;
  flex-direction: column;

  gap: 10px;
}
.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
}
form label {
  min-width: 20%; /* Largeur des labels */
  margin-right: 10px;

  text-align: right;
}

form input {
  min-width: 75%; /* Largeur des inputs */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
