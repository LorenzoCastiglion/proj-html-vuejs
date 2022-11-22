<template>


    <div v-for="i in store.counter">

        <h2>{{ i.title }}</h2>

        <div class=" fw-bold">
            <vue3-autocounter ref='counter' :startAmount='0' :endAmount='i.num' :duration='2' prefix='' suffix=''
                separator='' decimalSeparator='.' :autoinit='true' @finished='alert(`Counting finished!`)' />
        </div>

        <p>{{ i.subtitle }}</p>
    </div>


</template>

<script >
import { store } from '../store';

import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';

export default defineComponent({
    name: 'Demo',
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
</style>