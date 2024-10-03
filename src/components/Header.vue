<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="header">
    <img
      class="logo"
      src="https://adherent.performance-agent.com/img/performance-agent.47bca811.png"
      alt=""
    />
    <div class="header_links">
      <div class="link">
        <img class="icon" src="/src/assets/icons/stats.png" alt="" />
        <RouterLink to="/">
          <p>Statistiques</p>
        </RouterLink>
      </div>
      <div class="link">
        <img class="icon" src="/src/assets/icons/enter.png" alt="" />
        <RouterLink to="retour-atelier">
          <p>Entrés Atelier</p>
        </RouterLink>
      </div>

      <div class="link">
        <img
          class="icon"
          src="/src/assets/icons/data-manipulation.png"
          alt=""
        />
        <RouterLink to="marketing-direct">
          <p>Marketing Direct</p>
        </RouterLink>
      </div>
      <div class="link">
        <img class="icon" src="/src/assets/icons/stats.png" alt="" />
        <RouterLink to="mes-clients"><p>Mes clients</p></RouterLink>
      </div>
      <div class="link">
        <img class="icon" src="/src/assets/icons/stats.png" alt="" />
        <RouterLink to="mon-compte"><p>Mon compte</p></RouterLink>
      </div>
    </div>
    <div class="header_actions">
      <select class="languages_select" name="language" id="language">
        <option class="languages_select-option">Changer la langue</option>
        <option class="languages_select-option" value="francais">
          Francais
        </option>
        <option class="languages_select-option" value="anglais">Anglais</option>
      </select>
      <button class="header_actions-btn">Déconnexion</button>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 2rem 20px;
  box-shadow: 1px 1px 5px gray;
}

.logo {
  max-width: 150px;
}

.header_links {
  display: flex;
  gap: 25px;
}
.link {
  display: flex;
  gap: 10px;
  align-items: center;
}
.header_actions {
  display: flex;
  gap: 20px;
}

.languages_select {
  display: flex;
  padding: 5px 10px;
  border-radius: 10px;
}

.header_actions-btn {
  border-radius: 15px;
  background-color: black;
  color: white;
  padding: 5px 10px;
}
@media screen and (max-width: 875px) {
  .header {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  .header_links {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
