<template>
    <div
        class="gross container d-flex align-items-center align-content-center m-auto justify-content-between gap-3 py-3">
        <div class="logo-cntn">
            <img src="../../public/images/dark-logo.png" alt="">
        </div>

        <div class="">
            <ul class="d-flex gap-4 list-unstyled m-0  uldprdwn">
                <li v-for="i in store.NavItems"><a
                        class=" drpdwn position-relative  text-decoration-none hover-underline-animation " href="#"
                        @click="i.hover = !i.hover">{{ i.text }} <i class="fa-solid fa-chevron-down"></i></a>

                    <Transition name="v">
                        <div class="drpdwn-menu position-absolute p-4 d-flex bg-white" v-if="i.hover"
                            @mouseleave="i.hover = !i.hover">
                            <ul class="list-unstyled row">
                                <li class="col-5  text-capitalize" v-for="(j, index) in i.link" :key="index"
                                    :class="{ 'hot': j.hot, 'new': j.new }">
                                    {{ j.title }}
                                </li>
                                <li>
                                    <div class="col">
                                        <img :src="`images/${i.dwnimg}.jpg`" alt="">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Transition>

                </li>
                <i class="fa-regular fa-circle-user fa-shake text-black align-self-center"></i>
            </ul>

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
        <a href="#"><i class="fa-solid fa-ruler-combined position-relative" @mouseover="popped = !popped"
                @mouseleave="popped = false">
                <Transition name="pop">
                    <span class=" p-1 rounded popup position-absolute" v-if="popped">Select Demo</span>
                </Transition>
            </i></a>

        <a href="#"><i class="fa-solid fa-life-ring position-relative"></i></a>
        <a href="#"><i class="fa-solid fa-book position-relative"></i></a>
        <a href="#"><i class="fa-solid fa-cart-shopping position-relative"></i></a>
    </div>
    <div class="chat position-absolute ">
        <a href="#"><i class="fa-solid fa-message"></i></a>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            popped: false,
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
    transition: 0.5s;

    &:hover {
        background-color: $turquoise;

        i {
            color: white;
        }

    }
}

.searchbar {
    background-color: $tortora;
    border: 1px solid $grey;
    border: 0;

    &:focus {

        box-shadow: 0px 0px 1px 1px $turquoise;
    }
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

.chat {
    text-align: center;
    border-radius: 50%;
    margin-right: 10px;
    width: 60px;
    height: 60px;
    background-color: $turquoise;
    transition: 0.5s ease;

    &:hover {
        background-color: $yellow;
        transform: translateY(5px);
    }

    right: 0;
    top: 90vh;

    i {
        font-size: 22px;
        line-height: 60px;
        color: $white;
        transform: rotate(-30deg);
    }


}

// dropdown menu

.uldprdwn {
    height: 100%;
}

.drpdwn {
    height: 100%;
}

.drpdwn:hover {

    transition: 0.25s ease;

    .fa-chevron-down {
        transform: rotate(180deg);
    }
}

.drpdwn-menu {
    width: auto;
    min-width: 300px;

    z-index: 10000;

    top: 46px;

    border-bottom: 2px solid $turquoise;

    ul {

        background-color: $white;


        li {
            margin-bottom: 5px;
            font-size: 12px;
            padding: 0 0.5rem;
            transition: 0.4s ease;
            cursor: pointer;

            &:hover {
                color: $turquoise;
            }

            &.hot::after {
                font-size: 10px;
                content: 'HOT';
                border-radius: 3px;
                padding: 3px;
                margin-left: 2px;
                background-color: $red;
                color: white;

            }

            &.new::after {
                content: 'NEW';
                font-size: 10px;
                border-radius: 3px;
                padding: 3px;
                margin-left: 2px;
                background-color: $turquoise;
                color: white;
            }
        }

    }


}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;

}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(30px);

}

// hover su item nav

.hover-underline-animation {
    display: inline-block;
    position: relative;

    cursor: pointer;

}

.hover-underline-animation:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $turquoise;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.popup {
    top: -10px;
    right: 50px;
    color: white;
    background-color: black;
    font-size: 14px;
}

.pop-enter-active,
.pop-leave-active {
    transition: all 0.5s ease;

}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: translateX(30px);

}
</style>