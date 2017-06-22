# Angular-ks
- **双向数据功能**  
  - **从控制器或服务器读取数据**
  - **为文本域添加双向数据绑定**
  - **用户的头像、昵称、发表的文本、粉丝等信息实现双向数据绑定**
- **导航条效果**
  - **ng-repeat 实现导航条**
  - **下拉菜单（使用angular实现）**
- **视图和路由**
  - **首页各模块使用视图和路由实现单页面应用。ng-view 对应的文件存放到 view 文件夹中。**
  - **创建 “简介”按钮对应用的视图，并使用视图和路由实现单页面应用。ng-view 对应的文件存 放到 view 文件夹中。**
  - **创建 “消息”按钮对应用的视图，并使用视图和路由实现单页面应用。ng-view 对应的文件存 放到 view 文件夹中。**
- **可选效果**
  - **既时搜索功能(搜索提示功能)**
  - **使用 AJAX 服务**
  - **添加动画效果**

# Use it
- **clone到本地**
```
git clone https://github.com/zhangzheng1019/Angular-ks.git
```
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
