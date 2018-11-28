<template>
  <div>
    <div class="zsOne">
      <div class="block">
        <ul>
          <li>今日</li>
          <li>昨日</li>
          <li>本周</li>
          <li>本月</li>
        </ul>
        <el-date-picker
          class="date-input"
          v-model="value6"
          size="mini"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
          <el-input 
          class="zsOne-input"
          placeholder="搜索房号"
          prefix-icon="el-icon-search">
        </el-input>
      </div>
      <div class="xzdl">
      </div>
      <zsMsg></zsMsg>  
    </div>
    <zsOnetable></zsOnetable>
  </div>
  
</template>

<script>
import zsMsg from '@/components/zhlyMsg/zsMsg'
import zsOnetable from '@/components/zhaoshangAdmin/zsOnetable'

export default {
  name: 'zsOne',
  components:{
    zsMsg,zsOnetable
  },
  data () {
    return {
      value6: ''
    }
  },
  methods: {
    
  }
}
</script>
<style>
.zsOne{
  width: 100%;
  background-color: #fff;
  overflow: hidden;
}
.zsOne .block{
  height: 50px;
  border-bottom: 1px solid #edf0f2;
  padding: 0 20px;
}
.zsOne .block ul{
  float: left;
  overflow: hidden;
}
.zsOne .block .zsOne-input{
  width: calc(100% - 640px);
}
.zsOne .block .date-input{
  margin-top: 12px;
}
.zsOne .zsOne-input{
  margin-left: 8px;
}
.zsOne .zsOne-input input{
    border: 0;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    padding-left: 32px;
}
.zsOne .el-input span i{
    font-size: 16px;
    color: #6f7e95;
}
.zsOne .block ul li{
  float: left;
  height: 50px;
  color: #000;
  line-height: 50px;
  margin: 0 20px;
  font-weight: 500;
  cursor: pointer;
  font-size: 12px;
}  
</style>


