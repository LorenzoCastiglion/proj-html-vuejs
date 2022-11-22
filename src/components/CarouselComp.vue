<template >
    <div class="bkg">
        <div class="text-center">
            <p class=" text-uppercase">great words about maxcoach</p>
            <h3>Our <span>top learners'</span> verbatim</h3>
        </div>
        <div class="text-center m-5">
            <h1>carosello da fare</h1>
        </div>
        <div class=" text-center pb-5">
            <p>Start today for getting <span>Online Certification</span></p>
            <h3>You can be your own guidig start with our help!</h3>
            <button class="cta mb-4">Get started now</button>
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
    },
    components: {

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
</style>