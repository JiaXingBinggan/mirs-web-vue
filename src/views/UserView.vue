<template>
  <div class="user-view">
    <h1>{{paramId}}</h1>
    <template v-if="user">
      <h1>User : {{ user.id }}</h1>
      <ul class="meta">
        <li><span class="label">Created:</span> {{ user.created | timeAgo }} ago</li>
        <li><span class="label">Karma:</span> {{user.karma}}</li>
        <li v-if="user.about" v-html="user.about" class="about"></li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'user-view',
  data () {
    return {
      paramId: 'user id from params:' + this.$route.params.id
    }
  },
  computed: {
    user () {
      return ''
    }
  }
  // preFetch: fetchUser,
  // beforeMount () {
  //   fetchUser(this.$store)
  // }
}
</script>

<style lang="stylus">
.user-view
  background-color #fff
  box-sizing border-box
  padding 2em 3em
  h1
    margin 0
    font-size 1.5em
  .meta
    list-style-type none
    padding 0
  .label
    display inline-block
    min-width 4em
  .about
    margin 1em 0
  .links a
    text-decoration underline
</style>
