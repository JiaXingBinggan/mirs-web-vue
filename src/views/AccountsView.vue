<template>
  <div class="accounts-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="menu">
          <h2>信息设置</h2>
          <a class="menu-item" @click="title(0)">你的信息</a>
          <a class="menu-item" @click="title(1)">更改密码</a>
        </div>
      </el-col>
      <el-col :span="18">
        <user-info v-if="titles[0]===currentTitle"></user-info>
        <user-password v-if="titles[1]===currentTitle"></user-password>
      </el-col>
    </el-row>
</template>

<script>
import UserInfo from '../components/accounts/UserInfo'
import UserPassword from '../components/accounts/UserPassword'

export default {
  name: 'accounts-view',
  components: {
    UserInfo,
    UserPassword
  },
  beforeCreate () {
    // 如果没有登录，跳转到登录页面
    if (!this.$store.state.user.login) {
      this.$router.replace('/login')
    }
  },
  created () {
  },
  data () {
    return {
      titleId: {},
      titles: {
        0: '你的信息',
        1: '更改密码'
      },
      currentTitle: '你的信息'
    }
  },
  methods: {
    title (index) {
      this.currentTitle = this.titles[index]
    }
  }
}
</script>

<style lang="stylus" scoped>
.accounts-view
  width 980px
  margin-top 50px
  margin-left auto
  margin-right auto
  padding 0
  padding-bottom 60px
  .menu
    border 1px solid #d8d8d8
    border-radius 3px
    h2
      margin-top 0
      margin-bottom 0
      padding 8px 10px 8px 20px
      border-bottom 1px solid #eee
      border-top-radius 2px
      background-color #f7f7f7
    .menu-item
      display block
      padding 8px 10px 8px 24px
      border-bottom 1px solid #eee
      cursor pointer
    a
      color #111
  .input-button
    border-radius 3px
    width 80px
    background-color #eee
    border 1px solid #ddd
</style>
