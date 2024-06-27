<template>
<div class="container">
    <div class="container-main">
        <img src="/image/" class="container-main-img">
        <div class="container-bottom">
            <p class="works-details">
                <NuxtLink to="/works" class="works-details-link">more details...</NuxtLink>
            </p>
        </div>
        <div class="container-right">
            <div class="page-title">HOME</div>
        </div>
    </div>

</div>
</template>

<script>
export default {
layout: 'container'
}
</script>

<style scoped>
.container{
    background-color: #FFFFFF;
}

.container-main{
    display: grid;
    grid-template-columns: repeat(10);
    grid-column: 1 / 8;
    grid-row: 1 / 8;
    height: 580px;
}

.container-main-img{
    grid-column: 1 / 8;
    grid-row: 1 / 8;
}

.container-bottom{
    grid-column: 1 / 8;
    grid-row: 8 / 10;
    border-top: 2px dashed #000000;

}

.container-bottom:hover{
    background: linear-gradient(45deg, #AFEEEE,#B0C4DE,#5F9EA0);
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
    grid-column: 8 / 10;
    grid-row: 1 / 10;
    height: 680px;
    border-left: 2px dashed #000000;
    background: linear-gradient(45deg, #AFEEEE,#5F9EA0,#B0C4DE);
}
</style>