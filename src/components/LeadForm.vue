<template>
  <div class="special-promotions-container">
    <InputText class="fit-max-width" placeholder="E-mail" />
    <InputMask class="fit-max-width" mask="99 99999-9999" placeholder="Número de telefone" />
    <Button label="Enviar" />
  </div>
</template>

<script>
  import InputText from 'primevue/inputtext';
  import InputMask from 'primevue/inputmask';
  import Button from 'primevue/button';

  export default {
    name: 'AppLeadForm',
    components: {
      InputText,
      InputMask,
      Button,
    },
  }
</script>

<style scoped>
  .special-promotions-container {
    display: flex;
    gap: 16px;
  }

  .fit-max-width { flex: 1; }

  @media (max-width: 660px) {
    .special-promotions-container { flex-direction: column; }
  }
</style>