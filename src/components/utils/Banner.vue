<template>
  <div class="max-width-container">
    <div class="content-container">
      banner content
    </div>
  </div>
</template>

<script>
  export default { name: 'AppBanner' }
</script>

<style scoped>
  .max-width-container {
    width: 100%;
    background-color: rgb(212, 212, 212);
    display: flex;
    justify-content: center;
  }

  .content-container {
    max-width: 1440px;
    padding: 0px 20px;
    width: 100%;
    height: 230px;
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0);
  }
</style>