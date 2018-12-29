D<template>
    <div class="zsOneDialog">
        <el-button class="button-dialog" icon="el-icon-plus" plain @click="dialogFormVisible = true">客户</el-button>
        <zsOneDialogs v-if="dialogFormVisible" :visible.sync="dialogFormVisible"></zsOneDialogs>
    </div>
</template>
<script>
import fymsg from '@/components/fangyuanAdmin/fymsg'
import zsOneDialogs from '@/components/zhaoshangAdmin/zsOneDialogs'
export default {
    name: 'zsOneDialog',
    components:{
        fymsg,zsOneDialogs
    },
    data(){
        return{
            dialogFormVisible: false,
        }
    },
    methods:{
        
    }
}
</script>
<style>
.zsOneDialog .button-dialog{
    float: right;
    color: #585858;
    border-radius: 4px;
    border: .6px solid rgba(130,134,146,.6);
    margin-top: 6px;
    padding: 0 15px;
    font-size: 14px;
    height: 28px;
}
</style>


