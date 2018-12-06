<template>
    <div class="zk-nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo zk-ul" mode="horizontal">
            <el-menu-item index="1" class="tab" @click="toggleTab('zk-list')">租客列表</el-menu-item>
        </el-menu>
        <searchTit></searchTit>
        <zkTable></zkTable>
    </div>
</template>
<script>
import searchTit from '../../components/searchTit'; //引入搜索和标签组件
import zkTable from '../../components/zk-table';


export default {
    name: 'lydetails04',
    components:{
        zkTable,searchTit
    },
    data(){
        return{
            activeIndex: '1'
        }
    },
    methods:{
        toggleTab: function(tab) {
            
        }
    }
}
</script>
<style scoped>
.zk-ul .el-menu-item{
    width: auto;
}
.zk-ul .el-menu-item:nth-child(1) {
    margin-left: 20px;
}
.zk-ul .el-menu-item.is-active{
    color: #4494f0 !important;
}
</style>