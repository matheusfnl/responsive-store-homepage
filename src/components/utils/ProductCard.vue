<template>
  <div class="card-container">
    <div class="image-card" />
    <div class="card-content">
      <span class="product-title">CAMISETA PRETA 123123 123</span>
      <div class="price-container price-secondary">
        <span>De:</span>
        <span class="line-trought">R$ 200</span>
      </div>

      <div class="price-container price-primary">
        <span>Por:</span>
        <span>R$ 300</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppProductCard',
  }
</script>

<style scoped>
  .card-container {
    width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    max-width: 328px;
    gap: 16px;
  }

  .image-card {
    background-color: rgb(202, 202, 202);
    aspect-ratio: 1/1.3;
    border-radius: 8px 8px 0px 0px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .price-container {
    min-width: 100px;
    display: flex;
    justify-content: space-between;
  }

  .product-title {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 8px;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

  }

  .price-secondary {
    font-size: 12px;
    color: rgb(133, 133, 133);
    font-weight: 300;
    min-width: 80px;
  }

  .price-primary {
    font-size: 16px;
    font-weight: 700;
  }

  .line-trought { text-decoration: line-through; }
</style>