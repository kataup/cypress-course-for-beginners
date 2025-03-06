<template>
  <div>
    <section id="hero">
      <h1>Master Cypress Testing</h1>
      <p>Learn end-to-end testing with the most powerful web testing framework</p>
      <NuxtLink to="/courses" class="cta-button">Get Started</NuxtLink>
    </section>

    <section id="features">
      <h2>Why Choose Our Course?</h2>
      <ul>
        <li>Comprehensive curriculum</li>
        <li>Hands-on projects</li>
        <li>Expert instructors</li>
        <li>Flexible learning schedule</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
// No additional script needed for this simple page
</script>

<style scoped>
#hero {
  text-align: center;
  padding: 4rem 0;
  background-color: #f4f4f4;
}

#hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
}

#features {
  margin-top: 2rem;
}

#features ul {
  list-style-type: none;
  padding: 0;
}

#features li {
  margin-bottom: 0.5rem;
}
</style>