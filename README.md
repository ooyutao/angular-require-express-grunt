# angular-require-express-grunt
node(express) + angular + require + grunt，按需加载，自动压缩，前后分离，适合大型项目

首先需要安装node

当前版本：

node v6.7.0

npm 3.10.3

下载项目：

git clone https://github.com/ooyutao/angular-require-express-grunt.git


进入项目：

cd angular-require-express-grunt


安装依赖：

npm install


启动项目：

npm start


浏览器访问页面查看效果：

http://localhost:8080/


安装grunt服务：

npm i -g grunt-cli


启动grunt监听代码变化：

grunt


目录结构：

bin----------------express服务器配置文件

node_modules-------项目依赖文件（下载依赖后才会生成）

routes-------------后台路由（指定入口文件，解决跨域接口转换）

views--------------入口文件（用的ejs模板引擎）

web----------------主要开发目录*

web/app------------grunt压缩后的实际执行文件（lib是通用js库文件夹，不进行监听压缩）

web/css------------css文件夹（style中编写，min中会自动生成压缩版引入页面中）

web/images---------项目内图片

web/js-------------主要逻辑开发文件夹（编写完会自动压缩到app中）

web/js/config------angular+require的配置,解决angular单页应用的局限，实现按需加载

      =》app.js-----------配置按需加载

      =》appregister.js---对app.js的封装

      =》main.js----------requirejs的主文件

      =》routermodel.js--angular路由

web/view-----------项目页面路径（通过模块来分文件夹）

favicon.ico--------项目图标

.gitignore---------git配置文件

app.js-------------nodejs入口文件

Gruntfile.js-------grunt监听配置

Logger.js----------后台日志配置

