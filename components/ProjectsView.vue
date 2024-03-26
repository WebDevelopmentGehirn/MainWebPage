<template>
  <section class="grid-container">
    <h1>Projects</h1>
    <hr class="divider">
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.grid-container {
  margin-top: 73.5px; 
  display: grid;
  grid-template-columns: repeat(12, 1fr); 
  height: 50vh;
}

h1 {
  grid-column: 3/5;
  text-align: center;
  font-size: 5rem;
}

.divider {
  grid-column: 3 / span 6;
  border: 0;
  border-top: 2px solid #C857A3;
  margin-top: -148px;
}
</style>