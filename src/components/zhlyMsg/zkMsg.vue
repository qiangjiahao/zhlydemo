<template>
  <div class="zkMsg">
    <el-row class="menu">
      <el-col :span="4">
        <div class="grid-content bg-purple">
            <p style="color: rgb(130, 134, 146); font-size: 12px;">租客数量</p>
            {{this.$store.state.zknumber}}
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    name: 'zkMsg',
    data(){
      return{
      }
    },
    methods:{

    },
}
</script>
<style>
.zkMsg{
  width: 100%;
  background-color: #fff;
}
.menu {
  background: rgb(255, 255, 255);
  padding: 10px 30px;
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


