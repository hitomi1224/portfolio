<template>
    <div class="container">
    <h2 class="contact-title">お問い合わせフォーム</h2>
    <validation-observer ref="obs" v-slot="ObserverProps">
        <div class="contact-form">
        <table class="contact-table">
            <tr>
            <th>御社名<p>*</p></th>
            <td>
                <validation-provider v-slot="{ errors }" rules="required">
                <input v-model="companyName" id="companyName" type="text" name="御社名">
                <div class="error">{{ errors[0] }}</div>
                </validation-provider>
            </td>
            </tr>
            <tr>
            <th>お名前<p>*</p></th>
            <td>
                <validation-provider v-slot="{ errors }" rules="required">
                <input v-model="name" id="name" type="text" name="お名前">
                <div class="error">{{ errors[0] }}</div>
                </validation-provider>
            </td>
            </tr>
            <tr>
            <th>ご住所<p>*</p></th>
            <td>
                <validation-provider v-slot="{ errors }" rules="required">
                <input v-model="address" id="address" type="text" name="ご住所">
                <div class="error">{{ errors[0] }}</div>
                </validation-provider>
            </td>
            </tr>
            <tr>
            <th>電話番号<p>*</p></th>
            <td>
                <validation-provider v-slot="{ errors }" rules="required">
                <input v-model="phone" id="phone" type="text" name="電話番号">
                <div class="error">{{ errors[0] }}</div>
                </validation-provider>
            </td>
            </tr>
            <tr>
            <th>ウェブサイト<p>*</p></th>
            <td>
                <validation-provider v-slot="{ errors }" rules="required">
                <input v-model="website" id="website" type="text" name="ウェブサイト">
                <div class="error">{{ errors[0] }}</div>
                </validation-provider>
            </td>
            </tr>
            <tr>
            <th>メールアドレス<p>*</p></th>
            <td>
                <validation-provider v-slot="{ errors }" rules="required|email">
                <input v-model="email" id="email" type="text" name="メールアドレス">
                <div class="error">{{ errors[0] }}</div>
                </validation-provider>
            </td>
            </tr>
            <tr>
            <th>ご希望納期<p>*</p></th>
            <td>
                <validation-provider v-slot="{ errors }" rules="required">
                <input v-model="deadline" id="deadline" type="text" name="ご希望納期">
                <div class="error">{{ errors[0] }}</div>
                </validation-provider>
            </td>
            </tr>
            <tr>
            <th>お問い合わせ内容<p>*</p></th>
            <td>
                <validation-provider v-slot="{ errors }" rules="required|max:240">
                <textarea v-model="content" id="content" type="text" name="お問い合わせ内容"></textarea>
                <div class="error">{{ errors[0] }}</div>
                </validation-provider>
            </td>
            </tr>
        </table>
        <button type="button" @click=submit :disabled="ObserverProps.invalid || !ObserverProps.validated">送信</button>
        </div>
    </validation-observer>
    <PageTitleContact />
    </div>
</template>

<script>
import { db, firebase } from '@/plugins/firebase';

export default {
    layout: 'container',
    data() {
        return {
        companyName: '',
        name: '',
        address: '',
        phone: '',
        website: '',
        email: '',
        deadline: '',
        content: ''
        }
    },
    methods: {
    async submit() {
        try {
        // フォームデータを作成
        const formData = {
            companyName: this.companyName,
            name: this.name,
            address: this.address,
            phone: this.phone,
            website: this.website,
            email: this.email,
            deadline: this.deadline,
            content: this.content,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
            };

        // データをFirestoreに保存
            await db.collection('inquiries').add(formData);

        // 送信完了ページにリダイレクト
            this.$router.push('/submit-success');
        } catch (error) {
            console.error('送信中にエラーが発生しました:', error);
        }
        }
    }
}
</script>

