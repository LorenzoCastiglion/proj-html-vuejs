<template>


    <div class="container d-flex justify-content-center  ">
        <div class="col-3 giorgio justify-content-center d-flex flex-column text-center px-5"
            v-for="i in store.counter">

            <h3>{{ i.title }}</h3>

            <div class="numero">
                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='i.num' :duration='2' prefix='' suffix=''
                    separator='' decimalSeparator='.' :autoinit='true' />
            </div>

            <p class=" text-secondary text-uppercase">{{ i.subtitle }}</p>
        </div>
    </div>


</template>

<script >
import { store } from '../store';
import Vue3autocounter from 'vue3-autocounter';

export default ({

    data() {
        return {
            store
        }
    },
    components: {
        'vue3-autocounter': Vue3autocounter
    }
});

</script>

<style lang="scss" scoped>
@use '../assets/styles/partial/variables' as *;

.giorgio {
    border: 2px solid $tortora;
    height: 400px;

}

.numero {
    color: $turquoise;
    font-weight: bold;
    font-size: 50px;
    margin: 20px 0;

}
</style>