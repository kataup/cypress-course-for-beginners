<template>
  <div class="contact-container">
    <h1>Contact Us</h1>

    <form @submit.prevent="handleSubmit" class="contact-form" data-testid="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" @blur="validateName" data-testid="name-input" required>
        <span v-if="errors.name" class="error" data-testid="name-error">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" @blur="validateEmail" data-testid="email-input" required>
        <span v-if="errors.email" class="error" data-testid="email-error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" @blur="validateMessage" data-testid="message-input" required></textarea>
        <span v-if="errors.message" class="error" data-testid="message-error">{{ errors.message }}</span>
      </div>

      <button type="submit" :disabled="!isFormValid" data-testid="submit-button">Send Message</button>
    </form>

    <div v-if="submitStatus" :class="['submit-status', submitStatus.type]" data-testid="submit-status">
      {{ submitStatus.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const errors = ref({
  name: '',
  email: '',
  message: ''
});

const submitStatus = ref(null);

const validateName = () => {
  errors.value.name = formData.value.name.length < 2
    ? 'Name must be at least 2 characters long'
    : '';
};

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errors.value.email = !emailRegex.test(formData.value.email)
    ? 'Please enter a valid email address'
    : '';
};

const validateMessage = () => {
  errors.value.message = formData.value.message.length < 10
    ? 'Message must be at least 10 characters long'
    : '';
};

const isFormValid = computed(() => {
  return formData.value.name &&
    formData.value.email &&
    formData.value.message &&
    !errors.value.name &&
    !errors.value.email &&
    !errors.value.message;
});

const handleSubmit = () => {
  // Validate all fields
  validateName();
  validateEmail();
  validateMessage();

  if (isFormValid.value) {
    // Simulate form submission
    submitStatus.value = {
      type: 'success',
      message: 'Message sent successfully!'
    };

    // Reset form
    formData.value = {
      name: '',
      email: '',
      message: ''
    };
  } else {
    submitStatus.value = {
      type: 'error',
      message: 'Please fix the errors in the form.'
    };
  }
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  min-height: 150px;
}

.error {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
}

.submit-status.success {
  background-color: #d4edda;
  color: #155724;
}

.submit-status.error {
  background-color: #f8d7da;
  color: #721c24;
}
</style>