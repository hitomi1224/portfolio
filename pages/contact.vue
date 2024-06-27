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
                <validation-provider v-slot="{ errors }" rules="required|max:120">
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
    methods:{
        submit() {
            this.$router.push('/submit-success')
        }
    }
}
</script>

<style scoped>
.container{
    background: linear-gradient(45deg, #AFEEEE,#B0C4DE,#5F9EA0);
    color: #FFFFFF;
    height: 950px;
}

.contact-title{
    text-align: center;
    padding-right: 10%;
}

.contact-form{
    width: 80%;
    height: 800px;
}

.contact-table{
    padding-left: 20%;
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
    align-items: center;
    font-size: 16px;
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

}
</style>