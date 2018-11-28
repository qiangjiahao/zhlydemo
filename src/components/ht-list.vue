<template>
    <div class="htBox">
        <div class="httitle">
            <el-row>
        <el-col :span="4">
        <div class="grid-content bg-purple">
            <span class="s-tit">
                <p>到期预警(1)</p>
                <p>740 m²</p>
            </span>
            <span class="s-tit">
                <p>到期未处理(1)</p>
                <p>300 m²</p>
            </span>
        </div>
        </el-col>
        <el-col :span="20"><div class="grid-content bg-purple-light">
              <el-input
                placeholder="搜索租客"
                v-model="input" class="searchIpt">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            </div></el-col>
        </el-row>
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
     <div class="container">
    <div class="titleBox">
        <el-row>
  <el-col :span="22"><div class="grid-content bg-purple" style="font-size:14px;color:rgba(0,0,0,.65)">合同列表</div></el-col>
  <el-col :span="2" style="text-align:right"><div class="grid-content bg-purple">
       <el-dropdown>
         <i class="el-icon-more" style="cursor:pointer"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>列表导出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div></el-col>
</el-row>
    </div>
    <htTab :visible.sync='visible'></htTab>  
   </div>
    </div>
</template>
<script>
import htTab from '../components/htTab'; //引入合同公共组件
export default {
    name:'ht-list',
    components:{
        htTab
            },
    data(){
        return{
            input: "",
            visible: true,
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
.container .el-table__row td{
  text-align: center
}
.container .el-table th.is-leaf{
  text-align: center
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
.httitle{
        padding: 9px 20px;
    border-bottom: 1px solid rgba(219,225,230,.5);
    background: #fff;
    position: relative;
}
.httitle .s-tit{
    display: inline-block;
    width: 35%;
}
.httitle span p{
    padding: 0;
    margin: 0;
    font-size: 12px;
    margin-top: 5px;
    text-align: center;
    margin-left: 5px;
    color: #323c48
}
.httitle .el-col-4{
    border-right: 2px solid #ddd
}
.httitle .el-input__inner {
  border: none;
}
.httitle .el-input__icon {
  color: #333;
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
.zkclose {
  color: #108ee9 !important;
  cursor: pointer;
  margin-left: 10px;
}
</style>

