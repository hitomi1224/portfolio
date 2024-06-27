<template>
<div class="container">
    <div class="container-upper">
        <p class="profile-name">佐藤　仁美 | HITOMI SATO</p>
        <p class="profile-other">1998年生まれ　愛知県出身　法学部卒</p>
        <PageTitleProfile />
    </div>
    <div class="container-bottom">
        <p class="profile-message">「楽しく学び、吸収して、昇華させる」を大切に<br>未経験からエンジニアになるため毎日奮闘中・・・</p>

        <p class="profile-skill">保有スキル　HTML , CSS , JavaScript , Nuxt.js , Firebase , Github</p>
    </div>
</div>
</template>

<script>
export default {
    layout: 'container',
}
</script>

<style scoped>
.container{
    background: linear-gradient(45deg, #AFEEEE,#5F9EA0,#B0C4DE);
    padding: 150px 0 0 170px;
}

.page-title{
    position: absolute;
    top: -5%;
    left: 68%;
    width: 10%;
    height: 35%;
    transform: rotate(90deg);
    font-size: 30px;
}

.container-upper{
    margin-bottom: 35px;
    padding-bottom: 50px;
    padding-left: 20px;
    width: 60%;
    border-bottom: 1px solid #FFFFFF;
    color: #FFFFFF;
    font-size: 18px;
}

.container-bottom{
    margin-top: 50px;
    padding-top: 25px;
    padding-left: 20px;
    width: 60%;
    color: #FFFFFF;
    font-size: 18px;
}


</style>