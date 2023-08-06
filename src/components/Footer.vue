<template>
  <div class="max-width-container">
    <div class="footer-container">
      <div class="footer-part logo-icon">
        <img src="../static/hogsseylogo.svg" />
      </div>

      <div class="footer-part">
        <div class="footer-title">
          Contato
        </div>

        <div class="footer-options">
          <div class="footer-item">
            <i class="pi pi-at" />
            hogsseycompany@gmail.com
          </div>

          <div class="footer-item">
            <i class="pi pi-phone" />
            (31) 9 95524319
          </div>
        </div>
      </div>

      <div class="footer-part">
        <div class="footer-title">
          Informações Importantes
        </div>

        <div class="footer-options">
          <div class="footer-item">
            <router-link to="/terms-of-service" class="styless-hyperlink" href="#">
              Termos de Serviço
            </router-link>
          </div>

          <div class="footer-item">
            <router-link to="/terms-of-service" class="styless-hyperlink" href="#">
              Política de Privacidade
            </router-link>
          </div>
        </div>
      </div>

      <div class="footer-part">
        <span>
          © 2023, Hogssey • Todos os direitos reservados.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppFooter',
  }
</script>

<style scoped>
  .max-width-container {
    width: 100%;
    background-color: #cfcfcf;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;
  }

  .footer-container {
    max-width: 1440px;
    padding: 20px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .footer-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    cursor: default;
    user-select: none;
  }

  .footer-options {
    display: flex;
    flex-direction: column;
  }

  .footer-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    font-size: 14px;
  }

  .styless-hyperlink {
    color: inherit;
    text-decoration: none;
    user-select: none;
  }

  .styless-hyperlink:hover { color: grey }

  .logo-icon img {
    max-width: 200px;
    filter: brightness(0);
  }

  @media (max-width: 660px) {
    .logo-icon { display: none; }
    .footer-container { flex-wrap: wrap; }
    .footer-part { flex-basis: calc(50% - 8px); }
  }

  @media (max-width: 500px) {
    .logo-icon { display: none; }
    .footer-container { flex-direction: column; }
  }
</style>