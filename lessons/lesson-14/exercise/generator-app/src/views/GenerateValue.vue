<template>
  <div class="container" data-testid="generate-page">
    <h1 data-testid="generate-title">Generate Value</h1>
    <div class="form-wrapper">
      <form @submit.prevent="handleConfirm" data-testid="generate-form" class="generate-form">
        <div class="form-group">
          <label for="input1">Input 1:</label>
          <input id="input1" data-testid="input1" v-model="input1" placeholder="Enter first value" required />
        </div>
        <div class="form-group">
          <label for="input2">Input 2:</label>
          <input id="input2" data-testid="input2" v-model="input2" placeholder="Enter second value" required />
        </div>
        <button type="submit" data-testid="confirm-button" class="confirm-button">Confirm</button>
      </form>
    </div>
    <div v-if="randomizedResult" data-testid="result-display" class="result">
      <h2>Randomized Result</h2>
      <p data-testid="result-text">{{ randomizedResult }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Two-way bound values for the input fields
const input1 = ref('');
const input2 = ref('');
const randomizedResult = ref('');

// A simple function to "randomize" a value using a hardcoded key.
// For demonstration, we concatenate the value with a key and its reversed form.
function randomizeValue(value, key = '1234') {
  return value + '-' + key + '-' + value.split('').reverse().join('');
}

function handleConfirm() {
  // For demo, combine both inputs and randomize each individually
  const random1 = randomizeValue(input1.value);
  const random2 = randomizeValue(input2.value);
  randomizedResult.value = `Result 1: ${random1}, Result 2: ${random2}`;
}
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
