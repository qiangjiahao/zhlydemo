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
            prop="name"
            label="联系人"
            width="262">
            </el-table-column>
            <el-table-column
            prop="lxfs"
            label="联系方式"
            sortable
            width="291">
            </el-table-column>
            <el-table-column
            prop="sq"
            label="商圈"
            sortable
            width="262">
            </el-table-column>
            <el-table-column
            prop="qdlx"
            label="渠道类型"
            sortable
            width="262">
            </el-table-column>
            <el-table-column
            prop=""
            label="带看量"
            width="262">
            </el-table-column>
            <el-table-column
            prop="zxdksj"
            label="最新带看时间"
            sortable
            width="264">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'zsTwotable',
    data(){
        return{
            tableData: [{
                name: '小凡',
                lxfs: '18591770409',
                sq: '长河商圈',
                qdlx: '',
                dkl: '0',
                zxdksj: '2017-11-30'
                }, {
                name: '马佳',
                lxfs: '15829088129',
                sq: '彩虹城商圈',
                qdlx: '自由经纪人',
                dkl: '1',
                zxdksj: '2017-01-30'
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


