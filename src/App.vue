<template>
  <div>
    hello<i class="fa-solid fa-check-double"></i>
  </div>
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
</style>