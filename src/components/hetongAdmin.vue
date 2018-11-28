<template>
<div class="ht-nav">
   <el-menu  :default-active="activeIndex" class="el-menu-demo ht-ul" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" class="tab" @click="toggleTab('ht-list')">合同列表</el-menu-item>
  <el-menu-item index="2" class="tab" @click="toggleTab('htGd')">归档合同</el-menu-item>
</el-menu>
<!-- 子组件，显示不同的 tab
 is 特性动态绑定子组件
 keep-alive 将切换出去的组件保留在内存中 -->
<zkList :is="currentTab" keep-alive></zkList>
<el-button icon="el-icon-plus" class="btnHt">合同</el-button>
</div>
</template>
<script>

// 引入子组件
import htList from '../components/ht-list';
import htGd from '../components/htGd';

export default {
    name:'Ht',
      data() {
      return {
       activeIndex: '1',
       currentTab:'htList'
      };
    },
     components: {  // 声明子组件
            htList,htGd
        },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = key
      },
       toggleTab: function(tab) {
            this.currentTab = tab;    
        }
    }
}
</script>
<style>
.ht-nav{
    position: relative;
}
.ht-nav .btnHt {
  padding: 7px 14px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.ht-nav .el-button:hover,
.ht-nav .el-button:active {
  color: #409eff;
  border-color: #409eff;
  background-color: #fff;
}
.ht-ul .el-menu-item{
    width: auto;
}
.ht-ul .el-menu-item:nth-child(1) {
    margin-left: 20px;
}
.ht-ul .el-menu-item.is-active{
    color: #4494f0 !important;
}
</style>