<style scoped>
/* PC */
@media screen and (min-width: 1025px) {
.container{
    background: linear-gradient(45deg, #90d6d8,#a3bee4,#8ddbdb);
    color: #FFFFFF;
    height: 950px;
}

.page-title{
    position: absolute;
    top: -8%;
    left: 67%;
    width: 10%;
    height: 35%;
    transform: rotate(90deg);
    font-size: 30px;
}

.contact-title{
    text-align: center;
    padding-right: 10%;
    font-weight: 500;
}

.contact-form{
    padding-bottom: 5%;
    margin-left: 7%;
    width: 75%;
    height: 800px;
}

.contact-table{
    padding-left: 15%;
    width: 100%;
    height: 800px;
    text-align: center;
}

tr{
    width: 70%;
    height: 60px;
    align-items: center;
}

th{
    display: flex;
    padding-left: 30%;
    padding-top: 8%;
    width: 100%;
    align-items: center;
    font-size: 17px;
    font-weight: 500;
}

p{
    color: #DC143C;
}

td{
    width: 70%;
    height: 60px;
}

input{
    width: 40%;
    height: 25%;
}

textarea{
    width: 40%;
    height: 55%;
}

.error {
    color: #DC143C;
    font-size: 14px;
}

button{
    margin-left: 45%;
    width: 10%;
    height: 5%;
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
    padding-top: 5%;
    background: linear-gradient(45deg, #90d6d8,#a3bee4,#8ddbdb);
    color: #FFFFFF;
    height: 100%;
}

.page-title{
    position: absolute;
    top: -4%;
    left: 45%;
    width: 10%;
    height: 35%;
    transform: rotate(90deg);
    font-size: 20px;
}

.contact-title{
    padding-right: 5%;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
}

.contact-form{
    padding-bottom: 5%;
    margin-left: 5%;
    width: 75%;
    height: 100%;
}

.contact-table{
    padding-left: 10%;
    width: 100%;
    height: 100%;
    text-align: center;
}

tr{
    display: block;
    width: 100%;
    height: 70px;
    align-items: center;
}

th{
    display: flex;
    margin-bottom: -12%;
    padding: 3% 0 3% 5%;
    width: 100%;
    align-items: center;
    font-size: 14px;
}

p{
    color: #DC143C;
}

td{
    width: 70%;
    height: 60px;
}

input{
    width: 70%;
    height: 25%;
}

textarea{
    margin: 10% 0 0 10%;
    width: 78%;
    height: 70%;
}

.error {
    color: #DC143C;
    font-size: 14px;
}

button{
    margin: 25% 0 20% 45%;
    width: 20%;
    height: 5%;
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
    padding-top: 5%;
    background: linear-gradient(45deg, #90d6d8,#a3bee4,#8ddbdb);
    color: #FFFFFF;
    height: 1300px;
}

.page-title{
    position: absolute;
    top: -4%;
    left: 65%;
    width: 40px;
    height: 35%;
    transform: rotate(90deg);
    font-size: 20px;
}

.contact-title{
    padding-right: 5%;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
}

.contact-form{
    padding-bottom: 5%;
    margin-left: 7%;
    width: 75%;
    height: 1024px;
}

.contact-table{
    padding: 0 8% 0 20%;
    width: 100%;
    height: 1000px;
    text-align: center;
}

tr{
    width: 70%;
    height: 60px;
    align-items: center;
}

th{
    display: flex;
    padding-left: 5%;
    width: 150px;
    align-items: center;
    font-size: 17px;
    font-weight: 500;
}

p{
    color: #DC143C;
}

td{
    width: 210px;
    height: 60px;
    vertical-align: baseline;
}

input{
    width: 100%;
    height: 25px;
}

textarea{
    width: 100%;
    height: 65%;
}

.error {
    color: #DC143C;
    font-size: 14px;
}

button{
    margin: 10% 0 0 50%;
    width: 15%;
    height: 5%;
    background-color: #FFFFFF;
    border-color: #FFFFFF;
    color: #5F9EA0;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
}
}
</style>