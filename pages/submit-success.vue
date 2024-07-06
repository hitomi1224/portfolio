<template>
    <div class="container">
    <h1>送信完了</h1>
    <p>お問い合わせありがとうございました。<br>送信が完了しました。</p>
    <button @click="goBack">戻る</button>
    </div>
</template>

<script>
export default {
    layout:'container',
    name: 'SubmitSuccess',
    methods: {
    goBack() {
        this.$router.push('/');
        }
    }
}
</script>

<style scoped>
/* PC */
@media screen and (min-width: 1025px) {
.container{
    background: linear-gradient(45deg, #AFEEEE,#B0C4DE,#5F9EA0);
    color: #FFFFFF;
    height: 680px;
}

h1{
    margin-top: 10%;
    text-align: center;
}

p{
    text-align: center;
    font-weight: bold;
}

button{
    margin-left: 47%;
    margin-top: 5%;
    padding: 5px;
    width: 5%;
    background-color: #FFFFFF;
    border-color: #FFFFFF;
    color: #5F9EA0;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
}
}

/*モバイル（スマホ）*/
@media screen and (max-width: 530px) {
.container{
    background: linear-gradient(45deg, #AFEEEE,#B0C4DE,#5F9EA0);
    color: #FFFFFF;
    height: 100vh;
}

h1{
    padding-top: 10%;
    text-align: center;
    font-size: 24px;
}

p{
    text-align: center;
    font-weight: bold;
}

button{
    display: block;
    margin-left: 42%;
    margin-top: 10%;
    padding: 5px;
    width: 15%;
    background-color: #FFFFFF;
    border-color: #FFFFFF;
    color: #5F9EA0;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
}
}

/*モバイル（ipad）*/
@media (min-width:530px) and (max-width:1024px) {
.container{
    background: linear-gradient(45deg, #AFEEEE,#B0C4DE,#5F9EA0);
    color: #FFFFFF;
    height: 100vh;
}

h1{
    padding-top: 10%;
    text-align: center;
    font-size: 24px;
}

p{
    text-align: center;
    font-weight: bold;
}

button{
    display: block;
    margin-left: 42%;
    margin-top: 10%;
    padding: 5px;
    width: 15%;
    background-color: #FFFFFF;
    border-color: #FFFFFF;
    color: #5F9EA0;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
}
}
</style>