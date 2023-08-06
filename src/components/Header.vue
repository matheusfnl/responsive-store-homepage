<template>
  <div class="max-width-container">
    <div class="header-container">
      <router-link to="/" class="logo-container">
        <img src="../static/hogsseylogo.svg" />
      </router-link>

      <div class="right">
        <span class="p-input-icon-left input-full-width">
          <InputText v-model="search_query" class="header-input" size="small" placeholder="Search" />
          <i class="pi pi-search filter-icon" @click="handleClick" />
        </span>

        <div class="bag-icon">
          <i class="pi pi-shopping-bag" style="font-size: 1.2rem" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InputText from 'primevue/inputtext';

  export default {
    name: 'AppHeader',
    components: { InputText },
    data() {
      return { search_query: '', }
    },

    methods: {
      handleClick() {
        this.$router.push({
          name: 'products',
          query: { q: this.search_query }
        })
      },
    },
  }
</script>

<style scoped>
  .max-width-container {
    width: 100%;
    background-color: #6F32FF;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
  }

  .header-container {
    max-width: 1440px;
    padding: 0px 20px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
    color: white;
  }

  .input-full-width { width: 100% }
  .header-container .right {
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }

  .header-input {
    width: 100%;
    max-width: 400px;
  }

  .logo-container { cursor: pointer; }
  .logo-container img {
    max-width: 200px;
    width: 100%;
  }

  .bag-icon { cursor: pointer }
  .filter-icon { cursor: pointer; }
  .filter-icon:hover { color: #131313 }
</style>