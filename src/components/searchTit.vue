<template>
<div class="searchTit">
    <div class="demo-input-suffix searchBox">
  <el-input
    placeholder="搜索租客名"
    v-model="input" class="searchIpt">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
  <el-button icon="el-icon-plus">租客</el-button>
</div>
    <div class="zkTag">
        <span>选择大楼：</span>
    <el-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</el-tag>
     <span class="zkclose">清除选项</span>
    </div>
    </div>    
</template>
<script>
export default {
    name:'searchTit',
     data() {
    return {
      input: "",
      tags: [
        { name: "荆棘花众创科技", type: "info" },
        { name: "重庆万科", type: "info" },
        { name: "aaa", type: "info" }
      ]
    }
     }
}
</script>
<style>
.searchTit .el-input__inner {
  border: none;
}
.searchTit .el-input__icon {
  color: #333;
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

.searchBox .el-button {
  padding: 7px 14px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.searchBox .el-button:hover,
.searchBox .el-button:active {
  color: #333;
  border-color: #409eff;
  background-color: #fff;
}
</style>
