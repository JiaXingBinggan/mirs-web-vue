<template>
  <div class="index-view">
    <h1 @click='notice()'>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'index-view',
  data () {
    return {
      msg: 'Welcome to the index page!'
    }
  },
  methods: {
    notice () {
      this.$store.dispatch('newNotice', {
        autoClose: false,
        backgroundColor: '#cddced',
        content: 'Now you see me!'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
  background rgba(110, 86, 117, 0.22)
</style>
