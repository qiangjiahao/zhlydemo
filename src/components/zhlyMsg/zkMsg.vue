<template>
    <el-row class="menu">
      <el-col :span="4">
        <div class="grid-content bg-purple">
            <p style="color: rgb(130, 134, 146); font-size: 12px;">租客数量</p>
            12
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
            <p style="color: rgb(130, 134, 146); font-size: 12px;">合同数量</p>
            12    
        </div>
      </el-col>
    </el-row>
</template>
<script>
export default {
    name: 'zkMsg'
}
</script>
<style>
.menu {
  background: rgb(255, 255, 255);
  width: 100%;
  padding: 7px 20px;
  text-align: left;
  max-width: 900px;
}
.menu .el-col-4 {
  border-right: 1px solid rgb(224, 224, 224);
  margin-right: 10px;
  padding-right: 10px;
  font-size: 24px;
}
.menu .el-col-4 p {
  margin: 0;
  padding-bottom: 10px;
}
</style>


