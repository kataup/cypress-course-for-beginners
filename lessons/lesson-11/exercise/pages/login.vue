<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required @blur="validateEmail" data-testid="email-input" />
        <span v-if="emailError" class="error">{{ emailError }}</span>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required @blur="validatePassword"
          data-testid="password-input" />
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
      </div>
      <div class="button-group">
        <button type="submit" :disabled="!isFormValid" data-testid="login-btn">Login</button>
        <button type="button" @click="handleRegister" :disabled="!isFormValid"
          data-testid="register-btn">Register</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(email.value) ? '' : 'Invalid email format';
};

const validatePassword = () => {
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!password.value) { // Handle empty password case for initial state or clearing
    passwordError.value = ''; // Or set a specific message if needed
  } else if (password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters long';
  } else if (!specialCharRegex.test(password.value)) {
    passwordError.value = 'Password must contain at least one special character';
  } else {
    passwordError.value = '';
  }
};

const isFormValid = computed(() => {
  // Trigger validation explicitly if needed, or rely on @blur
  // Ensure errors are checked *after* potential validation runs
  const isEmailValid = email.value && !emailError.value;
  const isPasswordValid = password.value && !passwordError.value;
  // Check the actual error refs *after* validation logic might have run
  return email.value && password.value && emailError.value === '' && passwordError.value === '';
});

const handleSubmit = () => {
  // Here you would typically make an API call to authenticate the user
  console.log('Login submitted:', { email: email.value, password: password.value });
  // Redirect to the account page with the email as a route parameter
  router.push({ path: '/account', query: { email: email.value } });
};

const handleRegister = () => {
  // For now, we'll just redirect to the account page with the email
  router.push({ path: '/account', query: { email: email.value } });
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 0.8rem;
}
</style>