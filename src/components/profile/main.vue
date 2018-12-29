<template>
  <div style="width:100%;height:100%;">
       <el-container style="width:100%;height:100%;">
                      <!--头部-->
<el-header class="el-header" style="height:51px;line-height:51px;">
    <el-row :gutter="20">
  <el-col :span="4" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
      <div class="right">
         <el-col :span="1"><div class="grid-content bg-purple"  @click.prevent="collapse"><span><i class="fa fa-outdent" style="cursor:pointer;font-size:16px"></i></span></div></el-col>
  <el-col :span="1" style="float:right;text-align:cenetr">
      <div class="grid-content bg-purple" style="text-align:center;background:#108ee9">
          <!--返回首页 -->
          <i class="fa fa-reply icon"  @click="goback"></i>
      </div>
      </el-col>
      </div>
</el-row>
 </el-header>
  <!--左侧菜单 -->
        <el-aside width="240px" v-show="!collapsed">
            <el-menu :default-active="active" router  background-color="#252834"  class="el-menu-vertical-demo menuUl"
             @open="handleopen" @close="handleclose"  @select="handleSelect"  :default-openeds="openeds" 
             style="border-right:none">
                        <el-menu-item v-for="(item,index) in menuList" :index="item.linkUrl" v-if="!item.children" :key="index" class="MenuLi" @click="selectNav(item.name)">
                            <i :class="item.class"></i>
                             <span  slot="title">{{ item.menuItem }}</span>
                        </el-menu-item>
                        <el-submenu v-for="(item,index) in menuList" :index='item.linkUrl' v-if="item.children" :key="index" class="SubLi">
                            <template slot='title'>
                                <i :class="item.class" ></i>
                                <span >{{ item.menuItem }}</span>
                            </template>
                              <el-menu-item-group v-for="(childItem,index) in item.children"  :key="index">
                            <el-menu-item :index="childItem.linkUrl1" style="text-indent: 40px">
                                {{childItem.name}}
                            </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
             </el-menu>
     
    <div class="boDiv"></div>
  </el-aside>
  <el-container style="max-height:1000px; border: 1px solid #eee;border-top:0px" :class="collapsed?'closeMainBox':'mainBox'">
 <!--中间渲染部分-->
    <el-main>
        <transition name="fade" mode="out-in">
		<router-view/>
		</transition>
    </el-main>
  </el-container>
</el-container>
 </div>
