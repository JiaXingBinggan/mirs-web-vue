<template>
  <div class="similar-users">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'similar-users',
  data () {
    return {
      msg: '好友推荐'
    }
  }
}
</script>


<style lang="stylus" scoped>
.similar-users
  background rgb(198, 171, 212)
  height 300px
</style>
