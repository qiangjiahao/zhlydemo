<template>
    <div class="zs-table">
      <div class="table-header">
          <div>可招商</div>
          <i class="el-icon-more"></i>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
        height="650"
        :default-sort = "{prop: 'lc', order: 'descending'}">
        <el-table-column
          type="selection"
          width="62">
        </el-table-column>
        <el-table-column
          prop="name"
          label="客户"
          width="289">
        <template slot-scope="scope">
          <span style="color: #353b4b;font-size: 14px;display:block;height:16px;line-height:16px;margin-bottom: 4px;">{{ scope.row.name }}</span>
          <span style="color: #7085a1;font-size: 12px;margin-left: 4px;display:block;height:16px;line-height:16px;">跟进人:{{ scope.row.gjr }}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="lfsj"
          label="来访时间"
          sortable
          width="194">
        </el-table-column>
        <el-table-column
          prop="zxbz"
          label="最新备注"
          sortable
          width="194">
        <template slot-scope="scope">
          <span style="color: #353b4b;font-size: 14px;display:block;height:16px;line-height:16px;margin-bottom: 4px;">{{ scope.row.gjr }}<i style="color:red;">●</i>{{ scope.row.lfsj }}</span>
          <span style="color: #7085a1;font-size: 12px;margin-left: 4px;display:block;height:16px;line-height:16px;">{{scope.row.zxbz}}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="khzt"
          label="客户状态"
          sortable
          width="194">
          <template slot-scope="scope">
            <span>{{scope.row.khzt}}</span><i class="el-icon-arrow-down" style="margin-left: 8px;"></i>
          </template>
        </el-table-column>
        <el-table-column
          prop="qd"
          label="渠道"
          width="194">
        </el-table-column>
        <el-table-column
          prop="xqmjd"
          label="需求面积段"
          width="195">
        </el-table-column>
        <el-table-column
          prop="xqgwd"
          label="需求工位段"
          sortable
          width="195">
        </el-table-column>
        <el-table-column
          prop="hy"
          label="行业"
          width="194">
        </el-table-column>
        <el-table-column
          prop="yjqysj"
          label="预计签约时间"
          width="194">
        </el-table-column>
        <el-table-column
          prop="gjr"
          label="跟进人"
          width="195">
        </el-table-column>
      </el-table>
    </div>
</template>
<script>
export default {
    name: 'zsOnetable',
    data(){
        return{
            tableData: [{
                name: '西安希网',
                lfsj: '2018/10/30',
                zxbz: '跟进',
                khzt: '潜在客户',
                qd: '电话',
                xqmjd: '300-350㎡',
                xqgwd: '',
                hy: '网络科技',
                yjqysj: '2017-11-30',
                gjr: '111111'
                }, {
                name: '天涯海角',
                lfsj: '2018/06/30',
                zxbz: '第二次来',
                khzt: '意向客户',
                qd: '上门',
                xqmjd: '300-500㎡',
                xqgwd: '',
                hy: '教育',
                yjqysj: '2017-12-30',
                gjr: '111111'
                }, {
                name: '西安希网',
                lfsj: '2018/10/30',
                zxbz: '跟进',
                khzt: '潜在客户',
                qd: '电话',
                xqmjd: '300-350㎡',
                xqgwd: '',
                hy: '网络科技',
                yjqysj: '2017-11-30',
                gjr: '111111'
                }, {
                name: '西安希网',
                lfsj: '2018/10/30',
                zxbz: '跟进',
                khzt: '潜在客户',
                qd: '电话',
                xqmjd: '300-350㎡',
                xqgwd: '',
                hy: '网络科技',
                yjqysj: '2017-11-30',
                gjr: '111111'
                }
            ]     
        }
    }
}
</script>
<style>
.zs-table{
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
}
.zs-table .table-header{
    font-size: 14px;
    height: 50px;
    background: #fff;
    padding: 0 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-bottom: 0px;
}
.zs-table .table-header i{
    font-size: 16px;
}
.zs-table .el-table thead tr th{
    font-size: 12px;
    color: #7085a1;
    font-weight: normal; 
    border-bottom: 1px solid #e0e0e0 !important;
    padding: 0;
}
.zs-table .el-table thead tr th .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.zs-table .el-table tbody tr{
    padding: 10px 0;
    background: #fff;
    color: #353b4b;
    font-size: 14px;
}
.zs-table .el-table tbody tr td{
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
}
.zs-table .el-table tbody tr td .cell{
    padding: 0 20px;
}
</style>



