
<template>
  <header>
    <div class="container" >
      <WeatherCard class="item" location="New York" />
      <WeatherCard class="item" location="Reykjavik" />
      <WeatherCard class="item" location="Berlin" />
      <WeatherCard class="item" location="New York" />
      <WeatherCard class="item" location="Reykjavik" />
      <WeatherCard class="item" location="Berlin" />
    </div>
  </header>

</template>

<script setup>

import WeatherCard from './components/WeatherCard.vue'

</script>

<style scoped>

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
   text-align: center;
}

.item {
  padding: 20px 0;
  font-size: 30px;
}
</style>
