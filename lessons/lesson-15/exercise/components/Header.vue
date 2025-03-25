<template>
  <header class="header">
    <h1>My Nuxt App</h1>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <!-- <NuxtLink to="/orders">Orders</NuxtLink> -->
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #f8f9fa;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}
</style>
