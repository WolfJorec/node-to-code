# node-to-code
通过node自动生成重复的js代码

## 拉取项目
```js
    git clone https://github.com/WolfJorec/node-to-code.git

    cd node-to-code && npm install
```

## 项目配置
1.在「json」文件夹中导入接口json数据(暂时只支持swaggerApi）
2.在 「main.js」文件中引入json数据
3.在「template/index.js」中可自定义修改模板，提供参数为 「method」 请求类型「 url」 请求地址「 name」 请求名字「 params」 请求参数

## 项目运行
```js
    node main.js
```

## 说明
只是一个简单的根据接口文档生成前端代码工具，后续会继续完善