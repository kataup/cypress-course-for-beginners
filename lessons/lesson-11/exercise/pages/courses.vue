<template>
  <div class="courses-container">
    <h1>Our Courses</h1>

    <div class="courses-grid">
      <div v-for="course in courses" :key="course.id" class="course-card" :data-testid="`course-${course.id}`">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
        <p class="price">{{ course.price }}€</p>

        <div class="comments-section">
          <h4>Comments</h4>
          <ul>
            <li v-for="comment in course.comments" :key="comment.id" :data-testid="`comment-${comment.id}`">
              <strong>{{ comment.author }}</strong>: {{ comment.text }}
            </li>
          </ul>

          <form @submit.prevent="addComment(course.id)" class="comment-form">
            <input type="text" v-model="newComments[course.id]" placeholder="Add a comment..." :data-testid="`comment-input-${course.id}`">
            <button type="submit" :data-testid="`submit-comment-${course.id}`">Add Comment</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const courses = ref([
  {
    id: 1,
    title: 'Cypress Basics',
    description: 'Learn the fundamentals of Cypress testing framework',
    price: 99,
    comments: [
      { id: 1, author: 'John', text: 'Great course for beginners!' }
    ]
  },
  {
    id: 2,
    title: 'Advanced E2E Testing',
    description: 'Master end-to-end testing with real-world examples',
    price: 149,
    comments: [
      { id: 1, author: 'Sarah', text: 'Very comprehensive material.' }
    ]
  },
  {
    id: 3,
    title: 'Test Automation Patterns',
    description: 'Learn best practices for test automation',
    price: 129,
    comments: []
  }
]);

const newComments = ref({});

const addComment = (courseId) => {
  if (!newComments.value[courseId]?.trim()) return;

  const course = courses.value.find(c => c.id === courseId);
  if (course) {
    course.comments.push({
      id: course.comments.length + 1,
      author: 'Anonymous',
      text: newComments.value[courseId]
    });
    newComments.value[courseId] = '';
  }
};
</script>

<style scoped>
.courses-container {
  padding: 2rem;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.course-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}

.price {
  font-weight: bold;
  color: #007bff;
}

.comments-section {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.comment-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.comment-form input {
  flex: 1;
  padding: 0.5rem;
}

.comment-form button {
  padding: 0.5rem 1rem;
}
</style>