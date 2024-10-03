<script setup>
import { computed, ref } from "vue";
import Modal from "../components/Modal.vue";
import { useDirectCampagne } from "../stores/directCampagne";
import FadeSlideTransition from "../transitions/FadeSlideTransition.vue";
const mdStore = useDirectCampagne();
const campagnes = mdStore.campagnes;
const showModal = ref(false);
const searchTerm = ref("");
const formData = ref({
  name: "",
  email: "",
});
console.log(campagnes);

const filteredCmapagnes = computed(() => {
  return campagnes.filter((e) =>
    e.nomCampagne.toLowerCase().includes(searchTerm.value)
  );
});

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const handleSubmit = () => {
  console.log("Données du formulaire:", formData.value);
  toggleModal(); // Ferme le modal après la soumission
};
const toogleAdd = () => {
  mdStore.addCampagne({
    id: Math.random(10) * 10,
    nomCampagne: "Campagne pneus",
    contacts: 1200,
    sms: 500,
    email: 700,
    date: "2024-09-01",
    montant: "1500€",
    statut: "En cours",
    actions: "Modifier | Supprimer",
  });
};
</script>

<template>
  <FadeSlideTransition>
    <Modal
      :modalName="'Nouvelle Campagne '"
      :isOpen="showModal"
      @closeModal="toggleModal"
    >
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="nomCampagne">Nom de la campagne:</label>
          <input type="text" v-model="formData.name" id="name" />
        </div>

        <div>
          <label for="contacts">Nombre de contacts:</label>
          <input type="number" id="contacts" name="contacts" required />
        </div>

        <div>
          <label for="sms">Nombre de SMS envoyés:</label>
          <input type="number" id="sms" name="sms" required />
        </div>

        <div>
          <label for="email">Nombre d'e-mails envoyés:</label>
          <input type="number" id="email" name="email" required />
        </div>

        <div>
          <label for="date">Date de début:</label>
          <input type="date" id="date" name="date" required />
        </div>

        <div>
          <label for="montant">Montant:</label>
          <input type="text" id="montant" name="montant" required />
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </Modal>
  </FadeSlideTransition>
  <div class="md_header">
    <h1>Liste des campagnes</h1>
    <div class="md_header-actions">
      <button
        class="add_campagne"
        @click.prevent="toogleAdd()"
        @click="toggleModal"
      >
        <img class="icon" src="/src/assets/icons/add.png" alt="" />
        <p>Créer une campagne</p>
      </button>
      <button class="reload_campagne">
        <img class="icon" src="/src/assets/icons/reload.png" alt="" />
      </button>
    </div>
    <div>
      <input type="text" placeholder="Nom campagne " v-model="searchTerm" />
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

      <FadeSlideTransition>
        <tbody>
          <tr
            v-for="campagne in filteredCmapagnes"
            :key="campagne.id"
            class="rowCampagne"
          >
            <td>{{ campagne.nomCampagne }}</td>
            <td>{{ campagne.contacts }}</td>
            <td>{{ campagne.sms }}</td>
            <td>{{ campagne.email }}</td>
            <td>{{ campagne.date }}</td>
            <td>{{ campagne.montant }}</td>
            <td>{{ campagne.statut }}</td>

            <td v-if="campagne.statut == 'En cours'">
              <button>Editer</button>
              <button>Annuler</button>
            </td>
            <td v-else="campagne.statut == 'Terminé'">
              <button>Consulter</button>
            </td>
          </tr>
        </tbody>
      </FadeSlideTransition>
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
  box-shadow: 1px 1px 5px gray;
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
  font-weight: bold;
}
</style>
