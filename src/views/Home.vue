<template>
   
  <div style="width:100%;height:100%;">
    <!-- 返回顶部-->
      <BackTop   id="to-top-btn" :height="20"></BackTop>   
       <el-container style="width:100%;height:100%;">
            <!--头部-->
<el-header class="el-header" style="height:51px;line-height:51px;">
    <el-row :gutter="20">
  <el-col :span="4" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
      <div class="right">
         <el-col :span="1"><div class="grid-content bg-purple"  @click.prevent="collapse"><span><i class="fa fa-outdent" style="cursor:pointer;"></i></span></div></el-col>
  <el-col :span="10"><div class="grid-content bg-purple">
      <el-menu :default-active="isSelect" router class="el-menu-demo nav-ul" mode="horizontal"  @select="handleSelect" background-color="#e9eaeb" text-color="#4a5267"
  >
 <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" class="nav_li" @click="selectNav(item.name)">
        {{ item.navItem }}
</el-menu-item>
</el-menu>
      </div>
      </el-col>
  <el-col :span="8" style="float:right;width:auto">
      <div class="grid-content bg-purple" style="text-align:right">
          <!--问卷调查 -->
      <el-dropdown>
        <i class="el-icon-document icon" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>问卷调查</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!--下载中心-->
      <el-dropdown>
          <i class="el-icon-download icon" style="margin-right: 15px"></i>
           <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>下载中心</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
       <!-- 个人中心 -->
       <el-dropdown>
       <i class="fa fa-user-o icon" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{username}}</el-dropdown-item>
          <el-dropdown-item>
             <router-link tag='span' :to="{ path:'/main' }" >个人中心</router-link>
            </el-dropdown-item>
          <el-dropdown-item><span @click="logout">退出登录</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      </el-col>
      </div>
</el-row>
 </el-header>
  <!--左侧菜单 -->
        <el-aside width="240px" v-show="!collapsed">
    <el-menu style="background-color:#252834">
      <!-- 楼宇列表 -->
      <div class="Llist">
        <li v-for="(item, index) in items" :key="index"   v-on:click="navClickEvent(item)" class='list___2Hba-li' :class="item.label ? 'label' : ''">
          <img :src="item.images" alt="">
              <div class="L-tex"> 
              <span>{{item.name}}</span><br>
              <span style="color:#828692">{{item.area_sum}}m²</span>
              </div> 
        </li>
      </div>
     <!-- 结束-->
     <!-- 楼宇勾选-->
      <el-collapse>
       <div class="title_list" v-for="(itemlist, index) in itemAgg" :key="index"  :class="{ active___1cDXI:index==current}" style="margin-top:10px">
         <div class="title_info" @click="addClass(index,itemlist.bid)">
           <div  class="title_info">{{itemlist.name}}</div>
           </div>
           <el-collapse-item >
        <el-input :value="itemlist.name" class="title_info disIpt" style="width:70%;" ref="input1"></el-input>
        <i class="el-icon-close" @click="delectSet(itemlist.id)"></i>
     <template slot="title">
    </template>
     <el-checkbox-group v-model="checkList[index]">
    <el-checkbox :label="item.id"  v-for="item in items" :key="item.id">{{item.name}}</el-checkbox>
  </el-checkbox-group>
    <el-button type="primary" class="seionBtn" @click="seionBtn(itemlist.id,index)">保存</el-button>
  </el-collapse-item>
    </div>
    </el-collapse>
    <!-- 隐藏的楼宇列表 -->
     <el-collapse  v-model="activeNames" style="margin-top:10px;" v-if="showPrise">
       <div class="title_list">
         <el-input placeholder="请输入集合名称" v-model="input"  class="title_info"></el-input>
           <el-collapse-item  name="1">
        <i class="el-icon-close" @click="hideSet"></i>
     <template slot="title">
    </template>
    <!-- 循环多选框 -->
     <el-checkbox-group v-model="checkList1" v-for="(item, index) in items" :key="index">
    <el-checkbox :label="item.id">{{item.name}}</el-checkbox>
  </el-checkbox-group>
  <!-- 按钮点击事件 -->
    <el-button type="primary" class="seionBtn" @click="keepNum()">保存</el-button>
  </el-collapse-item>
    </div>
    </el-collapse>
     <div class="addBtn" accordion>
      <el-button type="primary" style="margin-top:20px" @click="newSet" v-if="showBtn">新建集合
        
      </el-button>
      <el-button type="primary" @click="synchroSet">同步集合</el-button>
    </div>
    <!-- 底部两按钮 -->
    </el-menu>
    <div class="boDiv"></div>
  </el-aside>
 <el-container style="max-height:1000px;border: 1px solid #eee;border-top:0px" :class="collapsed?'closeMainBox':'mainBox'">
 <!--中间渲染部分-->
    <el-main>
     <router-view>
    </router-view>
    </el-main>
  </el-container>
