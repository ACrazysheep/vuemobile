// 导入nodejs的path这个核心包
var path = require('path');

// 导入：html-webpack-plugin
var htmlwp = require('html-webpack-plugin');

// 导入webpack这个包
var webpack = require('webpack');

// 分离css的1步配置
var csstck = require('extract-text-webpack-plugin');

module.exports = {
    // 1.0 指定webpack的打包的入口文件
    // 打包分离公共组件的第一步
    entry: {
       bulid: './src/main.js',
       vendor1:['vue','vue-router','axios']           
    },

    // 2.0 指定打包完成的以后的输出文件
    output: {
        // 指定的是build.js要生成的目录，注意：一定是一个绝对路径，写相对路径会报错
        // __dirname：就是获取当前文件(webpack.config.js)所在的目录的绝对路径
        // path.join(__dirname,'/dist'):在老师电脑上的输出结果：F:\广州13期Vue基础和项目\基础第三天\代码day03\03webpack学习\dist
        path: path.join(__dirname, '/dist'),
        // 这个文件名称可以自定义
        //  // 打包分离公共组件的第三步：要将filename的名字改变成 [name].js
        filename: '[name].js'
    },
    // 导入jquery这个包
    resolve: {
        alias: {
            //   导入node_modules文件夹中的jquery这个包
            // 'jquery': 'jquery'
        }
    },
    // 3.0 配置webpack相对于的loader包
    module: {
        // 在这里配置的是具体的某一个的loader
        loaders: [
            // 3.0.1 配置的是用来解析.css文件的loader(style-loader和css-loader)
            {
                test: /\.css$/,//  用正则匹配当前访问的文件的后缀名是.css
                // loader: 'style-loader!css-loader'  //webpack底层调用这些包的顺序是从右到左
                // use:将除了第一个包之外的其他所有的loader包放到use后面
                // fallback:将第一个包放到fallback的后面
                loader:csstck.extract({fallback:"style-loader",use:"css-loader"})
            },
            // 3.0.2 配置的是用来解析.less文件的loader(style-loader和css-loader和less-loader)
            {
                test: /\.less$/,//  用正则匹配当前访问的文件的后缀名是.css
                // loader: 'style-loader!css-loader!less-loader'  //webpack底层调用这些包的顺序是从右到左
                loader:csstck.extract({fallback:"style-loader",use:"css-loader!less-loader"})
            },
            // 3.0.3 配置的是用来解析.scss文件的loader(style-loader和css-loader和sass-loader)
            {
                test: /\.scss$/,//  用正则匹配当前访问的文件的后缀名是.css
                // loader: 'style-loader!css-loader!sass-loader'  //webpack底层调用这些包的顺序是从右到左
                loader:csstck.extract({fallback:"style-loader",use:"css-loader!sass-loader"})
            },
            // 3.0.4 配置的是用来解析.png,.jpg,.gif......文件的loader(url-loader)
            {
                test: /\.(png|jpg|gif|woff|ttf|svg|eot)$/,//  用正则匹配当前访问的文件的后缀名是.css
                // 可以在url-loader?limit=设定的限定值大小(单位：Byte  1K=1024Byte )
                loader: 'url-loader?limit=10240'  //注意这个地方不需要使用file-loader
            }
            ,
            // 3.0.5 为了兼容在webpack1.x中也能够正常的解析es6语法，所以做一个babel-loader的配置(在webpack2.x和webpac3.x中这个配置是可以省略的)
            {
                test: /\.js$/,//  用正则匹配当前访问的文件的后缀名是.js
                // 可以在url-loader?limit=设定的限定值大小(单位：Byte  1K=1024Byte )
                loader: 'babel-loader',  //注意这个地方不需要使用file-loader
                // node_modules文件夹中的所有.js文件应该排除
                exclude: /node_modules/
            },
            // 3.0.6 配置的是用来解析.vue文件的loader(vue-loader)
            {
                test: /\.vue$/,//  用正则匹配当前访问的文件的后缀名是.css    
                loader: 'vue-loader'  //注意这个地方不需要使用file-loader
            }
        ]
    },
    // 这种配置只兼容 webpack1.x，在webpack2.x和3.x中会报错（babel节点不认识）
    // babel:{
    //     presets:['es2015']  //es6
    // },
    // webpack需要使用的插件配置在这里
    plugins: [
        new htmlwp({
            filename: 'index.html',  // 在内存中生成的html的文件名称
            //在内存中生成的文件的内容是参考index1.html来生成，同时将webpack在内存中生成好的bulid.js
            // 通过script标签加载到index.html的底部
            template: 'index1.html'
        }),
        // 将jqeruy对象映射为$和jQuery
        // new webpack.ProvidePlugin({
        //     $:  "jquery",
        //     jQuery:  "jquery"
        // }),
        // 打包分离公共组件的第2步
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor1"],  //注意在调用的地方要和定义的地方顺序相反
            minChunks: Infinity
        }),
        new csstck("[name].css")
    ]
}