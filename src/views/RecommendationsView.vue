<template>
  <div class="recommendations-view personal-center">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="menu">
          <h2>推荐管理</h2>
          <router-link class="menu-item" to="/recommendations/settings">推荐设置</router-link>
          <router-link class="menu-item" to="/recommendations/questionnaire">调查问卷</router-link>
        </div>
      </el-col>
      <el-col :span="18">
        <router-view name="recommendationsView"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'recommendations-view',
  beforeCreate () {
    // 如果没有登录，跳转到登录页面
    if (!this.$store.state.user.login) {
      this.$router.replace('/login')
    }
    this.$router.replace('/recommendations/settings')
  }
}
</script>
