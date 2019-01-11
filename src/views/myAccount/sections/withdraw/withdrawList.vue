<template>
  <div class="recharge-part">
    <div class='info-item'
         style='font-size: 30px;margin-bottom: 30px;'>出金记录
    </div>
    <el-table
      :data="list"
      tooltip-effect="dark"
      style="width: 100%;"
      max-height='600'
      v-loading="listLoading">
      <el-table-column
        prop="amount"
        label="金额"
        show-overflow-tooltip>
        <template slot-scope="scope">
          ${{scope.row.amount | formatThousands}}
        </template>
      </el-table-column>

      <el-table-column
        label="状态"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{statusMap[scope.row.status] || scope.row.status}}
        </template>
      </el-table-column>

      <el-table-column
        prop="createAt"
        label="提交时间">
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination background
                     v-if='showPagination'
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="listQuery.page + 1"
                     :page-sizes="[10,20,30, 50]"
                     :page-size="listQuery.size"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        statusMap: {
          wait: '待确认',
          processing: '处理中',
          success: '成功',
          fail: '失败'
        },
        typeMap: {
          alipay: '支付宝',
          bank_card: '银联'
        },
        showPagination: true,
        total: 0,
        listLoading: false,
        listQuery: {
          page: 0,
          size: 10
        }
      }
    },
    created() {
      this.getToken()
    },

    methods: {
      formatThousands: function(num) {
        return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
      },

      getToken() {
        if (USER.isLogin()) {
          this.getList()
        }
      },

      getList() {
        const self = this
        self.listLoading = true
        AXIOS.post('/api/member/withdraw/page', self.listQuery).then(res => {
          self.list = res.content || []
          self.total = res.totalElements || 0
          self.listLoading = false
        }).catch((res) => {
          self.listLoading = false
        })
      },

      handleSizeChange(val) {
        this.listQuery.size = val
        this.getList()
      },

      handleCurrentChange(val) {
        this.listQuery.page = val - 1
        this.getList()
      }

    }
  }
</script>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
  .recharge-part {

  }
</style>
