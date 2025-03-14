<template>
  <div class="registration-container">
    <h1 data-testid="page-title">User Registration</h1>
    <form @submit.prevent="handleRegistration" data-testid="registration-form" class="registration-form">
      <div class="form-grid">
        <div class="form-group">
          <label for="reg-name">Name:</label>
          <input data-testid="reg-name-input" id="reg-name" type="text" v-model="user.name" placeholder="Enter your name" required />
        </div>
        <div class="form-group">
          <label for="reg-email">Email:</label>
          <input data-testid="reg-email-input" id="reg-email" type="email" v-model="user.email" placeholder="Enter your email" required />
        </div>

        <div class="form-group">
          <label for="reg-role">Role:</label>
          <select data-testid="reg-role-select" id="reg-role" v-model="user.role" required>
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>

        <div class="form-group">
          <label>Interests:</label>
          <div class="checkbox-group">
            <label>
              <input type="checkbox" value="technology" v-model="user.interests" data-testid="reg-interest-tech" />
              Technology
            </label>
            <label>
              <input type="checkbox" value="design" v-model="user.interests" data-testid="reg-interest-design" />
              Design
            </label>
            <label>
              <input type="checkbox" value="music" v-model="user.interests" data-testid="reg-interest-music" />
              Music
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="reg-avatar">Avatar:</label>
          <input type="file" id="reg-avatar" data-testid="reg-avatar-upload" accept="image/*" @change="handleFileUpload" />
          <img v-if="avatarURL" :src="avatarURL" alt="Avatar Preview" style="max-width: 100px; margin-top: 10px;" data-testid="reg-avatar-preview" />
        </div>

        <div class="form-group">
          <label>Subscription:</label>
          <div class="radio-group">
            <label>
              <input type="radio" value="monthly" v-model="user.subscription" data-testid="reg-subscription-monthly" />
              Monthly
            </label>
            <label>
              <input type="radio" value="yearly" v-model="user.subscription" data-testid="reg-subscription-yearly" />
              Yearly
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="reg-address">Address:</label>
          <input data-testid="reg-address-input" id="reg-address" type="text" v-model="user.address" placeholder="Enter your address" required />
        </div>
      </div>

      <button data-testid="reg-submit-button" type="submit">Register</button>
    </form>

    <div data-testid="reg-result" class="result" v-if="registrationComplete">
      <h2>Registration Complete</h2>
      <p data-testid="result-name"><strong>Name:</strong> {{ user.name }}</p>
      <p data-testid="result-email"><strong>Email:</strong> {{ user.email }}</p>
      <p data-testid="result-role"><strong>Role:</strong> {{ user.role }}</p>
      <p data-testid="result-interests"><strong>Interests:</strong> {{ user.interests.join(', ') }}</p>
      <p data-testid="result-subscription"><strong>Subscription:</strong> {{ user.subscription }}</p>
      <p data-testid="result-avatar"><strong>Avatar:</strong>
        <img v-if="avatarURL" :src="avatarURL" alt="Avatar" style="max-width: 100px;" />
      </p>
      <p data-testid="result-address"><strong>Address:</strong> {{ user.address }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref({
  name: '',
  email: '',
  role: '',
  interests: [],
  subscription: '',
  avatar: '',
  address: ''
});
const registrationComplete = ref(false);
const avatarURL = ref(null);

function handleRegistration() {
  // For demo purposes, assume registration is successful if all required fields are provided
  if (user.value.name && user.value.email && user.value.role && user.value.address) {
    registrationComplete.value = true;
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    avatarURL.value = URL.createObjectURL(file);
    user.value.avatar = file.name; // Store file name for display purposes
  }
}
</script>

<style scoped>
.registration-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.registration-form {
  display: flex;
  flex-direction: column;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 0.5rem;
}

select {
  height: 40px;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #2980b9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3498db;
}

.result {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
}

/* Style for checkbox and radio button groups */
.checkbox-group,
.radio-group {
  display: flex;
  flex-direction: column;
}

.checkbox-group label,
.radio-group label {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.checkbox-group input[type="checkbox"],
.radio-group input[type="radio"] {
  margin-right: 0.5rem;
}
</style>
