<template>
<div class="container">
    <div class="container-upper">
        <p class="profile-name">佐藤　仁美 | HITOMI SATO</p>
        <p class="profile-other">1998年生まれ　愛知県出身　法学部卒</p>
        <PageTitleProfile />
    </div>
    <div class="container-bottom">
        <p class="profile-message">目を惹くデザインを取り入れたフロントエンジニアを目指しています。<br>
        こつこつと制作したり問題解決したりすることが得意で、新しい物好きです。<br>
        今後の目標は、社会のニーズに合わせられるように常にアンテナを張って制作していくことです。</p>

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
/* PC */
@media screen and (min-width: 1025px) {
.container{
    background: linear-gradient(45deg, #90d6d8,#a3bee4,#8ddbdb);
    padding: 100px 0 0 170px;
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
}


/*モバイル（スマホ）*/
@media screen and (max-width: 530px) {
.container{
    background: linear-gradient(45deg, #90d6d8,#a3bee4,#8ddbdb);
    width: 100%;
    height: 100vh;
}

.page-title{
    position: absolute;
    top: -5%;
    left: 45%;
    width: 10%;
    height: 35%;
    transform: rotate(90deg);
    font-size: 20px;
}

.container-upper{
    padding: 5% 3% 5% 5%;
    width: 90%;
    color: #FFFFFF;
    font-size: 14px;
}

.container-bottom{
    padding: 10% 5%;
    width: 90%;
    color: #FFFFFF;
    font-size: 14px;
}
}

/*モバイル（ipad）*/
@media (min-width:530px) and (max-width:1024px) {
.container{
    background: linear-gradient(45deg, #90d6d8,#a3bee4,#8ddbdb);
    width: 100%;
    height: 100vh;
}

.page-title{
    position: absolute;
    top: -5%;
    left: 65%;
    width: 10%;
    height: 35%;
    transform: rotate(90deg);
    font-size: 20px;
}

.container-upper{
    padding: 5% 3% 5% 5%;
    width: 90%;
    color: #FFFFFF;
    font-size: 14px;
}

.container-bottom{
    padding: 0 5%;
    width: 90%;
    color: #FFFFFF;
    font-size: 14px;
}
}
</style>