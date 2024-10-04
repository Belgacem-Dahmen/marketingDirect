<template>
  <h2>Qualité des données clients</h2>
  <div c></div>
  <div class="">
    <div>
      <h3>Analyse de la base client :</h3>
      <div class="container">
        <div>
          <Pie class="donut" :data="emailData" :options="options" />
        </div>
        <div>
          <Pie class="donut" :data="smsData" :options="options" />
        </div>
        <div>
          <Pie class="donut" :data="rgpdData" :options="options" />
        </div>
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import { useStatsStore } from "../../stores/statsStore";
ChartJS.register(ArcElement, Tooltip, Legend);

const statsStore = useStatsStore();
const quality = statsStore.stats.quality;

const emailData = {
  labels: ["Avec Email", "Sans Email"],
  datasets: [
    {
      backgroundColor: ["#5DADE2", "#E67E22"],
      data: [quality.avecEmail, quality.sansEmail],
    },
  ],
};
const smsData = {
  labels: ["Avec Mobile", "Sans Mobile"],

  datasets: [
    {
      backgroundColor: ["#5DADE2", "#E67E22"],
      data: [quality.avecMobile, quality.sansMobile],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
};

const rgpdData = {
  labels: ["Accepte", "Refuse"],
  datasets: [
    {
      backgroundColor: ["#5DADE2", "#E67E22"],
      data: [quality.rgpdYes, quality.rgpdNo],
    },
  ],
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
