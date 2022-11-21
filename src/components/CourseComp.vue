<template>
    <div>
        <div class="container ">
            <p class=" text-uppercase text-center">stimulated to learn?</p>
            <h3 class="text-center">Featured Online Courses</h3>
            <div class=" mt-5 d-flex flex-wrap justify-content-center gap-5 pt-4">
                <CartaComp class="col-5" v-for="(i, index) in store.cards" :key="index" :card="i" />
            </div>
            <div class=" m-auto text-center mt-5">
                <button class=" p-3 px-5 text-white">View all courses <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>


        </div>
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
@use '../assets/styles/partial/variables' as *;

button {
    font-size: 12px;
    background-color: $turquoise;
    border: 0;
    border-radius: 8px;
}
</style>