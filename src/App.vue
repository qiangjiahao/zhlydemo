<template>
  <div id="app">
  <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
// 通过控制router-view 的显示与隐藏，来重渲染路由区域，重而达到页面刷新的效果
export default {
  name: 'App',
  provide (){
     return {
       reload:this.reload
     }
  },
 data(){
    return {
       isRouterAlive:true
    }
 },
  methods:{
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    },
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
html{
  height: 100%;
  width: 100%;
}
body{
  margin: 0;
  padding: 0;
  /* overflow-y: hidden; */
  background-color: #f4f4f4;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* overflow: auto */
}
ul li{
  list-style: none;
}
.el-popper[x-placement^=bottom]{
    margin-top: 6px;
}
.el-popper .el-select-dropdown__item{
    height: 30px;
    line-height: 30px;
    font-size: 12px;
}
.SubLi .el-menu-item-group__title{
  padding: 0;
}
.title_list .el-collapse-item__header,.el-collapse-item__wrap{
  background: #1a1c24;
  border-bottom: none;
  color: #fff
}
.title_info input{
  padding: 0;
    background: #1a1c24;
    border: none;
    width: 100%;
    padding-right: 0 !important;
    color: #fff;
}
.active___1cDXI{
      background-color: #5d647b !important;
}
.active___1cDXI .el-collapse-item__header{
  background-color: #5d647b !important;
}
</style>
