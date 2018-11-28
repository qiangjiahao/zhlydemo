<template>
<el-table :data="tableData3" height="650" border style="width: 100%;text-alig:center" :default-sort = "{prop: '', order: 'descending'}">
    <el-table-column prop="lyname" label="楼宇名称" width="250">
    </el-table-column>
      <el-table-column prop="number" sortable label="序号" width="100">
    </el-table-column>
    <el-table-column prop="zlnumber" sortable label="租赁数" width="100">
    </el-table-column>
    <el-table-column prop="zkname" sortable label="租客" width="200">
          <template slot-scope="scope">
        <span>{{ scope.row.zkname }}</span>
               <el-button size="mini" class="zknameBtn">家</el-button>
      </template>
    </el-table-column>
    <el-table-column prop="starttime" sortable label="开始日">
    </el-table-column>
    <el-table-column prop="endtime" sortable label="结束日" width="200">
    </el-table-column>
    <el-table-column prop="gjname" label="跟进人" >
    </el-table-column>
    <el-table-column prop="zlPrice" label="租赁条款单价" >
         <template slot-scope="scope">
        <p>{{ scope.row.zlPrice }}
            <el-button @click="handleEdit(scope.$index, scope.row)"  icon="el-icon-edit" class="tabBtn btnHt">编辑合同</el-button>
        </p>
        
      </template>
    </el-table-column>
    <el-table-column prop="wyPrice" label="物业条款单价" >
    </el-table-column>
   <el-table-column prop="money" label="总计租金">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
    name:'hdTab',
    data() {
        return{
              tableData3: [{
          lyname:'文创集团',
          number:'2001',
          zlnumber:'300.00 m²',
          dateTime:'2031-06-20',
          zkname:'南京研创园',
          starttime:'2031/06/20',
          endtime:'2016/08/21(已到期807天)',
          gjname:'赵楠',
          zlPrice:'2.00 元/㎡·天',
          wyPrice:'1.50 元/㎡·月',
          money:'1,131,500.00元',
        },{
          lyname:'高科集团',
          number:'2002',
          zlnumber:'300.00 m²',
          dateTime:'2031-06-20',
          zkname:'南京研创园',
          starttime:'2031/06/20',
          endtime:'2016/08/21(已到期807天)',
          gjname:'赵楠',
          zlPrice:'2.00 元/㎡·天',
          wyPrice:'1.50 元/㎡·月',
          money:'1,131,500.00元',
        }]
        }
    },
    methods: {
        handleEdit(index, row) {
        console.log(index, row);
      }
    }
}
</script>
<style>
.container .tabBtn{
display: none;
}
.container .el-table__row:hover .tabBtn{
display: block
}
.container .el-table__row td{
  text-align: center;
  /* padding: 0px 0px; */
}
.container .el-table th.is-leaf{
  text-align: center
}
.zknameBtn{
        padding: 3px 10px;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid #6b809f;
    color: #6b809f;
    margin: 0 auto;
}
</style>


