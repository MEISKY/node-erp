<template>
<div class="detail-container">
  <el-card shadow="never">
    <div>
      <el-steps :active="2" align-center>
        <el-step title="提交订单" description="2018-09-15 12:24:27"></el-step>
        <el-step title="订单审核" description="2018-09-15 12:24:27"></el-step>
        <el-step title="采购面料" description="2018-09-15 12:24:27"></el-step>
        <el-step title="工厂生产" description="2018-09-15 12:24:27"></el-step>
        <el-step title="商品入库" description="2018-09-15 12:24:27"></el-step>
        <el-step title="工厂发货" description="2018-09-15 12:24:27"></el-step>
        <el-step title="门店收件" description="2018-09-15 12:24:27"></el-step>
        <el-step title="客户取件" description="2018-09-15 12:24:27"></el-step>
      </el-steps>
    </div>
  </el-card>
  <el-card shadow="never" style="margin-top: 15px">
    <div class="operate-container">
      <i class="el-icon-warning color-danger" style="margin-left: 20px"></i>
      <span class="color-danger">当前订单状态：123</span>
      <div class="operate-button-container">
        <el-button size="mini" @click="showUpdateReceiverDialog">修改收货人信息</el-button>
        <el-button size="mini">修改商品信息</el-button>
        <el-button size="mini" @click="showUpdateMoneyDialog">修改费用信息</el-button>
        <el-button size="mini" @click="showMessageDialog">发送站内信</el-button>
        <el-button size="mini" @click="showCloseOrderDialog">关闭订单</el-button>
        <el-button size="mini" @click="showMarkOrderDialog">备注订单</el-button>
      </div>
    </div>

    <div style="margin-top: 20px">
      <i class="el-icon-s-flag" style="color: #606266"></i>
      <span class="font-small">基本信息</span>
    </div>

    <div class="table-layout">
      <el-row>
        <el-col :span="4" class="table-cell-title">订单编号</el-col>
        <el-col :span="4" class="table-cell-title">发货单流水号</el-col>
        <el-col :span="4" class="table-cell-title">用户账号</el-col>
        <el-col :span="4" class="table-cell-title">支付方式</el-col>
        <el-col :span="4" class="table-cell-title">订单来源</el-col>
        <el-col :span="4" class="table-cell-title">订单类型</el-col>
      </el-row>

      <el-row>
        <el-col :span="4" class="table-cell-title">配送方式</el-col>
        <el-col :span="4" class="table-cell-title">物流单号</el-col>
        <el-col :span="4" class="table-cell-title">自动确认收货时间</el-col>
        <el-col :span="4" class="table-cell-title">订单可得优币</el-col>
        <el-col :span="4" class="table-cell-title">订单可得成长值</el-col>
        <el-col :span="4" class="table-cell-title">活动信息</el-col>
      </el-row>
    </div>

    <div style="margin-top: 20px">
      <i class="el-icon-s-flag" style="color: #606266"></i>
      <span class="font-small">收货人信息</span>
    </div>
    <div class="table-layout">
      <el-row>
        <el-col :span="6" class="table-cell-title">收货人</el-col>
        <el-col :span="6" class="table-cell-title">手机号码</el-col>
        <el-col :span="6" class="table-cell-title">邮政编码</el-col>
        <el-col :span="6" class="table-cell-title">收货地址</el-col>
      </el-row>
    </div>

    <div style="margin-top: 20px">
      <i class="el-icon-s-flag" style="color: #606266"></i>
      <span class="font-small">商品信息</span>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%;margin-top: 20px" border>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    <div style="float: right;margin: 20px">
      合计：<span class="color-danger">￥123</span>
    </div>

    <div style="margin-top: 60px">
      <i class="el-icon-s-flag" style="color: #606266"></i>
      <span class="font-small">费用信息</span>
    </div>

    <div class="table-layout">
        <el-row>
          <el-col :span="6" class="table-cell-title">商品合计</el-col>
          <el-col :span="6" class="table-cell-title">运费</el-col>
          <el-col :span="6" class="table-cell-title">优惠券</el-col>
          <el-col :span="6" class="table-cell-title">积分抵扣</el-col>

          <el-col :span="6" class="table-cell-title">1</el-col>
          <el-col :span="6" class="table-cell-title">2</el-col>
          <el-col :span="6" class="table-cell-title">3</el-col>
          <el-col :span="6" class="table-cell-title">4</el-col>

        </el-row>

        <el-row>
          <el-col :span="6" class="table-cell-title">活动优惠</el-col>
          <el-col :span="6" class="table-cell-title">折扣金额</el-col>
          <el-col :span="6" class="table-cell-title">订单总金额</el-col>
          <el-col :span="6" class="table-cell-title">应付款金额</el-col>
        </el-row>
    </div>

    <div style="margin-top: 20px">
      <i class="el-icon-s-flag" style="color: #606266"></i>
      <span class="font-small">操作信息</span>
    </div>
    <el-table style="margin-top: 20px;width: 100%"
        :data="tableData" border>
        <el-table-column label="操作者"  width="120" align="center">

        </el-table-column>
        <el-table-column label="操作时间"  prop="date" width="160" align="center">

        </el-table-column>
        <el-table-column label="订单状态"  prop="date" width="120" align="center">

        </el-table-column>
        <el-table-column label="付款状态" prop="date"  width="120" align="center">

        </el-table-column>
        <el-table-column label="发货状态" prop="date" width="120" align="center">

        </el-table-column>
        <el-table-column label="备注" prop="date" align="center">
 
        </el-table-column>
      </el-table>
    
  </el-card>
</div>
  
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
  .detail-container {
    width: 95%;
    padding: 20px 20px 20px 20px;
    margin: 20px auto;
  }

  .operate-container {
    background: #F2F6FC;
    height: 80px;
    margin: -20px -20px 0;
    line-height: 80px;
  }

  .operate-button-container {
    float: right;
    margin-right: 20px
  }

  .table-layout {
    margin-top: 20px;
    border-left: 1px solid #DCDFE6;
    border-top: 1px solid #DCDFE6;
  }

  .table-cell {
    height: 60px;
    line-height: 40px;
    border-right: 1px solid #DCDFE6;
    border-bottom: 1px solid #DCDFE6;
    padding: 10px;
    font-size: 14px;
    color: #606266;
    text-align: center;
    overflow: hidden;
  }

  .table-cell-title {
    border-right: 1px solid #DCDFE6;
    border-bottom: 1px solid #DCDFE6;
    padding: 10px;
    background: #F2F6FC;
    text-align: center;
    font-size: 14px;
    color: #303133;
  }
</style>

