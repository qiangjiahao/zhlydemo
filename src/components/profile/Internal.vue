<template>
<div class="searchTit">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">内部管理</el-menu-item>
</el-menu>
  <div class="demo-input-suffix searchBox">
  <el-input
    placeholder="搜索子账号名称"
    v-model="input" class="searchIpt"  @keyup.enter.native="search">
    <i slot="prefix" class="el-input__icon el-icon-search" @click="search"></i>
  </el-input>
</div>
<div class="authorityContainer">
    <div class="addUser">
<el-row  class="InHeaderTop">
  <el-col :span="24"><div class="grid-content bg-purple-dark" >
      <span class="InHeaderSpan">内部管理</span>
      <el-button type="info" icon="el-icon-plus" class="InHeaderBtn" @click="intdialog=true">新建人员</el-button>
      <el-dialog title="新建人员" :visible.sync="intdialog" width="600px">
        <el-form :model="form" ref="form" :rules="rules" class="demo-ruleForm" hide-required-asterisk>
          <div class="el-div">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="tel">
              <el-input v-model="form.tel" autocomplete="off"></el-input>
            </el-form-item>
          </div>
          <div class="el-div">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pw">
              <el-input type="password" v-model="form.pw" autocomplete="off"></el-input>
            </el-form-item>
          </div>     
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="intdialog = false">取 消</el-button>
          <el-button type="primary" @click="save('form')">确 定</el-button>
        </div>
      </el-dialog>
      </div>
      </el-col>
</el-row>
<el-row  class="InHeaderBottom">
     <el-col :span="4">
         <div class="grid-content bg-purple-dark">
             <span style="font-size:24px">{{name}}</span>
         </div>
      </el-col>
      <el-col :span="18">
         <div class="grid-content bg-purple-dark">
             <span>{{email}}</span>
         </div>
      </el-col>
      <el-col :span="2">
         <div class="grid-content bg-purple-dark">
                 <el-button>本人权限</el-button>
         </div>
      </el-col>
</el-row>
    </div>
     <div class="antTab" style="margin-top:20px">
  <template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="电话">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
    <el-table-column
     prop="qy"
      label="启用">
        <template slot-scope="scope">
              <el-switch v-model="scope.row.status" @change="zt(scope.row,scope.row.status)"></el-switch>
      </template>
    </el-table-column>
    <el-table-column
     prop="edit"
      label="操作">
        <template slot-scope="scope">
             <span>查看</span>
      </template>
    </el-table-column>
  </el-table>
</template>
<el-pagination
  background
  layout="prev, pager, next"
  :total="1">
</el-pagination>
     </div>
</div>
</div>
</template>
<script>
import { addadmin } from '@/axios/api' //添加管理员
import { Getadministratorlist } from '@/axios/api' //获取管理员列表
import { Modifyadministratorstatus } from '@/axios/api' //修改管理员状态
import { Getuserinformation } from '@/axios/api' //获取用户信息

