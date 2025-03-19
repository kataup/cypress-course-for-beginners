<template>
  <div class="container" data-testid="home-page">
    <Header />
    <main>
      <section class="home-content">
        <h2 data-testid="welcome-title">Welcome to My Nuxt App</h2>
        <p data-testid="welcome-text">This is some dummy content for the home page.</p>
        <NuxtLink to="/login" class="btn" data-testid="login-link">Login</NuxtLink>
        <div class="search-section" data-testid="search-section">
          <input type="text" v-model="searchQuery" placeholder="Search articles..." data-testid="search-input" />
          <button @click="fetchArticles" class="btn" data-testid="search-button">Search</button>
        </div>
        <div class="articles" data-testid="articles-section" v-if="hasSearched">
          <h3 data-testid="articles-title">Articles</h3>
          <ul>
            <li v-for="article in articles" :key="article.id" :data-testid="`article-${article.id}`">
              <strong>{{ article.title }}</strong>: {{ article.content }}
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
const articles = ref([])
const hasSearched = ref(false)

const fetchArticles = async () => {
  const queryParam = searchQuery.value ? `?search=${encodeURIComponent(searchQuery.value)}` : ''
  articles.value = await $fetch(`/api/articles${queryParam}`)
  hasSearched.value = true
}

// Remove onMounted(fetchArticles) to prevent initial data load
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.home-content {
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

.btn {
  display: inline-block;
  margin: 1rem;
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>
