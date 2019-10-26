<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never" >
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button
          style="float:right"
          type="primary"
          @click="handleSearchList()"
          size="small">
          查询搜索
        </el-button>
        <el-button
          style="float:right;margin-right: 15px"
          @click="handleResetSearch()"
          size="small">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input v-model="listQuery.orderSn" class="input-width" placeholder="订单编号"></el-input>
          </el-form-item>

        </el-form>
      </div>
    </el-card>
    <el-card class="operate-container" shadow="never" style="margin-top: 5px">
      <i class="el-icon-tickets"></i>
      <span>订单列表</span>

      <el-button type="primary"  style="float:right" size ="mini" icon="view" @click='onAddMoney()'>添加</el-button>

    </el-card>

    <div class="table-container" style="margin-top: 5px">
      <el-table ref="orderTable"
                :data="list"
                style="width: 100%;"
                @selection-change="handleSelectionChange"
                v-loading="listLoading" border>
        
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="流水编号" prop="name" width="80" align="center"></el-table-column>
        <el-table-column label="订单日" prop="name" width="180" align="center"></el-table-column>
        <el-table-column label="订单号" prop="name" width="180" align="center"></el-table-column>
        <el-table-column label="门店" prop="name" width="180" align="center"></el-table-column>
        <el-table-column label="客户名" prop="name" width="180" align="center"></el-table-column>
        <el-table-column label="实收总金额" prop="name" width="180" align="center"></el-table-column>
        <el-table-column label="扫码" prop="name" width="180" align="center"></el-table-column>
        <el-table-column label="刷卡" prop="name" width="180" align="center"></el-table-column>
        <el-table-column label="客欠" prop="name" width="180" align="center"></el-table-column>
        <el-table-column label="备注" prop="name" width="180" align="center"></el-table-column>

        <el-table-column label="编号" width="80" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        
        <el-table-column label="订单编号" width="180" align="center">
          <template slot-scope="scope">{{scope.row.orderSn}}</template>
        </el-table-column>
        <el-table-column label="提交时间" width="180" align="center">
          <template slot-scope="scope">{{scope.row.createTime | formatCreateTime}}</template>
        </el-table-column>
        <el-table-column label="用户账号" align="center">
          <template slot-scope="scope">{{scope.row.memberUsername}}</template>
        </el-table-column>
        <el-table-column label="订单金额" width="120" align="center">
          <template slot-scope="scope">￥{{scope.row.totalAmount}}</template>
        </el-table-column>
        <el-table-column label="支付方式" width="120" align="center">
          <template slot-scope="scope">{{scope.row.payType | formatPayType}}</template>
        </el-table-column>
        <el-table-column label="订单来源" width="120" align="center">
          <template slot-scope="scope">{{scope.row.sourceType | formatSourceType}}</template>
        </el-table-column>
        <el-table-column label="订单状态" width="120" align="center">
          <template slot-scope="scope">{{scope.row.status | formatStatus}}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleViewOrder(scope.$index, scope.row)"
            >查看订单</el-button>
            <el-button
              size="mini"
              @click="handleCloseOrder(scope.$index, scope.row)">关闭订单</el-button>
            <!-- <el-button
              size="mini"
              @click="handleDeliveryOrder(scope.$index, scope.row)"
              v-show="scope.row.status===1">订单发货</el-button>
            <el-button
              size="mini"
              @click="handleViewLogistics(scope.$index, scope.row)"
              v-show="scope.row.status===2||scope.row.status===3">订单跟踪</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDeleteOrder(scope.$index, scope.row)"
              v-show="scope.row.status===4">删除订单</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :current-page.sync="listQuery.pageNum"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :total="total">
      </el-pagination>
    </div>
      
  </div>
    
</template>

<script>
    export default {
        name: 'list',
        data() {
          list:[]
            return {
              listQuery:[]
                
            }
        }
    }
</script>

<style  scoped>
  .app-container {
    width: 95%;
    padding: 20px 20px 20px 20px;
    margin: 20px auto;
  }

  .pagination-container {
    text-align: right;
    margin-top: 2px;
  }
    
</style>