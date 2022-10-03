<script setup lang="ts">
import Header from './components/Header.vue'
import Image from './components/Image.vue'
import CallToAction from './components/CallToAction.vue'
</script>

<template>
<div class="app">
<Header
    title="Na Trave"
    imageSource="./assets/logo/logo-fundo-vinho.svg"
/>


<Image
    source="./assets/imagem/img.png"
    title="Na Trave na Copa do Mundo do Catar 2022"
    size="large"
/>


<CallToAction
    title="Dê o seu palpite na Copa do Mundo do Catar 2022!"
    primaryButtonTitle="Criar minha conta"
    primaryButtonLinkTo="/newAccount"
    
    secondaryButtonTitle="Fazer login"
    secondaryButtonLinkTo="/login"

>
    
</CallToAction>
</div>
</template>

<style scoped>
html, body, .app {
    background-color: var(--color-red-1);
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
