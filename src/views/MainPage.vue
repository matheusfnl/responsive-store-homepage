<template>
  <div class="max-width-container">
    <div class="content-container">
      <ContentContainer title="Produtos em alta">
        <TopProducts />
      </ContentContainer>

      <ContentContainer title="Categorias">
        <CategorySelector />
      </ContentContainer>

      <div class="highlight-area">
        <ContentContainer
          title="Receba ofertas e promoções!"
          description="Não se preocupe! Seus dados não serão compartilhados."
        >
          <LeadForm />
        </ContentContainer>
      </div>
    </div>
  </div>
</template>

<script>
  import ContentContainer from '@/components/layout/ContentContainer.vue';
  import CategorySelector from '@/components/CategorySelector.vue';
  import LeadForm from '@/components/LeadForm.vue';
  import TopProducts from '@/components/TopProducts.vue';

  export default {
    name: 'MainPage',
    components: {
      ContentContainer,
      CategorySelector,
      TopProducts,
      LeadForm,
    }
  }
</script>

<style scoped>
  .max-width-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .content-container {
    padding: 16px 20px;
    max-width: 1440px;
    width: 100%;
  }

  .highlight-area {
    margin-top: 16px;
    padding: 0px 20px 20px;
    background-color: rgb(233, 233, 233);
  }
</style>