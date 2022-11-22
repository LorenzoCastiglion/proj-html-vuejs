<template>
    <div class="bkg">

        <div class="container d-flex justify-content-center">


        </div>

    </div>
</template>

<script >
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

.bkg {
    background-color: $tortora;
    height: 200px;
}
</style>