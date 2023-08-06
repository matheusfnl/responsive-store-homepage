<template>
  <div class="content-container">
    <p class="content-paragraph">
      {{ title }}
    </p>

    <div class="content-span" v-if="description">
      {{ description }}
    </div>

    <slot />
  </div>
</template>

<script>
  export default {
    name: 'ContentContainer',
    props: {
      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        default: '',
      }
    },
  }
</script>
<style scoped>
  .content-paragraph {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .content-span {
    font-weight: 300;
    margin-bottom: 16px;
  }
</style>