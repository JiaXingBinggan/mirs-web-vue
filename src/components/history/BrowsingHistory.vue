<template>
  <div class="browsing-history">
    <h3>浏览记录</h3>
    <div class="table-wrapper">
      <table class="table-normal">
        <thead>
          <tr>
            <td width="34%">
              时间
            </td>
            <td width="66%">
              影片
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in Records">
            <td>{{item.time}}</td>
            <td>{{item.movie}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'browsing-history',
  record: {
    time: '',
    movie: ''
  },
  data () {
    return {
      Records: [
        {
          time: '2017-01-05',
          movie: '天下第二'
        },
        {
          time: '2017-01-05',
          movie: '天下第二'
        },
        {
          time: '2017-01-05',
          movie: '天下第二'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.browsing-history
  .table-wrapper
    margin-top 10px
    margin-bottom 20px
    border 1px solid #ddd
    border-radius 2px
    .table-normal
      width 100%
      height 100%
      border-collapse collapse
      border-spacing 2px
      border-color grey
      vertical-align middle
      thead
        display table-header-group
        vertical-align middle
        border-color inherit
        tr
          td
            text-align center
            background #f5f5f5
            height 42px
            border-bottom 1px solid #ddd
            border-left 1px solid #ddd
            font-weight bold
      tbody
        tr
          td
            text-align center
            height 40px
            border-left 1px solid #ddd
            border-bottom 1px solid #ddd
</style>
