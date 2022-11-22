<template>
    <div
        class="gross container d-flex align-items-center align-content-center m-auto justify-content-between gap-3 py-3">
        <div class="logo-cntn">
            <img src="../../public/images/dark-logo.png" alt="">
        </div>

        <div class="d-flex gap-4">
            <ul v-for="i in store.NavItems" class=" list-unstyled m-0">
                <li><a class=" text-decoration-none" href="#">{{ i.text }} <i class="fa-solid fa-chevron-down"></i></a>
                </li>
            </ul>
            <i class="fa-regular fa-circle-user fa-shake text-black align-self-center"></i>
        </div>

        <div>

            <div class="input-group ">
                <input type="text" class="form-control  searchbar" placeholder="Search..."
                    aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn button" type="button" id="button-addon2"><i
                        class="fa-solid fa-magnifying-glass me-2"></i></button>
            </div>

        </div>

    </div>
    <div class="side-bar position-absolute d-flex flex-column p-2 pe-3 text-center gap-2">
        <a href="#"><i class="fa-solid fa-ruler-combined"></i></a>
        <a href="#"><i class="fa-solid fa-life-ring"></i></a>
        <a href="#"><i class="fa-solid fa-book"></i></a>
        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
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

.gross {
    backdrop-filter: blur(40px);
}

.logo-cntn {
    img {
        width: 200px;
    }

}

a {
    color: $black;
    transition: 0.5s;


    &:hover {
        color: $turquoise;

    }

    i {
        font-size: 10px;

    }
}

.button {
    background-color: $tortora;
    border: 1px solid $grey;
    border: 0;
}

.searchbar {
    background-color: $tortora;
    border: 1px solid $grey;
    border: 0;
}

.fa-magnifying-glass {
    color: $turquoise;
}

.side-bar {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    -webkit-box-shadow: -3px 0px 13px 5px rgba(0, 0, 0, 0.35);
    box-shadow: -3px 0px 13px 5px rgba(0, 0, 0, 0.35);
    top: 200px;
    right: 0;

    a i {
        font-size: 16px;
    }
}
</style>