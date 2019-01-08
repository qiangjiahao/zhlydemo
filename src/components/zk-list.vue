<template>
  <div class="searchTit">
    <div class="searchBox">
      <el-input
        placeholder="搜索租客名"
        v-model="input" class="searchIpt"  @keyup.enter.native="search">
        <i slot="prefix" class="el-input__icon el-icon-search" @click="search"></i>
      </el-input>
      <el-button class="search-button" icon="el-icon-plus" plain @click="openOrderVisible = true">租客</el-button>
      <zkDialog ref="openOrder" v-if="openOrderVisible" :visible.sync="openOrderVisible"></zkDialog>
    </div>
    <!-- <div class="zkTag">
      <span>选择大楼：</span>
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        closable
        :type="tag.type">
        {{tag.name}}
      </el-tag>
      <span class="zkclose">清除选项</span>
    </div> -->
    <zkMsg></zkMsg>
    <zkTable :tablelists="tablelist"></zkTable> 
  </div>
</template>
<script>
import { zkList } from '@/axios/api' //获取租客列表

import zkDialog from '@/components/zukeAdmin/zkDialog'
import zkMsg from '../components/zhlyMsg/zkMsg';
import zkTable from '../components/zk-table';

export default {
  name: "zkList",
  components:{
    zkDialog,zkMsg,zkTable
    },
  data() {
    return {
      input: "",
      // tags: [
      //   { name: "荆棘花众创科技", type: "info" },
      //   { name: "重庆万科", type: "info" },
      //   { name: "aaa", type: "info" }
      // ],
      openOrderVisible: false,
      tablelist: []
    }
  },
  methods:{
    search(){
      zkList({  
      value: this.input                                               
      }).then(res => {
          if(res.flag == 0){      
              this.tablelist=res.data;
          } 
      })
    }
  }
};
</script>

<style>
.searchTit .searchIpt .el-input__inner {
  border: none;
}
.searchTit .el-input__icon {
  color: #333;
  cursor: pointer;
}
.searchTit .el-icon-plus {
  border-right: 1px solid #333;
  padding-right: 5px;
}
.zkTag {
  text-align: left;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid rgba(219, 225, 230, 0.9);
}
.zkTag span {
  font-size: 12px;
  color: #6b809f;
}
.zkTag .el-tag--info {
  border: none;
  background: none;
  padding: 0 12px;
  position: relative;
}
.zkTag .el-tag--info::before {
  content: "/";
  position: absolute;
  right: 10px;
  font-size: 18px;
  right: -8px;
  top: 0px;
  color: #6b809f;
}
.searchBox {
  padding: 5px 20px;
  background: #fff;
  border-bottom: 1px solid rgba(219, 225, 230, 0.9);
  position: relative;
}
.searchBox .search-button {
  padding: 7px 14px;
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
