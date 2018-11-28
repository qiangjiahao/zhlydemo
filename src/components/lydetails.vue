<template>
    <el-container class="lydetails">
        <el-header>
            <div class="header-top">
                <div class="lydetails-logo" @click="back"></div>
                <el-menu :default-active="activeIndex01" router class="el-menu-demo nav-ul01" mode="horizontal" background-color="#e9eaeb" text-color="#4a5267">
                    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" class="nav_li">
                        {{ item.navItem }}
                    </el-menu-item>
                </el-menu>
                <div class="grid-content bg-purple" style="text-align:right">
                    <!--问卷调查 -->
                    <el-dropdown>
                        <i class="el-icon-document" style="margin-right: 30px"></i>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>问卷调查</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <!--下载中心-->
                    <el-dropdown>
                        <i class="el-icon-download" style="margin-right: 30px"></i>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>下载中心</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <!-- 个人中心 -->
                    <el-dropdown>
                        <i class="fa fa-user-o" style="margin-right: 30px"></i>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="header-content">
                <el-row :gutter="20" style="display:flex;align-items: center;">
                    <el-col :span="4" style="width:180px;"><img src="../assets/login.jpg" style="width:160px;"></el-col>
                    <el-col :span="4" style="height: 120px; min-width: 300px;text-align: left;">
                        <p style="font-size: 32px; margin-top: 10px;">中青大厦</p>
                        <p style="color: rgb(61, 67, 85);margin-top: 20px;font-size: 14px;">
                            <span>北京市</span>,<span>市辖区</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span class="ckxq" @click="value1 = true" v-if="isif">查看详情</span>                              
                            <Drawer :closable="true" v-model="value1" width="1000" class="ct">
                                <div slot="header" class="drawer-header">楼宇信息</div>
                                <bjDialog></bjDialog>
                                <div class="xx">
                                    <div class="xx01">
                                        <div class="xx01-top">楼宇信息</div>
                                        <ul class="xx01-buttom">
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                            <li>
                                                <div>省份</div>
                                                <div>北京市</div>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                            </Drawer>                              
                        </p>
                    </el-col>
                    <el-col :span="16" style="min-width: 750px;text-align: left;">
                        <pmMsg :is="isMsg"></pmMsg>
                    </el-col>
                </el-row>
            </div>    
            <div class="header-botton">
                <el-menu :default-active="activeIndex02" router class="el-menu-demo List_nav" mode="horizontal">
                    <el-menu-item v-for="(item,i) in List_nav" :key="i" :index="item.name" @click="qh(item.sub,i)">
                        {{ item.navItem }}
                    </el-menu-item>
                </el-menu>
                <router-view/>
            </div>
        </el-header>
        <el-main>
            
        </el-main>
    </el-container>
</template>
<script>
import Vue from 'vue'
import { Drawer } from 'iview';
Vue.component('Drawer', Drawer);
import pmMsg from '@/components/zhlyMsg/pmMsg'
import fyMsg from '@/components/zhlyMsg/fyMsg'
import zsMsg from '@/components/zhlyMsg/zsMsg'
import zkMsg from '@/components/zhlyMsg/zkMsg'
import bjDialog from '@/components/louyuAdmin/bjDialog'

export default {
    name: 'lydetails',
    components:{
        pmMsg,fyMsg,zsMsg,zkMsg,bjDialog
    },
    data(){
        return{
            activeIndex01:'',
            navList:[
                {name:'/',navItem:'集合'},
                {name:'/page1',navItem:'工作流'},
            ],
            activeIndex02:'/pmmap',
            List_nav:[
                {name:'/pmmap',navItem:'剖面图',sub:'pmMsg'},
                {name:'/fymanage',navItem:'房源管理',sub:'fyMsg'},
                {name:'/zsmanage',navItem:'招商管理',sub:'zsMsg'},
                {name:'/zkmanage',navItem:'租客管理',sub:'zkMsg'},
                {name:'/htmanage',navItem:'合同管理',sub:''},
            ],
            value1: false,
            isMsg: 'pmMsg',
            isif: true
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        qh(sub,i){
            this.isMsg=sub;
            if( i!==0 ){
                this.isif=false;
            }
        }
    }
}
</script>
<style>
.lydetails .el-header{
    padding: 0;
    height: auto !important;
}
.lydetails .el-header .header-top{
    width: 100%;
    overflow: hidden;
    background-color: #e9eaeb;
}
.lydetails .el-header .header-top .lydetails-logo{
    width: 90px;
    height: 50px;
    background: url('../assets/logo.png') no-repeat;
    background-size: 100% 100%; 
    float: left; 
    cursor: pointer;
}
.lydetails .el-header .header-top .nav-ul01{
    float: left;
    border-bottom: 0px;
}
.lydetails .el-header .header-top .nav-ul01 .nav_li{
    width: 160px;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.lydetails .el-header .header-top .nav-ul01 .nav_li:focus, .nav_li:not(.is-disabled):hover{
    background-color:#f2f3f5 !important;
}
.lydetails .el-header .header-top .bg-purple{
    height: 50px;
    line-height: 50px;
}
.lydetails .el-header .header-top .bg-purple i{
    font-size: 18px;
    font-weight:400;
    color:#000;
    cursor: pointer;
}
.lydetails .el-header .header-content{
    background-color: #fff;
    padding: 20px;
}
.lydetails .el-header .header-content .ckxq{
    cursor: pointer;
    font-size: 14px;
    color: #4494f0;
}
.lydetails .el-header .header-botton .el-menu.el-menu--horizontal{
    border-bottom: 1px solid #edf0f2;
}
.lydetails .el-header .header-botton .List_nav .is-active{
    border-bottom:2px solid #4494f0 !important;
    position: relative;
    color:#4494f0 !important;
}
.lydetails .el-header .header-botton .List_nav .el-menu-item{
    width: auto;
    height: 50px;
    line-height: 50px;
}
.lydetails .el-header .header-botton .List_nav .el-menu-item:nth-child(1){
    margin-left: 20px;
}
.lydetails .el-header .header-botton .List_nav .el-menu-item:hover{
    border-bottom: 2px solid #4494f0 !important;
}
.ct .ivu-drawer-header{
    height: 51px;
    line-height: 1.5;
}
.ct .drawer-header{
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #1a2838;
}
.ct .ivu-drawer-close{
    left: 16px;
} 
.ct .ivu-drawer-body{
    padding: 0;
}
.ct .xx{
    background-color: #f4f4f4;
    width: 100%;
    height: calc(100% - 51px);
    box-sizing: border-box;
    padding: 20px;
}
.ct .xx .xx01{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
}
.ct .xx .xx01 .xx01-top{
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.ct .xx .xx01 .xx01-buttom{
    padding: 20px;
    overflow: hidden;
}
.ct .xx .xx01 .xx01-buttom li{
    width: 25%;
    float: left;
    padding: 0 10px 7px 0;
    margin-bottom: 24px;
    margin: 5px 0;
}
.ct .xx .xx01 .xx01-buttom li div:first-child{
    border-right: 1px solid rgb(224, 224, 224);
    padding-right: 10px;
    width: 100%;
    min-height: 22px;
    font-size: 12px;
    color: #7085a1;
    line-height: 18px;
}
.ct .xx .xx01 .xx01-buttom li div:last-child{
    border-right: 1px solid rgb(224, 224, 224);
    padding-right: 10px;
    width: 100%;
    color: #353b4b;
    font-size: 14px;
}
</style>


