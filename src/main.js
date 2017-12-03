// 1.0 导入相关包
import vue from 'vue';
import axios from 'axios';
import vueRouter  from 'vue-router';
// 导入vue移动端的开发组件 mint-ui
import mintui from 'mint-ui';

// 导入mint-ui的样式
import 'mint-ui/lib/style.css';

vue.use(mintui);

// 导入mui的css样式
 import '../statics/mui/css/mui.css';

// 2.0 相关包的使用
// 2.0.1 使用axios
axios.defaults.baseURL="http://127.0.0.1:8899";
vue.prototype.$ajax = axios;

import home from './Home.vue'
// 2.0.2 定义路由规则
var router =new vueRouter({
    routes:[
        {name:'default',path:'/',redirect:'/home'},
       {name:'home',path:'/home',component:home}
    ]
});

// 2.0.3 将vueRouter绑定到vue中
vue.use(vueRouter);

// 3.0 new vue
import App from './App.vue';
new vue({
    el:'#app',
    router,
    render:c=>c(App)
});