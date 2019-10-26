<template>
    <el-row class="menu_page">
         <el-col>
             <el-menu
                mode="vertical"
                background-color="#324057"
                text-color="#fff"
                active-text-color="yellow" 
                class="el-menu-vertical-demo">
                <router-link to="/home">
                    <el-menu-item index="0">
                        <i class="el-icon-mobile-phone"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                </router-link>
                <template  v-for="item in items" >
                    <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.name}}</span>
                        </template>
                        <router-link v-for="(citem,cindex) in item.children" 
                            :to="citem.path" :key="cindex">
                            <el-menu-item 
                                :index='citem.path'>
                                <span slot="title">{{citem.name}}</span>
                            </el-menu-item> 
                        </router-link>
                    </el-submenu>
                    
                </template>
             </el-menu>
         </el-col>
    </el-row>
</template>
<script>
export default {
  name: "leftmenu",
  data() {
    return {
      items: [
				// {
				//   icon: "el-icon-mobile-phone",
				//   name: "销售管理",
				//   path: "sale",
				//   children: [
				// 		{ path: "foundlist", name: "新增销售订单" },
				// 		{ path: "foundlist", name: "新增销售退单" },
				// 		{ path: "orderlist", name: "销售订单明细表" },
				// 		{ path: "order", name: "销售订单总表" },
				// 	]
				// },
				// {
				//   icon: "el-icon-mobile-phone",
				//   name: "下单管理",
				//   path: "sale",
				//   children: [
				// 		{ path: "foundlist", name: "新增生产订单" },
				// 		{ path: "foundlist", name: "生产订单明细表" },
				// 		{ path: "foundlist", name: "生产订单总表" },
				// 	]
				// },
				// {
				//   icon: "el-icon-mobile-phone",
				//   name: "跟单管理",
				//   path: "sale",
				//   children: [
				// 		{ path: "foundlist", name: "收货登记明细表" },
				// 		{ path: "foundlist", name: "客户取件明细表" },
				// 		{ path: "foundlist", name: "出入库总表" },
				// 	]
				// },
				// {
				//   icon: "el-icon-mobile-phone",
				//   name: "支出管理",
				//   path: "fund",
				//   children: [{ path: "foundlist", name: "支出明细表" }]
				// },
				// {
				//   icon: "el-icon-mobile-phone",
				//   name: "综合报表管理",
				//   path: "fund",
				//   children: [
				// 		{ path: "foundlist", name: "客户报表" },
				// 		{ path: "foundlist", name: "业绩报表" },
				// 		{ path: "foundlist", name: "客户预约报表" },
				// 		{ path: "foundlist", name: "进店礼报表" },
				// 		{ path: "foundlist", name: "返利报表" },
				// 		{ path: "foundlist", name: "日营业清单报表" },
				// 		{ path: "foundlist", name: "费用报表" },
						
				// 		]
        // },
        {
          icon: "el-icon-mobile-phone",
          name: "入库单管理",
          path: "order",
          children: [
            { path: "orderdetail", name: "订单详情" },
            { path: "orderlist", name: "订单列表" },
            { path: "ordercreate", name: "新增订单" },

            ]
        },
        {
          icon: "el-icon-mobile-phone",
          name: "出库单管理",
          path: "order",
          children: [
            { path: "orderdetail", name: "订单详情" },
            { path: "orderlist", name: "订单列表" },
            { path: "ordercreate", name: "新增订单" },

            ]
        },
       {
          icon: "el-icon-mobile-phone",
          name: "采购管理",
          path: "order",
          children: [
            { path: "orderdetail", name: "订单详情" },
            { path: "orderlist", name: "订单列表" },
            { path: "ordercreate", name: "新增订单" },

            ]
        },
        {
          icon: "el-icon-mobile-phone",
          name: "库存管理",
          path: "order",
          children: [
            { path: "orderdetail", name: "订单详情" },
            { path: "orderlist", name: "订单列表" },
            { path: "ordercreate", name: "新增订单" },

            ]
        },
        // {
        //   icon: "el-icon-mobile-phone",
        //   name: "催取件管理",
        //   path: "order",
        //   children: [
        //     { path: "orderdetail", name: "订单详情" },
        //     { path: "orderlist", name: "订单列表" },
        //     { path: "ordercreate", name: "新增订单" },

        //     ]
        // },
        // {
        //   icon: "el-icon-mobile-phone",
        //   name: "客户管理",
        //   path: "order",
        //   children: [
        //     { path: "orderdetail", name: "订单详情" },
        //     { path: "orderlist", name: "订单列表" },
        //     { path: "ordercreate", name: "新增订单" },

        //     ]
        // },
        // {
        //   icon: "el-icon-mobile-phone",
        //   name: "合作商家管理",
        //   path: "order",
        //   children: [
        //     { path: "orderdetail", name: "订单详情" },
        //     { path: "orderlist", name: "订单列表" },
        //     { path: "ordercreate", name: "新增订单" },

        //     ]
        // },
				// {
				//   icon: "el-icon-mobile-phone",
				//   name: "报表查询",
				//   path: "statement",
				//   children: [
				// 		{ path: "list010", name: "销售订单明细表" },
				// 		{ path: "list011", name: "日营业清单" },
				// 		{ path: "list012", name: "进店礼表" },
				// 		{ path: "list013", name: "返利表" },
				// 		{ path: "list014", name: "报销费用表" },
				// 		{ path: "list015", name: "催件表" },
				// 		{ path: "list016", name: "客户表" },
				// 		{ path: "list017", name: "资金流水" },
				// 		{ path: "list018", name: "资金流水" },
				// 		{ path: "list019", name: "资金流水" },

						
				// 		]
				// },
        // {
        //   icon: "el-icon-mobile-phone",
        //   name: "系统设置",
        //   path: "demo",
        //   children: [
        //     { path: "demolist01", name: "门店信息 "},
        //     { path: "demolist02", name: "特殊工艺" },
        //     { path: "demolist03", name: "面料信息" },
        //     { path: "demolist04", name: "商品信息" },
        //     { path: "demolist05", name: "分类信息" },

        //   ]
        // },
        // {
        //   icon: "el-icon-mobile-phone",
        //   name: "资金管理",
        //   path: "fund",
        //   children: [{ path: "foundlist", name: "资金流水" }]
        // },
        // {
        //   icon: "el-icon-mobile-phone",
        //   name: "信息管理",
        //   path: "info",
        //   children: [{ path: "infoshow", name: "个人信息" }]
        // }
      ]
    };
  }
};
</script>
<style scoped>
.menu_page {
  position: fixed;
  top: 71px;
  left: 0;
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 180px;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
