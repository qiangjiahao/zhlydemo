<template>
    <div class="conTempl">
        <div class="tableBox">
            <div class="ant-row-flex">
                <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark title-box">
                    <div class="header___a9lTT">
                    <p>{{fylx}}</p>
                     <el-button icon="el-icon-plus"  class="ant-btn" @click="open" plain>新增</el-button>
                     <xgdialog v-if="fytag" :visible.sync="fytag" :title="ttt"></xgdialog>
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
                    label="标签名"
                    width="1300px">
                  </el-table-column>
                  <el-table-column
                    prop="operation"
                    label="操作">
                    <template slot-scope="scope">
                    <span  @click="handleDelete(scope.$index, scope.row)" style="cursor:pointer">删除</span>
                    <bjdialog :txt="fylx" :bjid="scope.row.id" :name="scope.row.name"></bjdialog>
                  </template>
                  </el-table-column>
                </el-table>
              </template>
            </div>
        </div>
    </div>
</template>
<script>
import { Listfeetypes } from '@/axios/api' //费用类型列表
import { Expensedeletion } from '@/axios/api' //费用类型删除

import xgdialog from '@/components/profile/xgDialog'
import bjdialog from '@/components/profile/bjDialog'

export default {
    name:'CostTypeTable',
    inject: ['reload'],
    components:{
      xgdialog,bjdialog
    },
     data() {
        return {
          tableData: [],
          fytag: false,
          ttt: '',
          fylx: '费用类型'
        }
      },
       methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
          this.$confirm('确认删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Expensedeletion({   
            id: row.id                                      
          }).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功'
            });
            this.reload();
          }); 
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
       open(){
        this.fytag=true;
        this.ttt=this.fylx;
      }
    },
    mounted(){
      Listfeetypes({                                         
      }).then(res => {
        if (res.flag == 0) {
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


