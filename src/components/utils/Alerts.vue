<template>
  <div class="max-width-container">
    <div class="content-container">
      content
    </div>
  </div>
</template>

<script>
  export default { name: 'AppAlerts' }
</script>

<style scoped>
  .max-width-container {
    width: 100%;
    background-color: rgb(250, 206, 62);
    display: flex;
    justify-content: center;
  }

  .content-container {
    max-width: 1440px;
    padding: 0px 20px;
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(0, 0, 0);
  }
</style>