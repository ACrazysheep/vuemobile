<!-- 1.0 组件的模板，需要注意有一个根元素 -->
<template>
    <div class="tmpl">

        <!--1.0  使用mint-ui中的header组件实现头部 -->
        <mt-header fixed title="黑马移动web首页"></mt-header>

        <!-- 2.0 路由的占位 -->
        <router-view></router-view>

        <!-- 3.0 使用mui中的tabbar实现底部导航 -->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email">
                    <span class="mui-badge">9</span>
                </span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>
    </div>
</template>

<!-- 2.0 定义组件中的相关对象(data,methods) -->
<script>
    import { Toast } from 'mint-ui';

    // new Vue({})
    export default {
        data() {
            return {

            }
        },
        methods: {
            toast() {
                Toast('提示信息Toast');
            }
        }
    }
</script>

<!-- 3.0  -->
<style>
    .tmpl{
        margin-top:50px;
        margin-bottom: 50px;
    }
</style>