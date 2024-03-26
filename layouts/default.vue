<template>
    <main class="Home">
        <Navbar/>
        <slot></slot>
    </main>
</template>

<script setup lang="ts">
    const num1 = 2
</script>

<style scoped>
.Home
{
  background: linear-gradient(to bottom, black 42.5%, #2B4353 100%);
  min-height: 100vh;
  width: 100vw;
  padding: 0;  
}
</style>