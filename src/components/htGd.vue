<template>
<div>
    <div class="titBox">
        <div class="httitle">    
          <div class="grid-content bg-purple-light">
            <el-input
                placeholder="搜索合同"
                v-model="input" class="searchIpt" @keyup.enter.native="search">
                <i slot="prefix" class="el-input__icon el-icon-search" @click="search"></i>
            </el-input>
          </div>
        </div>
    </div>
    <div class="container">
        <div class="titleBox">
            <el-row>
                <el-col :span="22"><div class="grid-content bg-purple" style="font-size:14px;color:rgba(0,0,0,.65)">归档合同</div></el-col>
                <el-col :span="2" style="text-align:right"><div class="grid-content bg-purple">
                    <el-dropdown>
                        <i class="el-icon-more" style="cursor:pointer"></i>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>列表导出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    </div>
                </el-col>
            </el-row>
        </div>
        <htTab :tablelists="tablelist"></htTab>  
   </div>
</div>
</template>
<script>
import { contractlist } from '@/axios/api' //获取合同列表

import htTab from '../components/htTab'; //引入搜索和标签组件
export default {
    name:'htGd',
    components:{
        htTab
    },
    data() {
        return {
            input: "",
            tablelist: []
        }
    },
    methods:{
        search(){
            contractlist({  
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
.titBox .el-button{
display: none;
}
.container{
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px 20px;
    margin-top: 20px;
    /* border: 1px solid #e0e0e0; */
}
.container .el-table--border{
    border: 1px solid #e0e0e0;
}
.titleBox{
    text-align: left;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #e0e0e0;
    background: #fff;
    border-bottom: none;
    border-radius: 5px 5px 0px 0px
}
.titleBox .el-checkbox__label{
font-size: 12px;

}
</style>
