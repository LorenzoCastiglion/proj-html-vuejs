<template>
    <div @click="scrollToTop()" :class="['back-to-top-btn', {'go-top': isTop}]">
        <i class="fa-solid fa-arrow-up"></i>
    </div>
</template>

<script>
export default {

    data() {
        return {
            isTop: false
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted() {
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 100) {
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    }
}
</script>


<style lang="scss" scoped>
@use '../assets/styles/partial/variables' as *;

.back-to-top-btn {
    position: fixed;
    cursor: pointer;
    bottom: -100px;
    right: 65px;
    color: #ffffff;
    background-color: $turquoise;
    z-index: 4;
    width: 45px;
    text-align: center;
    height: 45px;
    opacity: 0;
    visibility: hidden;
    border-radius: 50%;
    font-size: 22px;
    transition: .6s;
    overflow: hidden;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);

    i {
        position: absolute;
        right: 0;
        left: 0;
        top: 45%;
        transform: translateY(-45%);
        text-align: center;
        font-size: 30px;
        margin-left: auto;
        margin-right: auto;
    }

    &.go-top {
        opacity: 1;
        visibility: visible;
        bottom: 5px;
    }

    &:hover {
        background-color: $yellow;
        color: #ffffff;
        transition: .6s;
        box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
        transform: translateY(-5px);
    }
}
</style>

