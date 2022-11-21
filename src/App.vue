<template>
  <header class=" sticky-top position-sticky ">
    <HeaderComp />
  </header>
  <main></main>
  <footer></footer>
</template>

<script>
import JumboComp from './components/JumboComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainCompo.vue';
import FooterComp from './components/FooterComp.vue';

export default {

  components: {
    HeaderComp,
    MainComp,
    FooterComp,
    JumboComp

  }
}

</script>

<style lang="scss" scoped>
@use './assets/styles/partial/variables' as *;

div {
  color: $red;
}

header {
  -webkit-box-shadow: 0px -2px 10px 7px $black;
  box-shadow: 0px -2px 10px 7px $black;
}
</style>