</template>
<script>
import { Islogin } from "@/axios/api"  //验证登录
export default {
  name: "UserIndex",
  data() {
      return {
        sysName:'智慧楼宇',
        collapsed:false,
        active:'/main',
        openeds:[],
         menuList:[
            {linkUrl:'/main',menuItem:'内部管理',class:'el-icon-bell',},
            {linkUrl:'/accountSetting',menuItem:'账户设置',class:'el-icon-setting'},
            {linkUrl:'/',menuItem:'自定义管理',class:'el-icon-edit subIcon',
          children: [
                { linkUrl1: '/fyTag',  name: '房源管理'}, //内部管理
                {linkUrl1:'/htTag',name:'合同标签'},   //合同标签
                // {linkUrl1:'/Termination',name:'退租原因管理'},   // 退租原因管理
                {linkUrl1:'/CostTypeTable',name:'费用类型管理'},    // 费用类型管理
                {linkUrl1:'/tenantTag',name:'租客标签'},     //租客标签
               {linkUrl1:'/customIndustry',name:'行业管理'}       //行业管理
             ]
            },
           {linkUrl:'#',menuItem:'模板管理',class:'el-icon-document subIcon',
          children: [
                { linkUrl1: '/contractTemplate',  name: '合同模板'}, //内部管理
             ]
            },  
        ],
      }
    },
    created(){
        this.active =  this.$route.path
    },
    mounted () {
            // 验证是否登录
            let userInfo = JSON.parse(sessionStorage.getItem('user'));
               let that=this;
        that.username = userInfo.tel
          Islogin({                    
                id: userInfo.id,                              
            }).then(res => {
                if(res.flag != 0){        
                     that.$message({
                      message: '身份验证失败',
                      type: "error",
                      duration: 1000
                    });
                    that.$store.commit('REMOVE_COUNT',userInfo);
                 setTimeout(() => { that.$router.replace("/logins")}, 1000)
                }
            }) 
            //  this.index =  this.$route.path
        },
  methods: {
      handleopen() {
				console.log('handleopen');
			},
			handleclose() {
				console.log('handleclose');
			},
    //折叠导航栏
     handleSelect(key, keyPath) {
      console.log(key);
    },
     selectNav (name) {
        this.isSelect = name;
      },
                goback:function(){
            this.$router.push('/')
            },
			collapse:function(){
			this.collapsed=!this.collapsed;
      }
  }
};
</script>
<style scoped>
.menuUl{
    border-bottom: none;
    background-color: #252834;
}
.SubLi .el-menu-item{
    color: hsla(0,0%,100%,.67)
}
.SubLi .el-menu-item.is-active{
    color: hsla(0,0%,100%,.67);
    background: #ff8d1f !important
}
.SubLi .el-menu-item.is-active:hover{
       color: hsla(0,0%,100%,.67);
    background: #ff8d1f !important
}
.SubLi .el-menu-item:hover{
        color: #fff !important;
    background-color: #252834 !important;
}
.MenuLi{
        height: 58px;
    font-size: 14px;
    line-height: 58px;
    float: none;
    background: #252834;
    color: hsla(0,0%,100%,.67);
    margin-left: -20px;
    text-align: left;
    padding-left: 55px !important;
    margin: 20px 0;
    width: 100% !important;
}
.SubLi{
     width: 100% !important;
     color: hsla(0,0%,100%,.67);
     text-align: left;
     margin:20px 0;
}
.SubLi span{
    color: hsla(0,0%,100%,.67);
}
.SubLi .el-menu-item-group .el-menu-item-group__title{
    padding: 0 !important;
}
.subIcon{
    font-size: 16px;
    color: #ff8d1f;
    padding-left: 35px;
    padding-right: 25px
}
.SubLi .el-submenu__title .el-submenu__icon-arrown{
    color: #fff !important;
    margin-top: -3px !important;
}
.SubLi .el-submenu__title:hover {
    background-color: #000;
}
.SubLi .el-submenu .el-menu-item{
    color: hsla(0,0%,100%,.67);
}
.SubLi .el-submenu .el-menu-item{
    text-indent: 50px
}
.MenuLi i{
    font-size: 16px;
    color: #ff8d1f
}
.MenuLi.is-active{
    border-bottom: none;
    color: hsla(0,0%,100%,.67);
    background: #ff8d1f !important;
}
.MenuLi.is-active:hover,.MenuLi.is-active:active,.MenuLi.is-active:focus,.MenuLi.is-active:visited{
     border-bottom: none;
    color: hsla(0,0%,100%,.67);
    background: #ff8d1f !important;
}
.MenuLi.is-active i{
    color: #fff
}
.MenuLi:hover{
    color:#fff !important;
    background-color: #252834 !important;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
      width: 100%;
    position: fixed;
    top: 0px;
    z-index: 100;
    transform: translateY(0px);
}

.el-aside {
  color: #333;
}
.el-header {
  background-color: #e9eaeb;
  padding: 0 11px;
}
.icon{
    font-size:18px;
    font-weight:400;
    color:#fff;
    cursor: pointer;
}
 	.logo {
				height:51px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
        color:#fff;
			}
        .txt {
					color:#fff;
				}
			.logo-width{
				width:240px;
        background-color:#1c1f27;
			}
			.logo-collapse-width{
				width:0px
			}
.el-aside{
  position: fixed;
    top: 50px;
    bottom: 0;
    left: -239px;
    z-index: 120;
    /* overflow: hidden; */
    width: 240px;
    height: 100%;
    background-color: #252834;
        transition: transform .2s ease;
    transform: translate3d(240px,0,0);

}
.el-aside::-webkit-scrollbar {/*滚动条整体样式*/
    width: 6px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 0px;
}
.el-aside::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.2);
    background: #5d647b;
}
.el-aside::-webkit-scrollbar-track {/*滚动条里面轨道*/
    opacity: 0.5;
}
.mainBox{
  position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    display: block;
    max-height: 100%;
    height: 100%;
    left:240px;
    width: calc(100% - 240px);
}
.closeMainBox{
  left: 0;
  width: 100%;
}
.boDiv{
  height: 100px;
}
.el-main{
    padding: 0;
        padding-top:51px;
        text-align: left;
}
</style>
