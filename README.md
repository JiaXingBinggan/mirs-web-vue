# mirs-web-vue

> A Vue.js project for mirs

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build
```

## Project Structure
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
