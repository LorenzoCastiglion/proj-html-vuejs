<template>
    <div>
        <JumboComp />
        <CourseComp class="p-5 corsi" />
        <TutoringComp />
        <CarouselComp />

    </div>
</template>

<script>
import { store } from '../store';
import JumboComp from './JumboComp.vue';
import CourseComp from './CourseComp.vue';
import TutoringComp from './TutoringComp.vue';
import CarouselComp from './CarouselComp.vue';
export default {
    daat() {
        return {
            store,

        }
    },

    components: {
        JumboComp,
        CourseComp,
        TutoringComp,
        CarouselComp

    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partial/variables' as *;



.corsi {
    background-color: $lightgrey;
}
</style>