</el-container>
  
 </div>
 <!--返回顶部 -->
</template>
<script>
import Vue from 'vue'
import { BackTop } from 'iview';
Vue.component('BackTop', BackTop);
import { logout} from '@/axios/api';  //退出方法
import { Islogin } from "@/axios/api"  //验证登录
import { getList} from '@/axios/api' //获取楼宇列表
import { itemAgg } from '@/axios/api'  //获取楼宇类型列表
import { setAdd } from '@/axios/api'   //添加楼宇集合
import { delectSet } from '@/axios/api' //删除楼宇集合 
import { editSet } from '@/axios/api'  // 编辑楼宇集合
export default {
  name: "Home",
  inject: ['reload'],
  data() {
      return {
        sysName:'智慧楼宇',
        collapsed:false,
        result: null,
        username:'',
        input:'',
        editIpt:'',
        isSelect:'/',
        activeNames: ['1'],
        showPrise:false,
        showBtn:true,
        navList:[
            {name:'/',navItem:'集合'},
            {name:'/page1',navItem:'工作流'},
        ],
        checkList: [],
        items:[],  
        itemAgg:[],
        checkList1: [],
        current:-1,
        label:false
      }
    },
     mounted () {
      //  登录验证
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
            // 获取楼宇集合列表
             itemAgg({                                                
            }).then(res => {
                if(res.flag == 0){
                   that.itemAgg=res.data;
                  res.data.forEach((arr, index) => {
                      that.checkList[index] = arr.build;
                      })
                  
                } 
            })
            // 获取楼宇列表
             getList({                    
                id: userInfo.id,                              
            }).then(res => {
                if(res.flag == 0){  
                     that.items=res.data; 
                } 
            }) 
      that.isSelect = that.$route.path;
},
  methods: {
         //  编辑楼宇集合
      seionBtn:function(id,index){
       this.result = this.$refs.input1[index].value;
        var setId = this.checkList[index].toString();
         editSet({                    
                id: id, 
                name:this.result,
                bid:setId                         
            }).then(res => {
                if(res.flag == 0){  
                   this.$message({
                      message: '保存成功',
                      type: 'success',
                      duration: 1000
                });
               }   
              this.reload(); 
            }) 
      },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
      selectNav (name) {
        this.isSelect = name;
      },
      // 添加label类名
       navClickEvent:function(item){
         if(item.label){
                    Vue.set(item,'label',false);  
                }else{
                    Vue.set(item,'label',true);
                }
    },
        // 楼宇集合添加class 
         addClass:function(index1,seIid){
        this.items.map(item=> Vue.set(item,'label',false));   //每次点击先清除class
          this.current = index1  //集合加calss
             this.items.map((item, k,arr) => {   //循环集合列表。
                    let itemId = arr[k].id
                   var arrIDe = this.checkList[index1].map((arr1, i) => {  
                    let arrId = arr1;                   
                if(arr[k].id){
                     if(itemId==arrId){  
                   Vue.set(arr[k],'label',true); 
                  }
                  }
                  })
                  })                    
            },
        // 添加楼与集合
        keepNum:function(){
            let setId = this.checkList1.toString();
            var Setinput = this.input;
            if(!Setinput){
              this.$message.error('请输入集合名称');
              return;
            }
            if(this.checkList1.length == 0){
              this.$message.error('请选择楼盘');
              return;
            }
              setAdd({                    
                name: Setinput, 
                bid: setId
            }).then(res => {
                if(res.flag == 0){  
              // console.log(JSON.stringify(res))
              this.$message({
                      message: '添加成功',
                      type: 'success',
                      duration: 1000
                });
                this.reload();
                }else{
                  this.$message.error('添加失败');
                }
            }) 
            },
    // 删除集合
       delectSet:function(delectId){
             delectSet({                    
                id: delectId,                              
            }).then(res => {
                if(res.flag == 0){  
                    this.$message({
                      message: '删除成功',
                      type: 'success',
                      duration: 1000
                }); 
                 this.reload();
                } 
            }) 
       },
    // 新建集合
      newSet:function(){
         this.showPrise = true;
         this.showBtn = false;
      },
      hideSet:function(){
         this.showPrise = false;
         this.showBtn = true;
      },
      // 同步集合
      synchroSet:function(){
           this.$confirm('此操作将使所有账号与本账号的集合数据一致，确定同步吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '同步成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消成功'
          });
        });
      },
    //折叠导航栏
			collapse:function(){
			this.collapsed=!this.collapsed;
      },
    // 退出登录
    logout(){
      let userInfo = JSON.parse(sessionStorage.getItem('user'));
           this.$confirm('确定退出？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          logout({                    
                id: userInfo.id,                              
            }).then(res => {
                if(res.flag == 0){        
               this.$store.commit('REMOVE_COUNT',userInfo);
                this.$message({
                      message: res.data.msg,
                      type: 'success',
                      duration: 1000
                    }); 
                  setTimeout(() => { this.$router.replace("/logins")}, 1000)
                } 
            }) 
        })
      }
    }
  }

