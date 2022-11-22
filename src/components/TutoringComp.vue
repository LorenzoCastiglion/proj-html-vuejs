<template>
    <div class="container">

        <TutoringCardComp v-for=" (item, index) in store.cloud" :key="index" :tutor="item" />
        <div class="d-flex info  align-conten-center align-items-center">

            <!-- immagine -->
            <div class="">
                <div class="col-4  rounded-1 p-5">
                    <img src="/images/home-2-popup-video-poster.jpg" alt="">
                </div>
            </div>


            <!-- testo -->
            <div class="d-flex flex-column col-6 gap-3 ms-3">
                <p class="text-uppercase text-secondary">get started <span
                        class=" text-uppercase fw-bold text-black">effortlessly</span></p>
                <h2 class=" fw-bold">Enjoy Our <span>Companionship</span></h2>
                <p>Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek for some
                    hidden hints of early-bird rewards as well.</p>
                <p class="cta">Download the free guidebook <i class="fa-solid fa-arrow-right"></i></p>

            </div>




        </div>
    </div>
</template>

<script>
import { store } from '../store';
import TutoringCardComp from './TutoringCardComp.vue';
export default {
    data() {
        return {
            store
        }
    },

    components: {
        TutoringCardComp

    }
}

</script>


<style lang="scss" scoped>
@use '../assets/styles/partial/variables' as *;

.img-container {
    width: 300px;

    img {
        height: 200px;
    }
}

h2 {
    span {
        color: $turquoise;
        font-weight: normal;
    }
}

.cta {
    color: $turquoise;
    font-weight: bold;
    border-bottom: 1px solid $grey;
}
</style>