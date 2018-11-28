<template>
    <div>
    <searchTit :visible.sync='visible'></searchTit>  
    <zkMsg></zkMsg>
   <div class="conBox">
    <div class="titleBox">
        <el-row>
  <el-col :span="18"><div class="grid-content bg-purple" style="font-size:14px;color:rgba(0,0,0,.65)">租客管理</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">  <el-checkbox  style="color:rgba(0,0,0,.65);font-size:12px;">仅显示在租租客</el-checkbox></div></el-col>
  <el-col :span="2" style="text-align:right"><div class="grid-content bg-purple">
       <el-dropdown>
         <i class="el-icon-more" style="cursor:pointer"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>列表导出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div></el-col>
</el-row>
    </div>
    <el-table :data="tableData3" height="650" border style="width: 100%;text-alig:center" :default-sort = "{prop: '', order: 'descending'}">
    <el-table-column prop="Zkname" label="租客名" width="300">
    </el-table-column>
      <el-table-column prop="number" label="证件号码" width="220">
    </el-table-column>
    <el-table-column prop="fenlei" label="行业分类" width="100">
    </el-table-column>
    <el-table-column prop="Lyname" label="楼宇名" width="300">
    </el-table-column>
    <el-table-column prop="name" label="法人" width="150">
    </el-table-column>
    <el-table-column prop="money"  label="注册资本/万" width="150">
    </el-table-column>
     <el-table-column prop="date"  sortable label="成立日期" width="200">
    </el-table-column>
    <el-table-column prop="dateTime" label="营业期限" width="200">
    </el-table-column>
    <el-table-column prop="HzTime" label="核准日期" width="200">
    </el-table-column>
    <el-table-column prop="tips" label="标签" width="100">
         <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.tips }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column prop="phone" label="联系人" width="150">
    </el-table-column>
  </el-table>
   </div>
    </div>
</template>
<script>
import searchTit from '../components/searchTit'; //引入搜索和标签组件
import zkMsg from '../components/zhlyMsg/zkMsg';

export default {
  name: "zkList",
  components:{
   searchTit,zkMsg
    },
  data() {
    return {
      visible: true,
      tableData3: [{
          date: '2016-05-03',
          number:'913301857544204076',
          fenlei:'-',
          Zkname:'赵楠',
          dateTime:'2031-06-20',
          name: '王小虎',
          Lyname:'南京研创园',
          HzTime:'2031-06-20',
          money:'24350',
          tips:'政府扶持',
          phone: '13125467896'
        },{
          date: '2016-05-03',
          number:'913301857544204076',
          fenlei:'-',
          Zkname:'赵楠',
          dateTime:'2031-06-20',
          name: '王小虎',
          Lyname:'南京研创园',
          HzTime:'2031-06-20',
          money:'24350',
          tips:'百强',
          phone: '13125467896'
        },{
          date: '2016-05-03',
          number:'913301857544204076',
          fenlei:'-',
          Zkname:'赵楠',
          dateTime:'2031-06-20',
          name: '王小虎',
          Lyname:'南京研创园',
          HzTime:'2031-06-20',
          money:'24350',
          tips:'国企',
          phone: '13125467896'
        }]
    };
  },
};
</script>
<style>
.conBox .el-table__row td{
  text-align: center
}
.conBox .el-table th.is-leaf{
  text-align: center
}
.titleBox{
    text-align: left;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #e0e0e0;
    background: #fff;
    border-bottom: none;
    border-radius: 5px 5px 0px 0px
}
.titleBox .el-checkbox__label{
font-size: 12px;

}
.zkclose {
  color: #108ee9 !important;
  cursor: pointer;
  margin-left: 10px;
}

.conBox{
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px 20px;
    margin-top: 20px;
    /* border: 1px solid #e0e0e0; */
}
.conBox .el-table--border{
    border: 1px solid #e0e0e0;
}
</style>
