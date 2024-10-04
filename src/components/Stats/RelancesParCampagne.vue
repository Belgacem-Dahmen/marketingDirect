<template>
  <h1>relances</h1>
  <div class="container">
    <Line :data="Relancedata" :options="options" />
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { useStatsStore } from "../../stores/statsStore";

const statsStore = useStatsStore();
const nombreDeRelance = statsStore.nombreDeRelance;
const campagnesNames = statsStore.campagnesNames;

console.log(nombreDeRelance);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Relancedata = {
  labels: campagnesNames,
  datasets: [
    {
      label: "Relances par Sms",
      backgroundColor: "rgba(75, 192, 166, 0.2)", // Couleur de fond
      borderColor: "rgba(75, 192, 192, 1)", // Couleur de bordure
      borderWidth: 2, // Largeur de la bordure
      pointBackgroundColor: "rgba(255, 99, 132, 1)", // Couleur des points
      pointBorderColor: "#fff", // Couleur de bordure des points
      pointBorderWidth: 2, // Largeur de la bordure des points
      pointHoverRadius: 5, // Taille des points au survol
      data: nombreDeRelance.map((nb) => nb.sms),
    },
    {
      label: "Relances par Email",
      backgroundColor: "rgba(75, 192, 166, 0.2)", // Couleur de fond
      borderColor: "rgba(75, 192, 192, 1)", // Couleur de bordure
      borderWidth: 2, // Largeur de la bordure
      pointBackgroundColor: "rgba(255, 99, 132, 1)", // Couleur des points
      pointBorderColor: "#fff", // Couleur de bordure des points
      pointBorderWidth: 2, // Largeur de la bordure des points
      pointHoverRadius: 5, // Taille des points au survol
      data: nombreDeRelance.map((nb) => nb.email),
    },
  ],
  plugins: {
    legend: {
      display: true, // Affiche ou non la légende
      position: "bottom", // Position : 'top', 'bottom', 'left', 'right'
      labels: {
        color: "#000", // Couleur du texte de la légende
        font: {
          size: 16, // Taille de la police
        },
      },
    },
  },
};

const options = {
  responsive: true,
};
</script>

<style scoped>
.container {
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 1px 1px 10px gray;
  padding: 20px;
}
</style>
