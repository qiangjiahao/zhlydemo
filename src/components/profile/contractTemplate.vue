<template>
    <div class="conTempl">
        <div class="tableBox">
            <div class="ant-row-flex">
                <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark title-box">
                    <div class="header___a9lTT">
                    <p>{{htmb}}</p>
                     <el-button icon="el-icon-plus"  class="ant-btn" @click="open" plain>模板</el-button>
                     <htmbDialog v-if="htmbdialog" :visible.sync="htmbdialog"></htmbDialog>
                    </div>                    
                </div></el-col>
                </el-row>
            </div>
            <!-- 表格 -->
            <div class="ant-table-wrapper">
                 <template>
              <el-table
                :data="tableData"
                style="width: 100%;background:#fafafa">
                <el-table-column
                  prop="name"
                  label="模板名称"
                  width="1300px">
                </el-table-column>
                <el-table-column
                  prop="operation"
                  label="操作">
                  <template slot-scope="scope">
                  <el-button size="mini" icon="el-icon-download" @click="handleEdit(scope.row)">下载</el-button>
                  <el-button size="mini" icon="fa fa-eye" @click="handleOpen(scope.row)">预览</el-button>
                  <el-button size="mini" icon="el-icon-delete" @click="handleDelete(scope.row)">删除</el-button>
                </template>
                </el-table-column>
              </el-table>
            </template>
            </div>
        </div>
    </div>
</template>
<script>
import { Getwordlist } from '@/axios/api' //获取word列表
import { Deletewordlist } from '@/axios/api' //删除word列表


import htmbDialog from '@/components/profile/htmbDialog'
export default {
    name:'contractTemplate',
    inject: ['reload'],
    components:{
      htmbDialog
    },
     data() {
        return {
          tableData: [],
          mbtag: false,
          ttt: '',
          htmb: '合同模板',
          htmbdialog: false
        }
      },
      methods: {
        handleEdit(row) {
          window.location.href = row.down;
        },
        handleDelete(row) {
          Deletewordlist({    
            id: row.id                                         
          }).then(res => {
              if(res.flag == 0){  
                this.$message({
                    message: res.data.msg,
                    type: 'success'
                });
                this.reload();
              }else{
                this.$message({
                    message: res.data.msg,
                    type: 'error'
                });
              }
          }); 
        },
        handleOpen(row){
          window.open(row.look);
        },
        open(){
          this.htmbdialog=true;
        }
      },
    mounted(){
      Getwordlist({                                             
      }).then(res => {
          if(res.flag == 0){  
              this.tableData=res.data;
          } 
      }); 
    }
}
</script>
<style scoped>
    .conTempl{
        padding: 20px;
        background: #fff;
    }
    .tableBox{
            width: 100%;
    border: 1px solid #e0e0e0;
    border-top: 0 solid #e0e0e0;
    background: #fff;
    border-bottom: 0;
    border-radius: 4px;
    }
    .el-row{
            background: rgb(255, 255, 255);
    border-top: 1px solid rgb(224, 224, 224);
        border-radius: 4px;
    }
    .title-box{
            font-size: 14px;
    height: 50px;
    background: #fff;
    display: flex;
    align-items: center;
    font-weight: 500;
    padding-left: 20px;
    border-radius: 4px;
    }
    .header___a9lTT {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 10px;
    width: 100%;
    }
    .header___a9lTT{
        font-size: 16px
    }
    .ant-btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    line-height: 1.15;
    padding: 0 15px;
    font-size: 12px;
    border-radius: 4px;
    height: 28px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    position: relative;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border: 1px solid #d9d9d9;
    margin-top: 10px
}
.ant-table-wrapper{
    border-top: 1px solid rgb(224, 224, 224);
}

</style>


