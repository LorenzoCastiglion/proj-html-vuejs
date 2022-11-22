<template>
    <div>
        <img :src="`/images/illustration-${tutor.img}.png`" alt="">
        <h3>{{ tutor.title }}</h3>
        <p>{{ tutor.content }}</p>
        <span>{{ tutor.cta }} <i class="fa-solid fa-arrow-right"></i></span>

    </div>
</template>

<script>
import { store } from '../store';



export default {
    props: ['tutor'],
    data() {
        return {
            store,
        }
    }
}

</script>

<style lang="scss" scoped>
@use '../assets/styles/partial/variables' as *;

p {
    color: $grey;
}

span {
    font-weight: bold;
    font-size: 14px;
    color: rgb(88, 86, 86);
}
</style>