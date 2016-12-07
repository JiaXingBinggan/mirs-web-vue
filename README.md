## 项目说明

> 电影智能推荐系统前端的Vue实现，Demo[地址](https://www.91film.top/)

## 构建步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build
```

## 项目结构
```
index.html  
├── main.js                       # 入口地址
├── api                           # 对后台API的封装
│   ├── api.js                    # 抽取出API请求
│   └── ...                       # 不同模块的请求
├── components                    # Vue组件
│   ├── common                    # 通用组件
│   └── ...                       # 其他模块组件
├── filters                       # Vue的自定义过滤函数
├── router                        # 路由
├── store                         # vuex的集中式store
│   ├── index.js                  # 组装模块并导出 store 的地方
│   ├── actions.js                # 根级别的 action
│   ├── mutations.js              # 根级别的 mutation
│   ├── getters.js                # 根级别的 getters
│   └── modules                   # store模块
│       ├── notification.js       # 通知模块
│       └── ...                   # 其他模块
└── views                         # View组件
```

## 技术选型

+ 核心框架：[Vue](https://cn.vuejs.org/v2/guide/)
+ 状态管理：[Vuex](https://vuex.vuejs.org/zh-cn/intro.html)
+ 路由映射：[vue-router](https://router.vuejs.org/zh-cn/)
+ UI组件库：[Muse-UI](https://museui.github.io/#/index),[Element](http://element.eleme.io/#/zh-CN/component/quickstart)
+ HTTP请求库：[axios](https://github.com/mzabriskie/axios)
+ CSS的预处理框架: [Stylus](http://stylus-lang.com/),[中文文档](http://www.zhangxinxu.com/jq/stylus/)
+ 资源加载打包工具：[Webpack](https://webpack.github.io/)
+ 代码规范工具：[eslint](http://eslint.org/)
+ 其他：[ES6](https://wohugb.gitbooks.io/ecmascript-6/content/index.html)

## To Do List
+ [ ] 设计
  + [x] 登录注册设计
  + [ ] 首页排版设计
  + [ ] 用户中心设计
  + [ ] 单个电影页面设计
+ [ ] 开发
  + [ ] 登录注册
    + [x] 登录
    + [x] 注册
    + [ ] 第三方登录
    + [ ] 找回密码
  + [ ] 个人中心
    + [ ] 基本信息管理
      + [ ] 完善信息
      + [ ] 重置密码
    + [ ] 我的消息
    + [ ] 好友管理
      + [ ] 好友列表
    + [ ] 推荐管理
      + [ ] 推荐设置
      + [ ] 我评价的电影
    + [ ] 我的记录
      + [ ] 登录记录
      + [ ] 观看记录
    + [ ] 退出登录
  + [ ] 首页
    + [ ] 每日电影推荐
    + [ ] 热映电影推荐
    + [ ] 高分电影推荐
    + [ ] 相似用户推荐
  + [ ] 发现电影页
    + [ ] 筛选部分
    + [ ] 主体展示部分
  + [ ] 搜索
    + [ ] 首页基本搜索
    + [ ] 高级搜索页
  + [ ] 电影展示页
  + [ ] 用户信息展示页
  + [ ] 404页

## 贡献代码
  1. fork 本仓库
  2. 为你的fork仓库创建一个本地克隆
    + 定位到你fork的mirs-web-vue仓库
    + 在你 fork 的仓库页面的右侧边栏，点击复制图标复制你 fork 的 URL
    + 在本地打开终端或命名提示符，输入 ```git clone URL```
  3. 配置git，使其能与源仓库同步
    + 在本仓库页面复制这个仓库的URL
    + 定位到你本地克隆的仓库，使用 ```git remote -v```，可以看到fork当前配置的仓库，如下所示：
      ``` bash
        $ git remote -v
        origin  https://github.com/YOUR_USERNAME/mirs-web-vue.git (fetch)
        origin  https://github.com/YOUR_USERNAME/mirs-web-vue.git (push)
      ```
    + 输入 ```git remote add upstream```，然后粘贴刚才复制的URL，如下所示：
      ```
        git remote add upstream https://github.com/firery/mirs-web-vue.git
      ```
    + 再次输入``` git remote -v  ```。你将会看到你 fork 的 URL 作为原始的地址，而原始的仓库的 URL 作为 upstream。
      ```
        $ git remote -v
        origin    https://github.com/YOUR_USERNAME/mirs-web-vue.git (fetch)
        origin    https://github.com/YOUR_USERNAME/mirs-web-vue.git (push)
        upstream  https://github.com/firery/mirs-web-vue.git (fetch)
        upstream  https://github.com/firery/mirs-web-vue.git (push)
      ```
  4. 贡献代码，并commit
  5. 同步原始库：```git fetch upstream```
  6. 如果不在本地的master分支，使用```git checkout master```进行切换
  7. 将源仓库的更新合并到本地的master分支：```git merge upstream/master```
  8. 将本地仓库的更新提交到github:```git push```
  9. 在github上确认信息后，就可以提交pull request了
