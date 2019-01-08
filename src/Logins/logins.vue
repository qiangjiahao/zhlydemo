<template>
  <div class="log-reg">
    <div class="tab-bg"></div>
    <div class="tab">
      <ul class="tab-txt">
        <li v-for="(item,index) in tabs" :key="index" @click="toggleTab(item.sub,index)" :class="{tabclass:index == nowIndex}">{{item.name}} </li>
      </ul>
      <div class="logo"></div>
      <div class="tab-content">
        <login :is="currentTab" keep-alive></login>       
      </div>
    </div>
  </div>
</template>
<script>
import login from "@/Logins/login"
import register from "@/Logins/register"

export default {
    name:'logins',
    components:{
      login,register
    },
    data () {
      return {
        tabs:[
          {name:"登录",sub:"login"},
          {name:"注册",sub:"register"}
        ],
        nowIndex: 0,
        currentTab:login
    }
  },
  methods:{
    toggleTab:function (tab,i){
      this.currentTab = tab; // tab 为当前触发标签页的组件名
      this.nowIndex = i;
    }
  }
}
</script>

<style>
  .log-reg{
    width: 100%;
    height: 100%;
    background: url('../assets/login.jpg') no-repeat; 
    background-size: 100% 100%;
  }
  .log-reg .tab-bg{
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
  }
  .log-reg .tab{
    width: 464px;
    height: 600px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: rgba(0, 0, 0, .8);
  }
  .log-reg .tab .tab-txt{
    width: 100%;
    height: 48px;
    font-size: 16px;
    color: #333;
    box-sizing: border-box;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, .8);
  }
  .log-reg .tab .tab-txt li{
    float: left;
    width: 50%;
    line-height: 48px;
    text-align: center;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
  }
  .log-reg .tab .tab-txt .tabclass{
    background-color: #4e5052;
  }
  .log-reg .tab .tab-txt li:first-child{
    border-right: 1px solid;
    border-color: rgba(0, 0, 0, .8);
  }
  .log-reg .tab .logo{
    width: 120px;
    height: 110px;
    background: url("../assets/logo.png") no-repeat;
    background-size: 100% 100%; 
    margin: 32px auto;
  }
  .log-reg .tab .tab-content{
    padding: 0 38px;
  }
  .log-reg .tab .tab-content .el-form .el-form-item{
    position: relative;
    margin-bottom: 18px;
  }
  .log-reg .tab .tab-content .el-form .el-form-item .fa{
    position: absolute;
    left: 0;
    right: 0;
    font-size: 18px;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    z-index: 9;
  }
  .log-reg .tab .tab-content .el-form .el-form-item .el-input__inner{
      padding-left: 34px;
  }
 
</style>
