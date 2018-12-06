<template>
    <div class="zs">
        <div class="tabs">
            <div class="tab" v-for="(item,i) in zsSub" :key="i" @click="toggleTab(item.sub,item.dialog,i)" :class="{tabclass:i == nowIndex}">
                {{item.name}}
            </div>
            <zsOneDialog :is="isdialog"></zsOneDialog>
        </div>
        
        <!-- 子组件，显示不同的 tab
        is 特性动态绑定子组件
        keep-alive 将切换出去的组件保留在内存中 -->
        <zsOne :is="currentTab" keep-alive></zsOne>
    </div>
</template>
<script>
import zsOne from '@/components/zhaoshangAdmin/zsOne'
import zsTwo from '@/components/zhaoshangAdmin/zsTwo'
import zsOneDialog from '@/components/zhaoshangAdmin/zsOneDialog'
import zsTwoDialog from '@/components/zhaoshangAdmin/zsTwoDialog'

export default {
    name:'Zs',
    components:{
        zsOne,zsTwo,zsOneDialog,zsTwoDialog
    },
    data(){
        return{
            currentTab:zsOne,
            zsSub:[
                {name:"客户管理",sub:"zsOne",dialog:"zsOneDialog"},
                {name:"我的渠道",sub:"zsTwo",dialog:"zsTwoDialog"}
            ],
            nowIndex: 0,
            isdialog:zsOneDialog
        }
    },
    methods:{
        toggleTab:function (sub,dialog,i){
            this.currentTab = sub; // tab 为当前触发标签页的组件名
            this.isdialog = dialog;
            this.nowIndex = i;
        }
    }
}
</script>
<style>
.zs .tabs{
    padding: 0 20px;
    height: 40px;
    color: #6b809f;
    line-height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #edf0f2;
    position: relative;
    z-index: 999;
}    
.zs .tabs .tab{
    float: left;
    padding: 0 20px;
    border-bottom: 2px solid #fff;
    cursor: pointer;
    font-size: 14px;
    line-height: 38px;
}
.zs .tabs .tab:hover{
    border-bottom: 2px solid #108ee9;
    color: #108ee9;
}
.zs .tabs .tabclass{
    border-bottom: 2px solid #108ee9;
    color: #108ee9;
}
</style>
