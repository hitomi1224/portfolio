<template>
    <div class="container">
        <div class="works-detail">
        <p>works1</p>
        </div>
    </div>
</template>

<script>
export default {
    layout:'container'
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

.works-detail{
    padding-left: 1%;
}
}

/*モバイル（スマホ）*/
@media screen and (max-width: 530px) {
.container{
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
}

.works-detail{
    padding-left: 1%;
}
}

/*モバイル（ipad）*/
@media (min-width:530px) and (max-width:1024px) {
.container{
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
}

.works-detail{
    padding-left: 1%;
}
}
</style>