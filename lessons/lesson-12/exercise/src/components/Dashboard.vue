<template>
  <div class="dashboard-container">
    <h1 data-testid="dashboard-title">Dashboard</h1>
    <p data-testid="welcome-message">Welcome, {{ username }}!</p>

    <!-- Display dynamic data from JSON -->
    <div class="data-box">
      <h2 data-testid="ruian-title">Address Details</h2>
      <div v-if="addressData">
        <p data-testid="ruian-code">Ruian Code: {{ addressData.ruian_code }}</p>
        <p data-testid="available-technologies">
          Available Technologies: {{ addressData.available_technologies.join(', ') }}
        </p>
      </div>
      <div v-else>
        <p>No data found for the provided address.</p>
      </div>
    </div>

    <!-- Button to trigger file download -->
    <div class="download-box">
      <h2>Download File</h2>
      <button data-testid="download-button" @click="downloadFile">Download Sample PDF</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const username = import.meta.env.VITE_LOGIN_USERNAME || 'User';
const addressData = ref(null);

function downloadFile() {
  const link = document.createElement('a');
  link.href = '/sample.pdf'; // Assuming sample.pdf is in the public folder
  link.download = 'sample.pdf';
  link.click();
}

onMounted(() => {
  const env = import.meta.env.MODE;
  let dataFile = 'data.development.json';

  if (env === 'staging') {
    dataFile = 'data.staging.json';
  } else if (env === 'production') {
    dataFile = 'data.production.json';
  }

  fetch(import.meta.env.VITE_API_BASE_URL + '/' + dataFile)
    .then(response => response.json())
    .then(data => {
      // For demo purposes, we'll just pick the first record
      addressData.value = data[0];
    })
    .catch(err => {
      console.error('Error fetching data:', err);
    });
});
</script>

<style scoped>
.dashboard-container {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.data-box,
.download-box {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

p {
  color: #666;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
