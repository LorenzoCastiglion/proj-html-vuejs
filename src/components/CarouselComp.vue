<template >
    <div class="bkg">
        <div class="text-center">
            <p class=" text-uppercase">great words about maxcoach</p>
            <h3>Our <span>top learners'</span> verbatim</h3>
        </div>
    </div>
</template>

<script >
import { store } from '../store';
import CarouselCard from './CarouselCard.vue';

export default {
    data() {
        return {
            store

        }
    },
    components: {
        CarouselCard
    }
}

</script>

<style lang="scss" scoped>
@use '../assets/styles/partial/variables' as *;

.bkg {
    background-color: $tortora;
}
</style>