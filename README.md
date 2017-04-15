# Angular-ks
Angular-课程设计
# Use it
- **安装依赖**
```
npm install
```
- **运行项目**
```
gulp
```
# Dir
```
|--build：上传到服务器的文件
  |--css
  |--js
  |--images
  |--view
    |--template:指令视图文件
|--src：源文件
  |--app
    |-app.js:存放模块代码为条系统入口文件;
    |-controller.js:存放控制器代码;
    |-data.js:存放数据相关代码;
    |-derective.js:存放自定义指令的相关代码；
    |-filter.js:存放自定义过滤器的相关代码；
    |-service.js:存放自定义服务的相关代码;
    |-route.js 文件中存放路由的相关代码;
  |--css
  |--js：angular库文件、bootstrap.js、jquery.js
  |--fonts:bootstrap字体库
  |--images
  |--view
  |--template:指令视图文件
|-gulpfile.js：gulp配置文件
|-package.json：npm初始化文件
```
# 思路  
1、npm初始化  
2、安装gulp，以及依赖  
3、编写配置文件  
4、根据页面进行分模块，编写指令  
5、根据功能编写服务、控制器  
