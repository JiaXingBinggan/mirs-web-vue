<template>
  <div class="similar-users">
    <h3>{{msg}}</h3>
    <div class="usercontainer">
        <div class="user" v-for="user in user">
          <img class="face" width="120" height="120" :src="user.avatar" @click="goToUser(user.id)">
          <h3>{{user.username}}</h3>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'similar-users',
  data () {
    return {
      msg: '好友推荐',
      user: [{
        id: '21',
        username: '那个帅脸萌萌哒',
        avatar: 'https://avatars0.githubusercontent.com/u/17798805?v=3&u=a85ecf41aa0ef94009bfd4dcea7f3208069dcf16&s=400'
      }, {
        id: '21',
        username: '世界只因有你',
        avatar: 'http://up.qqjia.com/z/25/tu32695_14.jpg'
      }, {
        id: '21',
        username: '某花花',
        avatar: 'http://v1.qzone.cc/avatar/201401/17/14/10/52d8c966e1d74080.jpg%21200x200.jpg'
      }, {
        id: '22',
        username: '左手倒影',
        avatar: 'http://diy.qqjay.com/u/files/2012/0920/789535c6d25dfbd8bf4cfe961ce3762f.jpg'
      }, {
        id: '21',
        username: '滿天的星座',
        avatar: 'http://v1.qzone.cc/avatar/201407/30/10/53/53d85e121c4dc316.jpg%21200x200.jpg'
      }, {
        id: '21',
        username: '普通小姐',
        avatar: 'http://diy.qqjay.com/u2/2014/0804/c6a83a69d34273d0f2947b4b93c63e5d.jpg'
      }]
    }
  },
  methods: {
    goToUser (id) {
      this.$router.push('/user/' + id)
    }
  }
}
</script>


<style lang="stylus" scoped>
.similar-users
  height 300px
  margin 0px auto
@media screen and (min-width: 1201px){
  .similar-users{width:1200px}
}
@media screen and (max-width: 1200px){
  .similar-users{width:900px}
}
@media screen and (max-width: 900px){
  .similar-users{width:200px}
}
@media screen and (max-width: 500px){
  .similar-users{width:100px}
}
.usercontainer
  height 260px
  border-top 1px solid #d0d0d0
.user
  height 200px
  width 160px
  margin 20px 0px 0px 30px
  float left
  cursor pointer
.user .face
  border-radius 50%
  margin 20px 20px 0px 50px
.user h3
  text-align center
</style>
