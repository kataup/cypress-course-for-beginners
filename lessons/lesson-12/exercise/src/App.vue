<template>
  <div id="app">
    <p class="mode-display">Running in {{ mode }} mode</p>
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const mode = computed(() => import.meta.env.MODE);
</script>

<style>
/* Global app styling can go here */
.mode-display {
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  z-index: 1000;
}
</style>
