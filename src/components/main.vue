<template>
    <div>
        <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in lunboList" :key="item.url">
            <img :src="item.image" alt="">
        </mt-swipe-item>
        </mt-swipe>

        <!-- 这是下边的9宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">端口购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            lunboList: []
        }
    },
    created(){
        this.getLunBoList();
    },
    methods: {
        getLunBoList(){
            // this.$http.get('http://xxx').then(function(){
                this.lunboList = [
                    {url: '1', image: '../images/i1.jpg'},
                    {url: '2', image: '../images/i2.jpg'},
                    {url: '3', image: '../images/i3.jpg'}
                ]
            // })
        }
    }
    
}
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
    }
    .mint-swipe-item > img {
        width: 100%;
        height:100%;
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }
    .mui-media-body {
        font-size: 20px;
    }
</style>