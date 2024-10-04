<template>
  <div class="container">
    <Bar class="bar" :data="data" :options="options" />

  </div>
</template>
<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import { useStatsStore } from "../../stores/statsStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const statsStore = useStatsStore();
const statsRetourAtelier = statsStore.statsRetourAtelier;
const campagnesNames = statsStore.campagnesNames;

const data = {
  labels: campagnesNames,
  datasets: [
    {
      label: "Entrée Atelier",
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Couleur de fond
      borderColor: "rgba(75, 192, 192, 1)", // Couleur de bordure
      borderWidth: 2, // Largeur de la bordure
      pointBackgroundColor: "rgba(255, 99, 132, 1)", // Couleur des points
      pointBorderColor: "#fff", // Couleur de bordure des points
      pointBorderWidth: 2, // Largeur de la bordure des points
      pointHoverRadius: 5, // Taille des points au survol
      data: statsRetourAtelier,
    },
  ],
};
const options = {
  responsive: true,
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 1px 1px 10px gray;
  padding: 20px;
  margin-top: 150px;
}
</style>
