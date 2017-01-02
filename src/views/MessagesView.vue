<template>
  <div class="messages-view personal-center">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="menu">
          <h2>我的消息</h2>
          <router-link class="menu-item" to="/messages/system">系统通知</router-link>
          <router-link class="menu-item" to="/messages/user">用户私信</router-link>
        </div>
      </el-col>
      <el-col :span="18">
        <router-view name="messagesView"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'messages-view',
  beforeCreate () {
    // 如果没有登录，跳转到登录页面
    if (!this.$store.state.user.login) {
      this.$router.replace('/login')
    }
    this.$router.replace('/messages/system')
  }
}
</script>
