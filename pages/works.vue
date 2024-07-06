<template>
<div class="container">
    <div class="works">
        <div class="works-row">
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works1.png"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works1</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works2.png"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works2</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works3.png"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works3</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
        </div>

        <div class="works-row">
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works4.jpg"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works4</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works5.jpg"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works5</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works1.png"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works6</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
        </div>

        <div class="works-row">
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works2.png"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works7</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works3.png"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works8</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works4.jpg"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works9</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
        </div>

        <div class="works-row">
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works5.jpg"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works10</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works1.png"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works11</p>
                    <a href="https://" class="works-link">https://</a>
                </div>
            </div>
            <div class="works-item">
                <div class="works-item-upper">
                    <img src="/images/works2.png"></img>
                </div>
                <div class="works-item-bottom">
                    <p class="works-name">works12</p>
                    <a href="https://" class="works-link">https://</a>
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
/* PC */
@media screen and (min-width: 1025px) {
.container{
    background: linear-gradient(45deg, #85c4c6,#9eb7d9,#8ddbdb);
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
    height: 180px;
    border: 1px solid #f6f9faca;
    border-radius: 3%;
    background-color: #f6f9faca;
    color: #000000;
}

.works-item-upper{
    width: 100%;
    height: 70%;
    border-bottom: 1px dashed #000000;
}

img{
    width: 100%;
    height: 100%;
    border-radius: 3% 3% 0 0;
}

.works-item-bottom{
    width: 100%;
    height: 30%;
}

.works-name{
    margin-bottom: -3%;
    text-align: center;
}

.works-link{
    margin-top: -3%;
}
}

/*モバイル（スマホ）*/
@media screen and (max-width: 530px) {
.container{
    padding-top: 5%;
    background: linear-gradient(45deg, #85c4c6,#9eb7d9,#8ddbdb);
    color: #FFFFFF;
    width: 100%;
    height: 100%;
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

.works{
    padding: 5% 0 10% 15%;
    width: 100%;
    height: 100%;
}

.works-row{
    display: block;
    margin: 5% 0 4% 0;
    width: 100%;
    height: 30%;
}

.works-item{
    margin: 5% 3%;
    width: 45%;
    height: 160px;
    border: 1px solid #f6f9faca;
    border-radius: 3%;
    background-color: #f6f9faca;
    color: #000000;
}

.works-item-upper{
    width: 100%;
    height: 70%;
    border-bottom: 1px dashed #000000;
}

img{
    width: 100%;
    height: 100%;
    border-radius: 3% 3% 0 0;
}

.works-item-bottom{
    width: 100%;
    height: 30%;
}

.works-name{
    margin-bottom: -3%;
    text-align: center;
}

.works-link{
    margin-top: -3%;
    font-size: 12px;
}
}


/*モバイル（ipad）*/
@media (min-width:530px) and (max-width:1024px) {
.container{
    padding-top: 5%;
    background: linear-gradient(45deg, #85c4c6,#9eb7d9,#8ddbdb);
    color: #FFFFFF;
    width: 100%;
    height: 100%;
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

.works{
    padding: 0 0 10% 3%;
    width: 100%;
    height: 100%;
}

.works-row{
    display: flex;
    margin: 5% 0 4% 0;
    width: 80%;
    height: 30%;
}

.works-item{
    margin: 5% 3%;
    width: 30%;
    height: 160px;
    border: 1px solid #f6f9faca;
    border-radius: 3%;
    background-color: #f6f9faca;
    color: #000000;
}

.works-item-upper{
    width: 100%;
    height: 70%;
    border-bottom: 1px dashed #000000;
}

img{
    width: 100%;
    height: 100%;
    border-radius: 3% 3% 0 0;
}

.works-item-bottom{
    width: 100%;
    height: 30%;
}

.works-name{
    margin-bottom: -3%;
    text-align: center;
}

.works-link{
    margin-top: -3%;
    font-size: 12px;
}
}
</style>