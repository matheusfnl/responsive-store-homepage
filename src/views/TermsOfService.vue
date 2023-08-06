<template>
  <div class="max-width-container">
    <div class="content-container">
      <div class="terms-of-service-container">
        <p class="tos-title">Termos de serviço</p>

        <div class="section-info">
          <span class="sec-title">
            Objetivo
          </span>

          <span class="sec-desc">
            Nosso serviço tem como objetivo redirecionar os usuários para lojas e/ou websites de terceiros, onde poderão realizar suas compras online. Ressaltamos que não vendemos produtos ou serviços diretamente, atuando apenas como intermediários para facilitar o acesso às lojas.
          </span>
        </div>

        <div class="section-info">
          <span class="sec-title">
            Privacidade
          </span>

          <span class="sec-desc">
            O fornecimento de informações como endereço de e-mail e número de telefone é opcional. Caso você opte por fornecer esses dados, eles serão usados exclusivamente para enviar informações sobre promoções, ofertas, atualizações e outras comunicações relevantes relacionadas ao nosso serviço. Ressaltamos que garantimos a não divulgação ou compartilhamento dessas informações com terceiros sem o seu consentimento expresso.
          </span>
        </div>

        <div class="section-info">
          <span class="sec-title">
            Uso do Serviço
          </span>

          <span class="sec-desc">
            Ao utilizar nosso serviço, você concorda em cumprir estes Termos de Serviço. O Serviço destina-se ao uso exclusivo de interação com as lojas e/ou websites de terceiros redirecionados através da nossa plataforma. Você concorda em utilizar o Serviço somente para fins legais e em conformidade com qualquer legislação aplicável.
          </span>
        </div>

        <div class="section-info">
          <span class="sec-title">
            Responsabilidade
          </span>

          <span class="sec-desc">
            Ressaltamos que não somos responsáveis por qualquer transação ou interação realizada entre você e as lojas/empresas redirecionadas através do nosso serviço. Não controlamos o conteúdo, qualidade ou disponibilidade dos produtos/serviços oferecidos por terceiros, sendo de responsabilidade exclusiva do usuário avaliar e decidir sobre suas compras.
          </span>
        </div>

        <div class="section-info">
          <span class="sec-title">
            Propriedade Intelectual
          </span>

          <span class="sec-desc">
            Todo o conteúdo, marcas registradas, logotipos e materiais presentes em nosso serviço são de propriedade exclusiva da Hogssey. Nenhum conteúdo do Serviço pode ser copiado, reproduzido, modificado ou distribuído sem a devida autorização por escrito.
          </span>
        </div>

        <div class="section-info">
          <span class="sec-title">
            Modificações dos Termos de Serviço
          </span>

          <span class="sec-desc">
            Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento, mediante notificação prévia. É sua responsabilidade revisar periodicamente os termos atualizados. A continuação do uso do Serviço após as modificações constitui sua aceitação dos novos termos.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainPage',
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

  .terms-of-service-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px 20%;
  }

  .tos-title { font-size: 32px; }

  .section-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }

  .sec-title {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  .sec-desc {
    font-size: 16px;
    font-weight: 300;
  }
</style>
