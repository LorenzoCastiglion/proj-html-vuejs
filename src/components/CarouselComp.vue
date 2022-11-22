<template >
    <div class="bkg">
        <div class="text-center">
            <p class=" text-uppercase">great words about maxcoach</p>
            <h3>Our <span>top learners'</span> verbatim</h3>
        </div>
        <div class=" text-center">
            <p>Start today for getting <span>Online Certification</span></p>
            <h3>You can be your own guidig start with our help!</h3>
            <button class="cta">Get started now</button>
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

span {
    color: $turquoise;
}

.bkg {
    padding-top: 50px;
    background-color: $tortora;
}
</style>