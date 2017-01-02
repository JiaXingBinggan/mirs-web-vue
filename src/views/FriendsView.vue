<template>
  <div class="friends-view personal-center">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="menu">
          <h2>好友管理</h2>
          <router-link class="menu-item" to="/friends/friends-lists">好友列表</router-link>
        </div>
      </el-col>
      <el-col :span="18">
        <router-view name="friendsView"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'friends-view',
  beforeCreate () {
    // 如果没有登录，跳转到登录页面
    if (!this.$store.state.user.login) {
      this.$router.replace('/login')
    }
    this.$router.replace('/friends/friends-lists')
  }
}
</script>
