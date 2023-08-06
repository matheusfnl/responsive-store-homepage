<template>
  <div class="max-width-container">
    <div class="content-container">
      <div class="search-container">
        <InputText v-model="search_query" size="small" class="search-input" placeholder="Search" />
        <Dropdown v-model="filter_order" :options="filter_options" showClear optionLabel="name" placeholder="Filtro" class="filter-input w-full md:w-14rem" />
        <Button size="small" label="Search" />
      </div>

      <div class="products-container">
        <div class="product-card-wrapper" :key="i" v-for="i in 12">
          <ProductCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import Dropdown from 'primevue/dropdown';

  import ProductCard from '@/components/utils/ProductCard.vue';

  export default {
    name: 'AppProductsPage',
    components: {
      ProductCard,
      InputText,
      Button,
      Dropdown,
    },

    data() {
      return {
        filter_order: null,
        search_query: '',
        filter_options: [
          { name: 'Menor preço', code: 'lowest' },
          { name: 'Maior preço', code: 'highest' },
        ]
      }
    },

    mounted() {
      this.search_query = this.$route.query.q;
    },
  }
</script>

<style scoped>
  .max-width-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .content-container {
    padding: 38px;
    max-width: 1440px;
    width: 100%;
  }

  .search-container {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
  }

  .search-input {
    width: 100%;
    max-width: 400px;
    flex: 1;
  }

  .filter-input {
    width: 100%;
    max-width: 200px;
    flex: 1;
  }

  .products-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }

  .product-card-wrapper {
    flex: 1 0 21%;
    margin-bottom: 16px;
  }

  @media (max-width: 840px) {
    .product-card-wrapper { flex: 1 0 30%; }
  }

  @media (max-width: 600px) {
    .product-card-wrapper { flex-basis: calc(50% - 8px); }
  }
</style>