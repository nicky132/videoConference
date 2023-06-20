

### 说明

testa 里面的webpack是4的版本
注意的是打成umd格式的文件  webpack应该如何配置


testb里面的webpack是5的版本


testa里面用到了webworer 打成内联的形式  大概后的dist/index.js 里面的是用blob的形式加载webworker的js文件

主要是这个配置：inline: "fallback",   
这个配置只有在webpack4下才支持， webpack5不支持
```
rules: [
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            // filename: '[name].js',
            inline: "fallback",
            // fallback: false
            // esModule: false,
            // publicPath: '/',
          },
        },
      },
    ],
```


还有另外一种方式 配置 publicPath
```
output: {
    // clean: true,
    // publicPath: '/',
    publicPath: 'https://ai-deliver-bucket.bj.bcebos.com/ai-deliver/ai-deliver/',
    filename: '[name].js',
    // chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'testaa',
    libraryTarget: 'umd',
    globalObject: 'this'
    // library: {
    //   name: 'testaa',
    //   type: 'umd',
    // },
  },
```
testa testb需要同时部署在同一个域名下 这个是大前提
因为testa里面打包后还有一个webworker的js文件, 在testb项目加载testa 目录下的 dist/index.js   这个index.js需要依赖 webworker的js
这样你访问：
- 比如：testb的服务地址是：localhost:8084/  加载node_modules/testa/dist/webworker.js  根据publicPath的配置： https://ai-deliver-bucket.bj.bcebos.com/ai-deliver/ai-deliver/webworker.js 会出现跨越的问题


### 结论
建议第一种方案，以blob的方式引入


<<<<<<< HEAD
testb项目引入testa项目的依赖：yarn add file: ../testa


=======
### 参考文章
https://lwebapp.com/zh/post/web-worker
>>>>>>> b0f170ce4fd5e9ffb2a5fa8c24cf616be8d10aff
