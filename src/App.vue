<template>
  <header class=" sticky-top position-sticky ">
    <HeaderComp />
  </header>
  <main>
    <MainComp />

  </main>
  <footer>
    <FooterComp />
  </footer>
  <div>
    <ArrowTop />
  </div>
</template>

<script>

import ArrowTop from './components/ArrowTop.vue';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';


export default {

  components: {
    HeaderComp,
    MainComp,
    FooterComp,
    ArrowTop




  }
}

</script>

<style lang="scss" scoped>
@use './assets/styles/partial/variables' as *;



header {
  -webkit-box-shadow: 0px -2px 10px 7px $black;
  box-shadow: 0px -2px 10px 7px $black;
}
</style>