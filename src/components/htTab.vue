<template>
<el-table :data="tableData3" height="650" border style="width: 100%;text-alig:center" :default-sort = "{prop: '', order: 'descending'}">
    <el-table-column prop="name" label="楼宇名称" width="250">
    </el-table-column>
      <el-table-column prop="id" sortable label="序号" width="100">
    </el-table-column>
    <el-table-column prop="znum" sortable label="租赁数" width="100">
    </el-table-column>
    <el-table-column prop="cname" sortable label="租客" width="200">
    </el-table-column>
    <el-table-column prop="strtime" sortable label="开始日">
    </el-table-column>
    <el-table-column prop="endtime" sortable label="结束日" width="200">
      <template slot-scope="scope">
        {{scope.row.endtime}}
        <httabDialog :httabid="scope.row.id"></httabDialog>   
      </template> 
    </el-table-column>
    <el-table-column prop="uname" label="跟进人" >
    </el-table-column>
  </el-table>
</template>
<script>
import { contractlist } from '@/axios/api' //获取合同列表

import httabDialog from '@/components/hetongAdmin/httabDialog'

export default {
    name:'hdTab',
    components:{
      httabDialog
    },
    data() {
        return{
          tableData3: [],
        }
    },
    props:{
        tablelists:{
            type: Array,
            required: true
        }
    },
    methods: {
    },
    watch:{
        tablelists(val,oldval){
                this.tableData3=val;             
        }
    },
    mounted(){
        contractlist({                         
        }).then(res => {
            if(res.flag == 0){ 
                this.tableData3=res.data;
            } 
        }) 
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
}
.container .el-table th.is-leaf{
  text-align: center
}

</style>


