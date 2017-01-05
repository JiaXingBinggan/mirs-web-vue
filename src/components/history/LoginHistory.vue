<template>
  <div class="login-history">
    <h3>登录信息</h3><span>您最近一周的登录记录</span>
    <div class="table-wrapper">
      <table class="table-normal" id="login_log_table">
        <thead>
          <tr>
            <td style="width: 36%">
              <div>
                时间
              </div>
            </td>
            <td style="width: 30%">
              <div>
                变化
              </div>
            </td>
            <td style="width: 34%">
              <div>
                地理位置
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="loginLog in loginLogList">
            <td>
              <div>
                {{loginLog.time}}
              </div>
            </td>
            <td>
              <div>
                {{loginLog.userip}}
              </div>
            </td>
            <td>
              <div>
                {{loginLog.address}}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="pagination">
      <span>共{{parseInt(loginLogList.length/size)+1}}页</span>
      <button class="prev" type="button" name="button" @click="prev">《</button>
      <ul v-for="n in total">
        <li class="number">{{n}}</li>
      </ul>
      <button class="next" type="button" name="button" @click="next">》</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'user-info',
  loginLog: {
    time: '2017-01-05 10:42:42',
    userip: '210.41.96.234',
    address: '四川成都市电子科技大学区教育网'
  },
  data () {
    return {
      loginLogList: [
        {
          time: '2017-01-05 10:42:42',
          userip: '210.41.96.234',
          address: '四川成都市电子科技大学区教育网'
        },
        {
          time: '2017-01-05 10:42:42',
          userip: '210.41.96.234',
          address: '四川成都市电子科技大学区教育网'
        },
        {
          time: '2017-01-05 10:42:42',
          userip: '210.41.96.234',
          address: '四川成都市电子科技大学区教育网'
        }
      ],
      size: 2,
      currentPage: 1,
      sizePerOnePage: 5
    }
  },
  computed: {
    total: function () {
      return parseInt(this.loginLogList.length / this.size) + 1
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.login-history
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
  .pagination
    button
      min-width 28px
      height 28px
      padding 0
      background #eee
      border 1px solid #ddd
    ul
      vertical-align top
      list-style none
      display inline-block
      padding 0
      margin 0
      .number
        display inline-block
        margin 0
        padding 0
        padding-top 2px
        min-width 28px
        height 28px
        text-align center
        border 1px solid #ddd
</style>
