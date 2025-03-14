<template>
  <footer data-testid="footer">
    <p>&copy; {{ currentYear }} Demo App. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
</style>