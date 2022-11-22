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

h3 {
    font-size: 20px;
    margin-top: 10px;
}

p {
    color: $grey;
    font-size: 14px;
}

span {
    font-weight: bold;
    font-size: 12px;
    color: rgb(88, 86, 86);
}
</style>