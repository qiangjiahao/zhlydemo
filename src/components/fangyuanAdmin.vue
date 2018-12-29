<template>
    <div class="fy">
        <div class="fy-public">
            <el-menu :default-active="isselect" class="el-menu-demo" mode="horizontal">
                <el-menu-item v-for="(item,i) in fy_nav" :key="i" :index="item.sub" @click="fytabs(item.sub)">{{item.navItem}}</el-menu-item>
                <el-button plain class="fy-button" icon="el-icon-plus" @click="dialogFormVisible = true">房源</el-button>
                <fyDialog ref="openOrder" v-if="dialogFormVisible" :visible.sync="dialogFormVisible"></fyDialog>
            </el-menu>
            <el-input
                class="fy-input"
                placeholder="搜索房号"
                prefix-icon="el-icon-search">
            </el-input>
            <fyMsg></fyMsg>
        </div>
        <fy01 :is="currentTab" keep-alive></fy01> 
    </div> 
      
</template>
<script>
import fyMsg from '@/components/zhlyMsg/fyMsg'
import fy01 from '@/components/fangyuanAdmin/fy01'
import fy02 from '@/components/fangyuanAdmin/fy02'
import fy03 from '@/components/fangyuanAdmin/fy03'
import fyDialog from '@/components/fangyuanAdmin/fyDialog'

export default {
    name:'fangyuanAdmin',
    data(){
        return {
            isselect: 'fy01',
            fy_nav:[
                {sub:'fy01',navItem:'可招商'},
                {sub:'fy02',navItem:'已租房源'},
                {sub:'fy03',navItem:'所有房源'}
            ],
            currentTab: 'fy01',
            dialogFormVisible:false 
        }
    },
    methods: {
        fytabs(sub){
            this.currentTab=sub;
        }
    },
    components:{
        fyMsg,fy01,fy02,fy03,fyDialog
    }
}
</script>
<style>
.fy-button{
    float: right;
    font-size: 14px;
    text-align: center;
    color: #585858;
    border-radius: 4px;
    border: .6px solid rgba(130,134,146,.6);
    margin-top: 6px;
    margin-right: 20px;
    padding: 0 15px;
    height: 28px;
}
.fy-public .el-menu-item{
    width: auto;
    height: 40px;
    line-height: 40px;
}
.fy-public .el-menu-item:nth-child(1){
    margin-left: 20px;
}
.fy-public .fy-input input{
    border: 0;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    padding-left: 64px !important;
    border-bottom: 1px solid #edf0f2;
}
.fy-public .fy-input span i{
    width: 92px;
    font-size: 16px;
    color: #6f7e95;
}
.fy .fy-table{
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
}
.fy .table-header{
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
.fy .table-header i{
    font-size: 16px;
}
.fy .el-table thead tr th{
    font-size: 12px;
    color: #7085a1;
    font-weight: normal; 
    border-bottom: 1px solid #e0e0e0 !important;
    padding: 0;
}
.fy .el-table thead tr th .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.fy .el-table tbody tr{
    padding: 10px 0;
    background: #fff;
    color: #353b4b;
    font-size: 14px;
}
.fy .el-table tbody tr td{
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
}
.fy .el-table tbody tr td .cell{
    padding: 0 20px;
}
.fy .fy-table .el-table__row{
  cursor: pointer;
}
</style>
