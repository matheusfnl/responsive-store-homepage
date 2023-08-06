<template>
  <div class="categories-container">
    <div class="category-card" v-for="i in categories" :key="i"></div>
  </div>
</template>

<script>
  export default {
    name: 'AppCategorySelector',
    data() { return { categories: [
      {
        name: 'Shirts',
      },
      {
        name: 'Shorts'
      },
      {
        name: 'Acessories'
      },
      {
        name: 'Figures'
      },
    ] } }
  }
</script>

<style scoped>
  .categories-container {
    display: flex;
    gap: 16px;
  }

  .category-card {
    background-color: aliceblue;
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    font-weight: bold;
    color: white;
    box-shadow: inset 0 -150px 120px -50px rgba(0,0,0,.7);
  }

  @media (max-width: 660px) {
    .categories-container { flex-wrap: wrap; }
    .category-card { flex-basis: calc(50% - 8px); }
  }
</style>