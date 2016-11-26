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
+ UI组件库：[Muse-UI](https://museui.github.io/#/index)
+ HTTP请求库：[axios](https://github.com/mzabriskie/axios)
+ CSS的预处理框架: [Stylus](http://stylus-lang.com/)
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
    + [ ] 最新电影推荐
    + [ ] 最热电影推荐
    + [ ] 相似用户推荐
  + [ ] 筛选电影页
    + [ ] 筛选部分
    + [ ] 主体展示部分
  + [ ] 搜索
    + [ ] 首页基本搜索
    + [ ] 高级搜索页
  + [ ] 电影展示页
  + [ ] 用户信息展示页
  + [ ] 404页

## 贡献代码
  > 参考[Folk + Pull模式](http://www.worldhello.net/gotgithub/04-work-with-others/010-fork-and-pull.html)
