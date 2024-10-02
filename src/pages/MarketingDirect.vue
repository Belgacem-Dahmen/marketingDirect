<script setup>
import { ref } from "vue";

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
]);
</script>

<template>
  <div class="md_header">
    <h1>Liste des campagnes</h1>
    <div class="md_header-actions">
      <button class="add_campagne">
        <img class="icon" src="/src/assets/icons/add.png" alt="" />
        <p>Créer une campagne</p>
      </button>
      <button class="reload_campagne">
        <img class="icon" src="/src/assets/icons/reload.png" alt="" />
      </button>
    </div>
    <div>
      <input type="text" placeholder="Nom campagne "/>
    </div>
  </div>
  <div class="md_main">
    <table>
      <thead>
        <tr>
          <th>Nom Campagne</th>
          <th>Contacts</th>
          <th>SMS</th>
          <th>Email</th>
          <th>Date</th>
          <th>Montant</th>
          <th>Statut</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="campagne in campagnes" :key="campagne.id">
          <td>{{ campagne.nomCampagne }}</td>
          <td>{{ campagne.contacts }}</td>
          <td>{{ campagne.sms }}</td>
          <td>{{ campagne.email }}</td>
          <td>{{ campagne.date }}</td>
          <td>{{ campagne.montant }}</td>
          <td>{{ campagne.statut }}</td>

          <td v-if="campagne.statut == 'En cours'" >
            <button>Editer</button>
            <button>Annuler</button>
          </td>
          <td v-else="campagne.statut == 'Terminé'" >
            <button>Consulter</button>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.md_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.md_header h1 {
  font-weight: bold;
}
.md_header-actions {
  display: flex;
  align-items: center;
  gap: 5px;
}
.add_campagne,
.reload_campagne {
  min-height: 40px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 5px;
}

/* style du tablea */

table {
  margin-top: 75px;
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}
table,
th,
td {
  /* border: 1px solid black; */
  background-color: white;
  border-bottom: 1px solid gray;
}
th,
td {
  padding: 18px;
  text-align: left;
  background-color: white;
}
th {
  background-color: white;
  border-bottom: 1px solid gray;
}
</style>
