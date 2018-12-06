<template>
    <div class="scroll" style="overflow-y: scroll;height: 100%;width: 471px;;">
        <el-menu class="el-menu-vertical-demo" background-color="#fff" text-color="rgba(0,0,0,.85)" active-background-color="#fff">
            <el-submenu index="1">
                <template slot="title">
                    <div style="position: relative;">
                        <img src="../../assets/login.jpg" style="height:38px;">
                        <div style="display: inline-block;margin-left:6px;">
                            <div style="line-height:22px;">啊<el-tag style="margin-left:20px;padding: 0px 8px;height: 20px;line-height: 20px;margin-bottom: 4px;">标签一</el-tag></div>
                            <div style="line-height:18px;color: #9fa1a8;font-size: 12px;">天津市/市辖区/和平区/第三方</div>
                        </div>
                        <el-badge :value="badgeval" v-if="isbadge" class="item" style="position:absolute;right:16px;top:4px;"></el-badge>
                    </div>
                </template>
                <el-menu-item-group>
                    <el-tabs v-model="activeName2" type="card">
                        <el-tab-pane label="可招商" name="first" >
                            <el-checkbox-group v-model="checkList" @change="checksl">
                                <div class="checkli" v-for="(item,index) in kzs" :key="index">
                                    <el-checkbox :label="item.label">
                                        <span style="display:inline-block;width:28%;text-align: center;">{{item.val01}}</span>
                                        <span style="display:inline-block;width:22%;text-align: center;">{{item.val02}}</span>
                                        <span style="display:inline-block;width:46%;text-align: right;">{{item.val03}}</span>
                                    </el-checkbox>
                                </div>
                            </el-checkbox-group>
                        </el-tab-pane>
                        <el-tab-pane label="已租" name="second" >
                            
                        </el-tab-pane>
                        <el-tab-pane label="所有房源" name="third" >
                            
                        </el-tab-pane>
                    </el-tabs>
                </el-menu-item-group>                                     
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <div>
                        <img src="../../assets/login.jpg" style="height:38px;">
                        <div style="display: inline-block;margin-left:6px;">
                            <div style="line-height:22px;">啊<el-tag style="margin-left:20px;padding: 0px 8px;height: 20px;line-height: 20px;margin-bottom: 4px;">标签一</el-tag></div>
                            <div style="line-height:18px;color: #9fa1a8;font-size: 12px;">天津市/市辖区/和平区/第三方</div>
                        </div>
                    </div>
                </template>
                <el-menu-item-group>
                    
                </el-menu-item-group>  
            </el-submenu>          
        </el-menu>    
    </div>
</template>
<script>
export default {
    name: 'fymsg',
    data(){
        return{
            isbadge: false,
            activeName2: 'first',
            checkList: [],
            kzs:[
                {
                    label:"复选框 1",
                    val01: '1层',
                    val02: '1室',
                    val03: '11工位'
                },
                {
                    label:"复选框 2",
                    val01: '1层',
                    val02: '2室',
                    val03: '12工位'
                },
                {
                    label:"复选框 3",
                    val01: '1层',
                    val02: '3室',
                    val03: '13工位'
                }
            ]
        }
    },
    methods:{
        checksl(){
            var checkLength=this.checkList.length;
            this.badgeval=checkLength;
            if(checkLength>0){
                this.isbadge=true;
            }else{
                this.isbadge=false;
            }
            
        }
    }
}
</script>
<style>
.scroll .el-menu-vertical-demo{
    width: calc(100% - 24px);
    border: 0;
}
.scroll .el-menu-vertical-demo .el-submenu{
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-bottom: 10px;
}
.scroll .el-menu-vertical-demo .el-submenu .el-submenu__title{
    padding-left: 10px !important;
    border-radius: 4px;
}
.scroll .el-menu-vertical-demo .el-submenu .el-submenu__title:hover{
    background-color: #fff !important;
}
.scroll .el-menu-vertical-demo .el-submenu .el-menu-item-group .el-menu-item-group__title{
    padding: 0;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs{
    padding: 0 10px;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .el-tabs__content{
    margin-bottom: 10px;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .el-tabs__item{
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    padding: 0 12px;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .el-tabs__header{
    margin-bottom: 0; 
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .checkli{
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding: 0 5px;
    border-bottom: 1px solid #e6e8eb;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .checkli:last-child{
    border-bottom: 1px solid #fff;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .checkli .el-checkbox{
    width: 100%;
    font-size: 14px;
    height: 46px;
    line-height: 46px;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .checkli .el-checkbox span{
    text-overflow: ellipsis;
    white-space: normal;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .checkli .el-checkbox .el-checkbox__label{
    width: 98%;
}
</style>

