<template>
  <div class="container" data-testid="orders-page">
    <Header />
    <main>
      <section class="orders-content">
        <h2 data-testid="orders-title">Orders</h2>
        <div class="search-section" data-testid="search-section">
          <input type="text" v-model="searchQuery" placeholder="Search orders..." data-testid="search-input" />
          <button class="btn" @click="fetchOrders" data-testid="search-button">Search</button>
        </div>
        <div class="orders" data-testid="orders-list">
          <ul>
            <li v-for="order in orders" :key="order.id" :data-testid="`order-${order.id}`">
              Order ID: {{ order.id }}, Item: {{ order.item }}, Quantity: {{ order.quantity }}
            </li>
          </ul>
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

const searchQuery = ref('')
const orders = ref([])

const fetchOrders = async () => {
  const queryParam = searchQuery.value ? `?search=${encodeURIComponent(searchQuery.value)}` : ''
  try {
    orders.value = await $fetch(`/api/orders${queryParam}`, {
      headers: {
        Authorization: 'Bearer my-secret-token'
      }
    })
  } catch (error) {
    orders.value = []
    console.error('Unauthorized or error fetching orders', error)
  }
}

</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.orders-content {
  text-align: center;
}

.search-section {
  margin: 1rem 0;
}

.search-section input {
  padding: 0.5rem;
  width: 300px;
  max-width: 100%;
}
</style>
