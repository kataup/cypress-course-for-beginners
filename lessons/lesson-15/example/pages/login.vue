<template>
  <div class="container">
    <Header />
    <main>
      <section class="login-content">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div>
            <label for="name">Name:</label>
            <input id="name" v-model="name" type="text" required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input id="password" v-model="password" type="password" required />
          </div>
          <button type="submit" class="btn">Submit</button>
        </form>
        <div v-if="token">
          <p>Your token: <strong>{{ token }}</strong></p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const name = ref('')
const password = ref('')
const token = ref('')

const handleLogin = async () => {
  const res = await $fetch('/api/login', {
    method: 'POST',
    body: { name: name.value, password: password.value }
  })
  token.value = res.token
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.login-content {
  max-width: 500px;
  margin: 2rem auto;
  text-align: center;
}

.login-content form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-content label {
  display: block;
  margin-bottom: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
