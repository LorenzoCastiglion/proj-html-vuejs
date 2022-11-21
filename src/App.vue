<template>
  <header class=" sticky-top position-sticky ">
    <HeaderComp />
  </header>
  <main>
    <JumboComp />
    <CourseComp class="p-5 corsi" />

  </main>
  <footer></footer>
</template>

<script>
import CartaComp from './components/CartaComp.vue';
import JumboComp from './components/JumboComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainCompo.vue';
import FooterComp from './components/FooterComp.vue';
import CourseComp from './components/CourseComp.vue';

export default {

  components: {
    HeaderComp,
    MainComp,
    FooterComp,
    JumboComp,
    CourseComp


  }
}

</script>

<style lang="scss" scoped>
@use './assets/styles/partial/variables' as *;



header {
  -webkit-box-shadow: 0px -2px 10px 7px $black;
  box-shadow: 0px -2px 10px 7px $black;
}

.corsi {
  background-color: $lightgrey;
}
</style>