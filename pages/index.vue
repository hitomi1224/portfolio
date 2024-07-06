<template>
<div class="container">
    <div class="container-main">
        <div class="container-main-works">
            <transition name="works" mode="out-in">
                <NuxtLink :to="currentImage.link" :key="currentImage.src">
                    <img :src="currentImage.src" :alt="currentImage.alt">
                </NuxtLink>
            </transition>
        </div>
        <div class="container-bottom">
            <p class="works-details">
                <NuxtLink :to="currentImage.link" class="works-details-link">more details...</NuxtLink>
            </p>
        </div>
    </div>
    <div class="container-right">
            <div class="page-title">HOME</div>
        </div>
</div>
</template>

<script>
export default {
    layout: 'container',
    data() {
        return {
        images: [
        { src: '/images/works1.png', alt: 'Work 1', link: '/works-detail1' },
        { src: '/images/works2.png', alt: 'Work 2', link: '/works-detail2' },
        { src: '/images/works3.png', alt: 'Work 3', link: '/works-detail3' },
        // 追加の画像とリンクをここに追加
        ],
            currentIndex: 0,
        };
    },
    computed: {
    currentImage() {
        return this.images[this.currentIndex];
        }
    },
    mounted() {
        this.startCarousel();
    },
    methods: {
    startCarousel() {
        setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 5000); // 5秒ごとに切り替え
        },
    }
}
</script>

<style scoped>
/* PC */
@media screen and (min-width: 1025px) {
.container{
    display: flex;
    width: 100%;
    height: 680px;
    background-color: #FFFFFF;
}

.container-main{
    width: 80%;
    height: 680px;
}

.container-main-works{
    width: 100%;
    height: 80%;
    overflow: hidden;
}

img{
    width: 100%;
    height: 580px;
    cursor: pointer;
    transition: opacity 0.8s ease 2s;
}

.container-bottom{
    width: 100%;
    height: 20%;
    border-top: 2px dashed #000000;
    font-weight: bold;
}

.container-bottom:hover{
    background: linear-gradient(45deg, #90d6d8,#a3bee4,#8ddbdb);
    color: #FFFFFF;
}

.works-details{
    padding: 3% 0 0 35%;
    margin-bottom: -20%;
    font-size: 36px;
}

.works-details-link{
    text-decoration: none;
    color: #000000
}

.works-details-link:hover{
    text-decoration: underline;
    color: #FFFFFF;
}

.container-right{
    width: 20%;
    height: 680px;
    border-left: 2px dashed #000000;
    background: linear-gradient(45deg, #90d6d8,#a3bee4,#8ddbdb);
}

.page-title{
    padding-left: 3%;
}

.works-enter-active{
    transition: opacity 0.8s;
}

.works-leave-active {
    transition: opacity 0.8s;
}
.works-enter, .works-leave-to /* .works-leave-active in <2.1.8 */ {
    opacity: 0;
}
}

/*モバイル（スマホ）*/
@media screen and (max-width: 530px) {
.container-right{
    display: none;
}

.container{
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
}

.container-main{
    width: 100%;
    height: 100vh;
}

.container-main-works{
    width: 100%;
    height: 80%;
    overflow: hidden;
}

img{
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: opacity 0.8s ease 2s;
}

.container-bottom{
    width: 100%;
    height: 20%;
    border-top: 2px dashed #000000;
}

.container-bottom:hover{
    background: linear-gradient(45deg, #90d6d8,#a3bee4,#8ddbdb);
    color: #FFFFFF !important;
}

.works-details{
    padding: 3% 0 0 32%;
    margin-bottom: -20%;
    font-size: 20px;
}

.works-details-link{
    text-decoration: none;
    color: #000000
}

.works-details-link:hover{
    text-decoration: underline;
    color: #FFFFFF !important;
}

.works-enter-active{
    transition: opacity 0.8s;
}

.works-leave-active {
    transition: opacity 0.8s;
}
.works-enter, .works-leave-to /* .works-leave-active in <2.1.8 */ {
    opacity: 0;
}
}

/*モバイル（ipad）*/
@media (min-width:530px) and (max-width:1024px) {
.container-right{
    display: none;
}

.container{
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
}

.container-main{
    width: 100%;
    height: 100vh;
}

.container-main-works{
    width: 100%;
    height: 80%;
    overflow: hidden;
}

img{
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: opacity 0.8s ease 2s;
}

.container-bottom{
    width: 100%;
    height: 20%;
    border-top: 2px dashed #000000;
}

.container-bottom:hover{
    background: linear-gradient(45deg, #90d6d8,#a3bee4,#8ddbdb);
    color: #FFFFFF !important;
}

.works-details{
    padding: 3% 0 0 40%;
    margin-bottom: -20%;
    font-size: 20px;
}

.works-details-link{
    text-decoration: none;
    color: #000000
}

.works-details-link:hover{
    text-decoration: underline;
    color: #FFFFFF !important;
}

.works-enter-active{
    transition: opacity 0.8s;
}

.works-leave-active {
    transition: opacity 0.8s;
}
.works-enter, .works-leave-to /* .works-leave-active in <2.1.8 */ {
    opacity: 0;
}
}
</style>