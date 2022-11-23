<template >
    <div class="bkg ">
        <div class="container">

            <div class="text-center">
                <p class=" text-uppercase">great words about maxcoach</p>
                <h3>Our <span>top learners'</span> verbatim</h3>
            </div>


            <Carousel :items-to-show="3" :wrap-around="true">
                <Slide v-for="slide in store.carouselcard" :key="slide">

                    <div class="mx-3 bg-white p-5 ">
                        <h4>{{ slide.title }}</h4>
                        <p>{{ slide.content }}</p>
                        <div class="d-flex gap-4 align-items-center">
                            <div class=" overflow-hidden img-cont">
                                <img :src="`../../public/images/testimonial-avata-${slide.pic}.jpg`" alt="">
                            </div>
                            <p class="mb-0">{{ slide.name }} <br> <span>{{ slide.job }}</span></p>
                        </div>
                    </div>


                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>



            <!-- <div class="row flex-wrap" v-for="item in store.carouselcard">
                        <div class=" col-4 bg-white p-5 ">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.content }}</p>
                            <div class="d-flex gap-4 align-items-center">
                                <div class=" overflow-hidden img-cont">
                                    <img :src="`../../public/images/testimonial-avata-${item.pic}.jpg`" alt="">
                                </div>
                                <p class="mb-0">{{ item.name }} <br> <span>{{ item.job }}</span></p>
                            </div>
                        </div>
                    </div> -->


            <div>
            </div>
            <div class=" text-center pb-5">
                <p>Start today for getting <span>Online Certification</span></p>
                <h3>You can be your own guidig start with our help!</h3>
                <button class="cta mb-4">Get started now</button>
            </div>
        </div>
    </div>
</template>

<script >
import { store } from '../store';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


export default {
    data() {
        return {
            store

        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    }
}

</script>

<style lang="scss" scoped>
@use '../assets/styles/partial/variables' as *;

span {
    color: $turquoise;
}

.cta {
    border: 0;
    background-color: $turquoise;
    color: $white;
    padding: 10px 30px;
    border-radius: 8px;
}

.bkg {
    padding-top: 50px;
    background-color: $tortora;
}

.img-cont {
    width: 60px;
    height: 60px;
    border-radius: 50%;

    img {
        height: 100%;

    }
}

.scroller {

    overflow: auto;
    display: flex;
}

.scrollbar {
    width: 4000px;
}
</style>