<template>
  <div class="container" data-testid="home-page">
    <h1 data-testid="home-title">Welcome to the Value Generator App</h1>
    <p data-testid="home-dummy">This is some dummy data for the home page.</p>
    <router-link to="/generate-value" data-testid="nav-generate-button">
      <button>Go to Generate Value</button>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
