<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  // Here you would typically send the form data to a server
  // For now, we'll just log it to the console
  console.log('Form submitted:', { name: name.value, email: email.value, message: message.value })
  
  // In a real application, you'd send an email here
  // For example, using a service like EmailJS or a custom backend
  
  // Reset form fields after submission
  name.value = ''
  email.value = ''
  message.value = ''
  
  alert('Thank you for your message! We will get back to you soon.')
}
</script>

<template>
  <section class="contact">
    <h2 class="contact-title">Contact Us</h2>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
    <div class="contact-info">
      <p>Or reach out directly:</p>
      <a href="mailto:philipp@godesteem.de" class="email-link">philipp@godesteem.de</a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 4rem 2rem;
  background-color: #1a1a2e;
}

.contact-title {
  text-align: center;
  font-size: 2.5rem;
  color: #e94560;
  margin-bottom: 2rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #e0e0e0;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  background-color: #16213e;
  color: #e0e0e0;
  border-radius: 4px;
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-button {
  background-color: #e94560;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;
}

.submit-button:hover {
  background-color: #c81e45;
}

.contact-info {
  text-align: center;
  margin-top: 2rem;
}

.email-link {
  color: #e94560;
  text-decoration: none;
  font-weight: bold;
}

.email-link:hover {
  text-decoration: underline;
}
</style>