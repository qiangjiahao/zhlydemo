<template>
    <div class="fy-public">
      <el-menu :default-active="isselect" router class="el-menu-demo" mode="horizontal">
            <el-menu-item v-for="(item,i) in fy_nav" :key="i" :index="item.name">{{item.navItem}}</el-menu-item>
            <el-button icon="el-icon-plus">房源</el-button>
        </el-menu>
        <el-input
            placeholder="搜索房号"
            prefix-icon="el-icon-search">
        </el-input>
        <fyMsg></fyMsg>
    </div>
</template>
<script>
import fyMsg from '@/components/zhlyMsg/fyMsg'

export default {
    name:'fyPublic',
    components:{
        fyMsg
    },
    data() {
        return {
            isselect: '/fy01',
            fy_nav:[
                {name:'/fy01',navItem:'可招商'},
                {name:'/fy02',navItem:'已租房源'},
                {name:'/fy03',navItem:'所有房源'}
            ],
            txtMsg:[
                {
                    name:"可招商房源个数",
                    bfb:"",
                    sl:"713"
                },
                {
                    name:"已租房源个数",
                    bfb:"m²",
                    sl:"204"
                },
                {
                    name:"所有房源个数",
                    bfb:"",
                    sl:"913"
                },
                {
                    name:"可招商数量",
                    bfb:"m²",
                    sl:"119952.55"
                },
                {
                    name:"已租数量",
                    bfb:"",
                    sl:"49904.9"
                },
                {
                    name:"所有数量",
                    bfb:"m²",
                    sl:"169884.26"
                }           
            ]  
        }
    },
    mounted(){
        this.isselect = this.$route.path;
        
    },
    methods: {
       
    }
}
</script>
<style>
.fy-public .el-menu-item{
    width: auto;
    height: 40px;
    line-height: 40px;
}
.fy-public .el-menu-item:nth-child(1){
    margin-left: 20px;
}
.fy-public .el-button{
    float: right;
    margin-right: 20px;
    color: #585858;
    border-radius: 4px;
    border: .6px solid rgba(130,134,146,.6);
    margin-top: 6px;
    padding: 0 15px;
    font-size: 14px;
    height: 28px;
}
.fy-public .el-input input{
    border: 0;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    padding-left: 64px !important;
    border-bottom: 1px solid #edf0f2;
}
.fy-public .el-input span i{
    width: 92px;
    font-size: 16px;
    color: #6f7e95;
}
</style>
