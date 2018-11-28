<template>
<div class="searchTit">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">内部管理</el-menu-item>
</el-menu>
  <div class="demo-input-suffix searchBox">
  <el-input
    placeholder="搜索子账号名称"
    v-model="input" class="searchIpt">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>
<div class="authorityContainer">
    <div class="addUser">
<el-row  class="InHeaderTop">
  <el-col :span="24"><div class="grid-content bg-purple-dark" >
      <span class="InHeaderSpan">内部管理</span>
      <el-button type="info" icon="el-icon-plus" class="InHeaderBtn">新建人员</el-button>
      </div>
      </el-col>
</el-row>
<el-row  class="InHeaderBottom">
     <el-col :span="4">
         <div class="grid-content bg-purple-dark">
             <span style="font-size:24px">赵楠</span>
         </div>
      </el-col>
      <el-col :span="18">
         <div class="grid-content bg-purple-dark">
             <span>ssun@creams.io</span>
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
      prop="phone"
      label="赵楠">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
    <el-table-column
     prop="qy"
      label="启用">
        <template slot-scope="scope">
              <el-switch v-model="value"></el-switch>
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
export default {
    name:'Internal',
      data() {
      return {
        activeIndex: '1',
        input: "",
         tableData: [{
          phone: '13080920872',
          name: '赵楠',
          email: '827745311@qq.com'
        }],
        value:true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.antTab{
    background: #fff;
}
.antTab .el-pagination{
    padding: 10px;
    /* float: right */
    text-align:right;
}
.searchTit .el-menu-item.is-active{
     color: #409EFF !important
 }
 .searchTit .el-input__inner {
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
</style>