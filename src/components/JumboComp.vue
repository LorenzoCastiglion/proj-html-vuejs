<template>
    <div class="container mb">
        <div class="d-flex info align-content-center align-items-center justify-content-between">
            <!-- testo -->
            <div class="d-flex col-6 flex-column gap-3">
                <h1>Distant learning for further expansion</h1>
                <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy
                    the process.</p>

                <button class="col-4 py-2 text-white"><i class="fa-solid fa-download fa-shake"></i> Download free
                    guide</button>


                <p>Have a question? <span class=" text-decoration-underline">Get Free Sample <i
                            class="fa-solid fa-arrow-right "></i> </span></p>
            </div>

            <!-- immagine -->
            <div class="p-5">
                <div class="img-container overflow-hidden">
                    <img src="images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="">
                </div>
            </div>


        </div>
        <!-- brands -->
        <div class="d-flex justify-content-around m-auto">
            <div class="" v-for="i in store.brands">
                <img :src="`/images/client-logo-${i}.png`" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {

    data() {
        return {
            store
        }
    }


}

</script>

<style lang="scss" scoped>
@use '../assets/styles/partial/variables' as *;

p {
    color: $grey;
    font-size: 20px;
}

button {
    background-color: $turquoise;
    border: 0;
    border-radius: 8px;
    font-weight: bold;
    font-size: 12px;
}

span {
    color: $turquoise;
}

.info {
    height: 600px;
}

.img-container {

    height: 400px;
    border-radius: 50%;

    img {
        object-fit: fill;
        object-position: center;
        height: 400px;
    }
}
</style>