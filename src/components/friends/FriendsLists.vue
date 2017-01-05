<template>
  <div class="friends-lists" style="width: 90%">
    <br>
    <el-input placeholder="请输入内容" v-model="input5">
      <el-button slot="append" icon="search"></el-button>
    </el-input>
    <br><br>
    <el-table
    :data="currentFriend"
    border
    style="width: 100%">
      <el-table-column
        prop="date"
        label="最近联系"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100">
        <template scope="scope">
          <el-tag
            :type="scope.row.tag === '家人' ? 'primary' : 'success'"
            close-transition>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click.native.prevent="deleteRow(scope.$index, currentFriend)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="sizePerOnePage"
      layout="total, prev, pager, next"
      :total="totalCommentSize">
    </el-pagination>
  </div>
</template>


<script>
export default {
  created () {
    this.get_friend()
  },
  data () {
    return {
      currentPage: 1,
      sizePerOnePage: 8,
      currentFriend: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小',
        tag: '家人'
      }, {
        date: '2016-05-04',
        name: '王虎',
        tag: '同学'
      }, {
        date: '2015-05-01',
        name: 'Mike',
        tag: '家人'
      }, {
        date: '2016-05-03',
        name: '李晓红',
        tag: '同学'
      }, {
        date: '2012-05-01',
        name: 'Hanny',
        tag: '家人'
      }, {
        date: '2016-05-03',
        name: '李红',
        tag: '普通朋友'
      }, {
        date: '2016-06-01',
        name: 'Jonney',
        tag: '家人'
      }, {
        date: '2016-05-03',
        name: '韩明',
        tag: '同学'
      }, {
        date: '2013-05-01',
        name: '李四',
        tag: '普通朋友'
      }, {
        date: '2016-08-03',
        name: '张三',
        tag: '同学'
      }, {
        date: '2016-05-03',
        name: '李红',
        tag: '普通朋友'
      }, {
        date: '2016-06-01',
        name: 'Jonney',
        tag: '家人'
      }, {
        date: '2016-05-03',
        name: '韩明',
        tag: '同学'
      }, {
        date: '2013-05-01',
        name: '李四',
        tag: '普通朋友'
      }, {
        date: '2016-08-03',
        name: '张三',
        tag: '同学'
      }, {
        date: '2016-05-03',
        name: '李红',
        tag: '普通朋友'
      }, {
        date: '2016-06-01',
        name: 'Jonney',
        tag: '家人'
      }, {
        date: '2016-05-03',
        name: '韩明',
        tag: '同学'
      }, {
        date: '2013-05-01',
        name: '李四',
        tag: '普通朋友'
      }, {
        date: '2016-08-03',
        name: '张三',
        tag: '同学'
      }, {
        date: '2016-08-03',
        name: '张三',
        tag: '同学'
      }, {
        date: '2016-08-03',
        name: '张三',
        tag: '同学'
      }]
    }
  },
  methods: {
    get_friend () {
      var _this = this
      _this.getCurrentFriend(1)
    },
    filterTag (value, row) {
      return row.tag === value
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getCurrentFriend(val)
    },
    getCurrentFriend (page) {
      var size = this.tableData.length
      console.log('****************')
      console.log(size)
      // var sizePerOnePage = 2
      var startFriend = this.sizePerOnePage * (page - 1)
      var endFriend = startFriend + this.sizePerOnePage
      endFriend = endFriend < size ? endFriend : size
      this.currentFriend = []
      for (var i = startFriend; i < endFriend; i++) {
        this.currentFriend.push(this.tableData[i])
      }
    }
  },
  computed: {
    totalCommentSize () {
      console.log('--------------------')
      console.log(this.tableData.length)
      return this.tableData.length
    }
  },
  watch: {
    movie: {
      handler: function (val, oldVal) {
        console.log('99999999999999999')
        this.handleCurrentChange(this.currentPage)
      },
      deep: true
    }
  }
}
</script>

