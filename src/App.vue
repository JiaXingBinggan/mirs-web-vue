<template>
  <div id="app">
    <notification
    :options.sync="options"
    :show.sync="show">
    </notification>
    <div class="header">
      <mu-appbar>
        <div class="inner">
          <router-link to="/" exact>
            <img class="logo" src="./assets/cat.png" alt="logo">
          </router-link>
          <router-link to="/">首页</router-link>
          <router-link to="/find">发现电影</router-link>
          <!-- <router-link to="/box-office">电影票房</router-link>
          <router-link to="/album">电影专辑</router-link> -->
        </div>
        <div class="search-bar" slot="right">
          <simple-search></simple-search>
        </div>
        <!-- <mu-text-field v-model="searchKeywords" @keyup.enter="onSearch" class="appbar-search-field"  slot="right" hintText="请输入搜索内容" icon="search"/> -->
        <mu-flat-button class="login-button" v-if="!login" @click="goTo('/login')" color="white" backgroundColor="blue" label="登录/注册" slot="right"/>

        <mu-avatar class="avatar" v-if="login" @click="toggle(true)" slot="right" :src="defaultAvatar" :size="45" />
        <mu-drawer right :open="open" :docked="docked" width="200"  @close="toggle()">
          <mu-appbar title="个人中心">
            <mu-icon-button icon='menu' slot="left" @click="toggle()"/>
          </mu-appbar>
          <mu-list @itemClick="toggle()">
            <mu-list-item title="信息管理" @click="goTo('/accounts')">
              <mu-icon slot="left" value="info"/>
            </mu-list-item>
            <mu-list-item title="我的消息" @click="goTo('/messages')">
              <mu-icon slot="left" value="star"/>
            </mu-list-item>
            <mu-list-item title="好友管理" @click="goTo('/friends')">
              <mu-icon slot="left" value="group"/>
            </mu-list-item>
            <mu-list-item title="推荐管理" @click="goTo('/recommendations')">
              <mu-icon slot="left" value="bookmark"/>
            </mu-list-item>
            <mu-list-item title="我的记录" @click="goTo('/history')">
              <mu-icon slot="left" value="history"/>
            </mu-list-item>
            <mu-list-item title="退出登录" @click="logout">
              <mu-icon slot="left" value="input"/>
            </mu-list-item>
          </mu-list>
        </mu-drawer>
      </mu-appbar>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import defaultAvatar from './assets/avatar.png'
import Notification from './components/common/Notification'
import SimpleSearch from './components/search/SimpleSearch'
import Store from './utils/store.js'
// [].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})

export default {
  components: {
    Notification,
    SimpleSearch
  },
  beforeCreate () {
    let user = Store.fetch('user')
    if (user['expireTime'] > new Date().getTime()) {
      this.$store.dispatch('doLogin', user['user'])
    }
  },
  data () {
    return {
      defaultAvatar,
      open: false,
      docked: true
    }
  },
  computed: {
    show () {
      return this.$store.state.notification.show
    },
    options () {
      return this.$store.state.notification.options
    },
    login () {
      return this.$store.state.user.login
    }
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('doLogout')
      this.$router.push('/')
    },
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  }
}
</script>

<style lang="stylus">
body
  font-family "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
  background-color lighten(#eceef1, 30%)
  margin 0

a
  color #34495e
  text-decoration none

.header
  z-index 999
  max-width 100%
  height 55px
  top 0
  left 0
  right 0
  .inner
    padding-left 100px
    font-size 16px
    font-family "Microsoft YaHei"
    a
      color rgba(255, 255, 255, .8)
      line-height 24px
      transition color .15s ease
      display inline-block
      vertical-align middle
      font-weight 300
      letter-spacing .075em
      margin-right 1.8em
      &:hover
        color #fff
      &.router-link-active
        color #fff
        font-weight 400
  .search-bar
    width 300px
    margin-right 100px
  .avatar
    margin-left 35px
    margin-right 15px
    img
      width 135%

.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle

.view
  padding 0 100px
  margin 0 auto
  position relative

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  body
    font-size 14px
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .github
      display none
</style>
