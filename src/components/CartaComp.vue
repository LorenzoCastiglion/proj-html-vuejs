<template>
    <div class="d-flex info  align-items-center">

        <!-- immagine -->
        <div class=" p-5">
            <div class="img-container overflow-hidden">
                <img :src="`images/${card.img}.jpg`" alt="">
            </div>
        </div>


        <!-- testo -->
        <div class="d-flex  flex-column gap-3">
            <p>{{ card.price }}</p>
            <p>{{ card.info }}</p>
            <p>{{ card.lessons }}</p>
            <p>{{ card.students }}</p>
        </div>




    </div>
</template>

<script >



export default {
    name: 'CardComp',
    props: ['card'],
    data() {
        return {


        }
    },



}

</script>

<style lang="scss" scoped>

</style>