<template>
    <div class="tmpl">
        <div class="swipe">
        <!-- 1.0 轮播图选用的是 mint-ui中的 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imgs">
                <img :src="item.img" alt="">
            </mt-swipe-item>
           
        </mt-swipe>
    </div>

        <!-- 9宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-email">
                        <span class="mui-badge">5</span>
                    </span>
                    <div class="mui-media-body">Email</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div>
                </a>
            </li>
           
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgs:[]
            }
        },
        mounted(){
            this.getimgs();
        },
        methods: {
            getimgs(){
                this.$ajax.get('/site/app/getlunbo').then(res=>{
                   this.imgs= res.data.message;
                });
            }
        }
    }
</script>
<style>

    .tmpl .swipe{
        height: 300px;
        width: 100%;
        border: 1px solid red;
    }

    .tmpl .swipe img{
        height: 300px;
        width: 100%;        
    }
</style>