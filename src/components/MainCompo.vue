<template>
    <div>
        <JumboComp />
        <CourseComp class="p-5 corsi" />
        <TutoringComp />

    </div>
</template>

<script>
import { store } from '../store';
import JumboComp from './JumboComp.vue';
import CourseComp from './CourseComp.vue';
import TutoringComp from './TutoringComp.vue';
export default {
    daat() {
        return {
            store,

        }
    },

    components: {
        JumboComp,
        CourseComp,
        TutoringComp

    }

}
</script>

<style lang="scss" scoped>

</style>