<template>
  <div>
    <Header />

    <div class="header-spacement">
      <router-view class="header-spacement"/>
    </div>

    <Footer />
  </div>
</template>

<script setup>
  import "primevue/resources/themes/lara-light-indigo/theme.css";
  import 'primeicons/primeicons.css';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', var(--font-family), sans-serif;
  }

  .header-spacement {
    margin-top: 60px;
  }
</style>
