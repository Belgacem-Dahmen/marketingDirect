<template>
  <div class="stat_board">
    <div class="stat_board-element">
      <div>
        <h4 class="stat_board-element-title">Chiffre d'affaires</h4>
        <p>36385 €</p>
        <p>12 dernières campagnes</p>
      </div>
    </div>
    <div class="stat_board-element">
      <div>
        <h4 class="stat_board-element-title">CA moyen</h4>
        <p>3 032 €</p>
        <p>12 dernières campagnes</p>
      </div>
    </div>
    <div class="stat_board-element">
      <div>
        <h4 class="stat_board-element-title">Taux de retours moyen</h4>
        <p>9,8% (104 >retours)</p>
        <p>12 dernières campagnes</p>
      </div>
    </div>
    <div class="stat_board-elements">
      <div>
        <h4 class="stat_board-element-title">Panier Moyen</h4>
        <p>350 €</p>
        <p>12 dernières campagnes</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stat_board {
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 1px 10px gray;
  padding: 20px;
}
</style>

<script>
import statsSvg from "../../assets/icons/stat-icon.svg";
</script>
