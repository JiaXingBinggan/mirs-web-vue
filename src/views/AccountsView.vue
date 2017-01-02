<template>
  <div class="accounts-view personal-center">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="menu">
          <h2>信息设置</h2>
          <router-link class="menu-item" to="/accounts/user-info">我的信息</router-link>
          <router-link class="menu-item" to="/accounts/user-password">更改密码</router-link>
        </div>
      </el-col>
      <el-col :span="18">
        <router-view name="accountsView"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'accounts-view',
  beforeCreate () {
    // 如果没有登录，跳转到登录页面
    if (!this.$store.state.user.login) {
      this.$router.replace('/login')
    }
    this.$router.replace('/accounts/user-info')
  }
}
</script>
