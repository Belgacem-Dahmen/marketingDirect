<template>
  <h2>Qualité des données clients</h2>
  <div class="container">
    <div>
      <Doughnut
        aria-label="Sales figures for the years 2022 to 2024. Sales in 2022: 987, Sales in 2023: 1209, Sales in 2024: 825."
        class="donut"
        :data="emailData"
        :options="options"
      />
    </div>
    <div>
      <Doughnut class="donut" :data="smsData" :options="options" />
    </div>
  </div>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const emailData = {
  labels: ["Avec Email", "Sans Email"],
  datasets: [
    {
      backgroundColor: ["#41B883", "#DD1B16"],
      data: [90, 10],
    },
  ],
};
const smsData = {
  labels: ["Avec Mobile", "Sans Mobile"],

  datasets: [
    {
      backgroundColor: ["#41B883", "#DD1B16"],
      data: [66, 34],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
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
