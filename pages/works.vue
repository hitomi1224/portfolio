<template>
<div class="container">
    <div class="works">
        <div class="works-row">
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
        </div>

        <div class="works-row">
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
        </div>

        <div class="works-row">
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
        </div>

        <div class="works-row">
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <p class="works-image">作品の画像</p>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">アプリ・サイト名・URL</p>
                </div>
            </div>
        </div>
    </div>
<PageTitleWorks />
</div>
</template>

<script>
export default {
layout: 'container'
}
</script>

<style scoped>
.container{
    background: linear-gradient(45deg, #AFEEEE,#5F9EA0,#B0C4DE);
    color: #FFFFFF;
    height: 100%;
}

.page-title{
    position: absolute;
    top: -8%;
    left: 65%;
    width: 10%;
    height: 35%;
    transform: rotate(90deg);
    font-size: 30px;
}

.works{
    width: 65%;
    height: 100%;
}

.works-row{
    display: flex;
    margin: 10% 0 10% 10%;
    width: 100%;
    height: 30%;
}

.works-item{
    margin-left: 8%;
    width: 33%;
    height: 100%;
    border: 1px solid #f6f9faca;
    border-radius: 3%;
    background-color: #f6f9faca;
    color: #000000;
}

.works-item-upper{
    padding: 5% 0;
    width: 100%;
    height: 70%;
    border-bottom: 1px dashed #000000;
}

.works-image{
    padding: 10% 0 5% 28%;
    width: 100%;
    height: 100%;
}

.works-item-bottom{
    padding: 0 0 0 5%;
    width: 100%;
    height: 30%;
}

.works-name{
    padding: 0 0 0 -3%;
}
</style>