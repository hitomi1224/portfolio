<template>
    <div>
    <transition name="page" mode="out-in">
        <Nuxt />
    </transition>
    </div>
</template>

<script>
export default {
    layout: 'container',
        data() {
        return {
        animateShine: false
        }
    },
    watch: {
    '$route'() {
        this.triggerShineAnimation();
        }
    },
    methods: {
    triggerShineAnimation() {
        this.animateShine = true;
        setTimeout(() => {
        this.animateShine = false;
        }, 1000);  // アニメーションの継続時間と同じに設定
        }
    }
}
</script>

<style>
.page-enter-active, .page-leave-active {
    transition: opacity 0.5s ease;
}
.page-enter, .page-leave-to /* .page-leave-active in <2.1.8 */ {
    opacity: 0;
}


</style>