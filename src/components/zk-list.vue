<template>
  <div>
    <searchTit :visible.sync='visible'></searchTit>  
    <zkMsg></zkMsg>
    <zkTable></zkTable> 
  </div>
</template>
<script>
import searchTit from '../components/searchTit'; //引入搜索和标签组件
import zkMsg from '../components/zhlyMsg/zkMsg';
import zkTable from '../components/zk-table';

export default {
  name: "zkList",
  components:{
   searchTit,zkMsg,zkTable
    },
  data() {
    return {
      visible: true
    }
  }
};
</script>
