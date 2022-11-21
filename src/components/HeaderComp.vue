<template>
    <div class="container d-flex align-items-center align-content-center m-auto justify-content-between gap-3 py-3">
        <div class="logo-cntn">
            <img src="../../public/images/dark-logo.png" alt="">
        </div>

        <div class="d-flex gap-4">
            <ul v-for="i in store.NavItems" class=" list-unstyled m-0">
                <li><a class=" text-decoration-none" href="#">{{ i.text }} <i class="fa-solid fa-chevron-down"></i></a>
                </li>
            </ul>
        </div>

        <div>
            <input type="text" placeholder=" Search...">
        </div>


    </div>
</template>

<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,

        }
    }

}

</script>

<style lang="scss" scoped>
@use '../assets/styles/partial/variables' as *;

.logo-cntn {
    img {
        width: 200px;
    }

}

a {
    color: $black;

    i {
        font-size: 10px;
    }
}
</style>