<template>
    <div class="zk-nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo zk-ul" mode="horizontal">
            <el-menu-item index="1" class="tab" @click="toggleTab('zk-list')">租客列表</el-menu-item>
        </el-menu>
        <div class="searchBox">
            <el-input
                placeholder="搜索租客名"
                v-model="input" class="searchIpt"  @keyup.enter.native="search">
                <i slot="prefix" class="el-input__icon el-icon-search" @click="search"></i>
            </el-input>
            <el-button class="search-button" icon="el-icon-plus" plain @click="openOrderVisible = true">租客</el-button>
            <zkDialog ref="openOrder" v-if="openOrderVisible" :visible.sync="openOrderVisible"></zkDialog>
        </div>
        <zkMsg></zkMsg>
        <zkTable :tablelists="tablelist"></zkTable>
    </div>
</template>
<script>
import { zkList } from '@/axios/api' //获取租客列表

import zkDialog from '@/components/zukeAdmin/zkDialog'
import zkMsg from '@/components/zhlyMsg/zkMsg';
import zkTable from '@/components/zk-table';


export default {
    name: 'lydetails04',
    components:{
        zkDialog,zkMsg,zkTable
    },
    data(){
        return{
            activeIndex: '1',
            input: "",
            openOrderVisible: false,
            tablelist: []
        }
    },
    methods:{
        toggleTab: function(tab) {
            
        },
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
}
</script>
<style>
.zk-ul .el-menu-item{
    width: auto;
}
.zk-ul .el-menu-item:nth-child(1) {
    margin-left: 20px;
}
.zk-ul .el-menu-item.is-active{
    color: #4494f0 !important;
}
.zk-nav .searchIpt .el-input__inner {
  border: none;
}
.zk-nav .el-input__icon {
  color: #333;
  cursor: pointer;
}
.zk-nav .el-icon-plus {
  border-right: 1px solid #333;
  padding-right: 5px;
}
.zk-nav .searchBox {
  padding: 5px 20px;
  background: #fff;
  border-bottom: 1px solid rgba(219, 225, 230, 0.9);
  position: relative;
}
.zk-nav .searchBox .search-button {
  padding: 7px 14px;
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>