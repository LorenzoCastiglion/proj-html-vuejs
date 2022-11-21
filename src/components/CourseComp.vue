<template>
    <div class="container text-center">
        <p class=" text-uppercase">stimulated to learn?</p>
        <h3>Featured Online Courses</h3>

        <CartaComp v-for="(i, index) in store.cards" :key="index" :card="i" />




    </div>


</template>

<script>
import { store } from '../store';
import CartaComp from './CartaComp.vue';
export default {
    data() {
        return {
            store,

        }
    },
    components: {
        CartaComp
    }

}

</script>

<style lang="scss" scoped>

</style>