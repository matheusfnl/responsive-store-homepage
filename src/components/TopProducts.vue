<template>
  <div class="top-products-container">
    <div class="product-card-wrapper"  :key="i" v-for="i in 4">
      <ProductCard />
    </div>
  </div>
</template>

<script>
  import ProductCard from '@/components/utils/ProductCard.vue';

  export default {
    name: 'AppTopProducts',
    components: { ProductCard },
  }
</script>

<style scoped>
  .top-products-container {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .product-card-wrapper { flex: 1; }

  @media (max-width: 660px){
    .top-products-container { flex-wrap: wrap; }
    .product-card-wrapper { flex-basis: calc(50% - 8px); }
  }
</style>