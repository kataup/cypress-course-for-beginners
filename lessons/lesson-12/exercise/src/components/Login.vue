<template>
  <div class="login-container">
    <h1 data-testid="page-title">Login</h1>
    <form @submit.prevent="handleLogin" data-testid="login-form" class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input data-testid="login-username-input" id="username" type="text" v-model="username" placeholder="Enter username" required />
        <span data-testid="error-username" class="error" v-if="errors.username">{{ errors.username }}</span>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input data-testid="login-password-input" id="password" type="password" v-model="password" placeholder="Enter password" required />
        <span data-testid="error-password" class="error" v-if="errors.password">{{ errors.password }}</span>
      </div>
      <button data-testid="login-submit-button" type="submit" class="login-button">Login</button>
    </form>
    <div data-testid="error-invalid" class="error" v-if="errors.invalid">{{ errors.invalid }}</div>
    <div data-testid="login-success-message" class="success" v-if="successMessage">{{ successMessage }}</div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const errors = reactive({});
const successMessage = ref('');
const router = useRouter();

function handleLogin() {
  // Clear previous errors and messages
  for (const key in errors) {
    delete errors[key];
  }
  successMessage.value = '';

  // Simple validation
  if (!username.value) {
    errors.username = 'Username is required.';
  }
  if (!password.value) {
    errors.password = 'Password is required.';
  }
  if (Object.keys(errors).length) {
    return;
  }

  // Access environment-specific credentials
  const validUsername = import.meta.env.VITE_LOGIN_USERNAME;
  const validPassword = import.meta.env.VITE_LOGIN_PASSWORD;

  if (username.value === validUsername && password.value === validPassword) {
    successMessage.value = 'Login successful! Redirecting...';
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  } else {
    errors.invalid = 'Invalid credentials, please try again.';
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-button {
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
}

.success {
  color: green;
  margin-top: 1rem;
  display: block;
}
</style>