export default {
    name:'Internal',
    inject: ['reload'],
    data() {
      return {
        activeIndex: '1',
        input: "",
         tableData: [],
        value:true,
        intdialog: false,
        form:{
          name: '',
          tel: '',
          pw: '',
          email: ''
        },
        rules: {        
          name: [{ required: true, message: '请输入姓名', trigger: 'change' }],
          tel: [{ required: true, message: '请输入电话', trigger: 'change' }],
          email: [{ required: true, message: '请输入邮箱', trigger: 'change' }],
          pw: [{ required: true, message: '请输入密码', trigger: 'change' }]
        },
        name: '',
        email: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        
      },
      save(formName) {  
         this.$refs[formName].validate((valid) => {
          if (valid) {
            addadmin({  
              name: this.form.name, 
              tel: this.form.tel, 
              email: this.form.email, 
              pw: this.form.pw,                                         
            }).then(res => {
              if (res.flag == 0) {
                this.$message({
                  message: '保存成功',
                  type: 'success'
                }); 
                this.reload();
              } else {
                this.$message({
                    message: res.data.msg,
                    type: 'error'
                  });  
              }
            });
          } else {
            return false;
          }
        });     
      },
      zt(row,status){
        Modifyadministratorstatus({  
          id: row.id,
        }).then(res => {
          console.log(JSON.stringify(res))
          if(res.flag == 0){
            this.$message({
              message: res.data.msg,
              type: 'success'
            }); 
          }else{
            this.$message({
              message: res.data.msg,
              type: 'error'
            }); 
            row.status=!status;
          }
        });
      },
      search(){
        Getadministratorlist({  
          type: '2',
          value: this.input                                               
        }).then(res => {
            if(res.flag == 0){    
                for (const key in res.data) {
                  if (res.data[key].status=="0") {
                    res.data[key].status=true;
                  }else{
                    res.data[key].status=false
                  }
                }
                this.tableData=res.data;
            } 
        })
      }
    },
    mounted(){
      Getadministratorlist({  
        type: '2'                                         
      }).then(res => {
        if(res.flag == 0){ 
          for (const key in res.data) {
            if (res.data[key].status=="0") {
              res.data[key].status=true;
            }else{
              res.data[key].status=false
            }
          }
          this.tableData=res.data;
        }
      });
      Getuserinformation({                                     
      }).then(res => {
      if (res.flag == 0) {
              this.name = res.data.name;
              this.email = res.data.email;
          } 
      });
    }
  }
</script>     

<style>
.antTab{
    background: #fff;
}
.antTab .el-pagination{
    padding: 10px;
    text-align:right;
}
.searchTit .el-menu-item.is-active{
     color: #409EFF !important
 }
 .searchTit .searchIpt .el-input__inner {
  border: none;
}
.searchTit .el-input__icon {
  color: #333;
}

.authorityContainer{
        padding: 30px 20px;
}
.addUser{
    background-color: #fff;
}
.InHeaderTop{
    border-bottom: 1px solid #dbe2e7;
    padding: 20px;
    position: relative;
}
.InHeaderBottom{
    padding: 0 20px;
}
.InHeaderBottom .el-col-18{
    padding-top: 10px
}
.InHeaderBottom button{
    width: 70px;
    height: 20px;
    border-color: #4494f0;
    color: #4494f0;
    font-size: 10px;
    padding: 0;
    margin-top: 10px;
    margin-left: 45px
}
.addUser .grid-content{
    padding: 20px
}
.InHeaderTop .InHeaderSpan{
    height: 22px;
    color: #919cb6;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
}
.InHeaderTop .InHeaderBtn{
    width: 105px;
    height: 30px;
    border-color: #25c88f;
    background-color: #25c88f;
    line-height: 30px;
    padding: 0;
    position: absolute;
    right: 20px;
    top: 35px;
    border-right: none;
    padding-right: none;
}
.searchTit .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.searchTit .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.searchTit .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.searchTit .el-dialog__body .demo-ruleForm{
    padding: 20px;
}
.searchTit .el-dialog__body .demo-ruleForm label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.searchTit .el-dialog__body .demo-ruleForm .el-form-item .el-form-item__content{
    line-height: 30px;
}
.searchTit .el-dialog__body .demo-ruleForm .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}
.searchTit .el-dialog__body .demo-ruleForm .el-form-item .el-select{
    width: 100%;
}
.searchTit .el-dialog__body .demo-ruleForm .el-form-item .el-select .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}
.searchTit .el-dialog__body .demo-ruleForm .el-div{
  display: flex;
  justify-content: space-between;
}
.searchTit .el-dialog__body .demo-ruleForm .el-div .el-form-item{
  width: calc(50% - 9px);
}
.searchTit .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.searchTit .el-dialog__footer .el-button{
    padding: 10px 30px;
}
</style>