</script>
<style scoped>

.disIpt{
  z-index: 99 !important;
}
.title_list .el-checkbox__input.is-checked+.el-checkbox__label{
color: #fff;
}
.title_info{
height: 30px;
    line-height: normal;
    background-color: transparent;
    color: #fff;
    border: 0;
}
.title_info input{
  padding: 0;
    background: #1a1c24;
    border: none;
    width: 100%;
    padding-right: 0 !important;
    color: #fff;
}
.label{
  border: 1px solid rgba(255,141,31,.8) !important;
  border-radius:2px !important;
}
.el-icon-close{
    display: inline-block;
    position: absolute;
    top: 18px;
    left: 12px;
    font-weight: bold;
    z-index: 9999;
    cursor: pointer;
    color: #fff
}
.addBtn button:hover{
      background: #ff8d1f;
    border-color: #ff8d1f;
    color: #fff;
}
.addBtn button:focus, .addBtn button:hover{
    background: #ff8d1f;
    border-color: #ff8d1f;
    color: #fff;
}
.addBtn button:active{
   background: #ff8d1f;
    border-color: #ff8d1f;
    color: #fff;
}
.addBtn button{
     width: 125px;
    height: 35px;
    border-radius: 2px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    background-color: #ff8d1f;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    line-height: 35px;
    margin: 10px auto;
    padding: 0;
    border: none;
    margin-left: 10px;
    float: none;
}
.seionBtn{
      float: right;
    width: 50px;
    height: 20px;
    border: 0;
    padding: 0;
    margin: 10px 0;
    outline: 0;
    font-size: 12px;
    background-color: #4494f0;
    margin-right: 20px
}
.el-checkbox{
  display: block;
  text-align: left;
  color: #fff;
  margin-left: 30px;
}
.el-collapse-item__wrap{
background-color: #1a1c24;
border-bottom: none;
color: #fff;
}
.el-collapse-item__content{
  color: #fff;
}
.title_list{
  width:100%;
 background-color: #1a1c24;
 position: relative;
}
.title_info{
  width: 85%;
    height: 48px;
    color: #fff;
    line-height: 48px;
    cursor: pointer;
    font-size: 13px;
    text-align: left;
    text-indent: 30px;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
}
.el-collapse-item__arrow{
  font-size: 16px;
  color:#fff;
  font-weight: bold;
  position:relative;
  z-index: 1;

}
.el-collapse-item{
      width: 100%;
}
.el-collapse{
  border:none;
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
.el-menu--horizontal>.el-menu-item{
    width: 160px;
    height:50px;
    line-height:50px
}
.nav_li:focus, .nav_li:not(.is-disabled):hover{
    background-color:#f2f3f5 !important;
}
.nav-ul .is-active{
     border-bottom:2px solid transparent !important;
     background-color:#f3f2f5 !important;
}
.el-collapse-item__header{
 background-color: #1a1c24;
 border-bottom: 0;
}
.icon{
    font-size:18px;
    font-weight:400;
    color:#000;
    margin-right: 30px !important;
    cursor: pointer;
}
.el-dropdown-menu{
    padding:0px 5px;
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
      	.list___2Hba-li img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
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
      .Llist{
        border-right:none;
        background:#252834;
        color:#fff;
        font-size:14px;
        overflow: hidden;
      }
      .Llist img{
            float: left;
          width: 60px;
          height: 40px;
          background: 50%/cover no-repeat;
      }
      .L-tex{
        float: left;
    width: 110px;
    margin-left: 0px;
    text-align: left;
    font-size: 14px;
    margin-top:10px ;
      }
    .list___2Hba-li{
    display: inline-block;
    width: 210px;
    height: 60px;
    margin-top: 4px;
    /* padding: 8px 10px; */
    border: 1px solid #1a1c24;
    font-weight: 400;
    list-style: none;
    background-color: #1a1c24;
    cursor: pointer;
    transition: all .3s ease;
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
.el-menu{
  border-right:0;
}
.el-main{
    padding: 0;
        padding-top:51px;
        text-align: left;
}
</style>
