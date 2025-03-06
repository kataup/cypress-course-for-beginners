<template>
  <div class="account-container">
    <h1>Welcome to Your Account</h1>
    <p>You have successfully logged in or registered.</p>
    <p data-testid="email-display">Email: {{ email }}</p>
    <p>This is your account dashboard.</p>
    <button @click="logout" data-testid="logout-button">Logout</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const email = ref('');

onMounted(() => {
  email.value = route.query.email?.toString() || 'No email provided';
});

const logout = () => {
  // Here you would typically handle the logout process
  // For now, we'll just redirect to the home page
  router.push('/');
};
</script>

<style scoped>
.account-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}
</style>