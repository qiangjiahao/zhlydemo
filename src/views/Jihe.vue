<template>
  <div>
     
      <el-menu :default-active="activeIndex" router class="el-menu-demo List_nav" mode="horizontal" @select="handleSelect">
  <el-menu-item v-for="(item,i) in List_nav" :key="i" :index="item.name" @click="selectNav(item.name)">
      {{ item.navItem }} 
  </el-menu-item>
</el-menu>
<!-- <div class="line"></div> -->
    <div class="main-box">
        <router-view ref="childrenNode">
    </router-view>
    </div>
  </div>
</template>
<script>
export default {
    name:'Jh',
     //父组件通过props属性传递进来的数据
     computed:{
        items (){
            return this.$store.state.items
        }
     },
        data() {
      return {
        activeIndex:'/louyuAdmin',
        List_nav:[
            {name:'/louyuAdmin',navItem:'楼宇管理'},
            {name:'/fangyuanAdmin',navItem:'房源管理'},
            {name:'/Zs',navItem:'招商管理'},
            {name:'/Zk',navItem:'租客管理'},
            {name:'/Ht',navItem:'合同管理'},
        ],
      };
    },
         mounted () {
             this.activeIndex = this.$route.path;
            },
            methods: {
        
      handleSelect(key, keyPath) {
      },
       selectNav (name) {
        this.activeIndex = name;
      },
        say(){
           this.$refs.childrenNode.sayNode();
          }
    }
}
</script>
<style scoped>
.List_nav .is-active{
    border-bottom:2px solid #4494f0 !important;
    position: relative;
    color:#4494f0 !important;
}
.List_nav .el-menu-item{
     width: auto;
    height: 50px;
    line-height: 50px;
    /* margin: 0 10px;
    padding: 0px 5px!important; */

}
.List_nav .el-menu-item:nth-child(1){
    margin-left: 20px
}
.List_nav .el-menu-item:hover{
    border-bottom: 2px solid #4494f0 !important;

}
</style>
