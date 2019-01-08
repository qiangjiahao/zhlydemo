<template>
    <div class="scroll" style="overflow-y: scroll;height: 100%;">      
        <el-menu class="el-menu-vertical-demo" background-color="#fff" text-color="rgba(0,0,0,.85)" active-background-color="#fff" :unique-opened="true" @open="aaa" :default-openeds="ooo"> 
            <el-submenu v-for="item in lydateils" :index="item.id" :key="item.id">
                <template slot="title">
                    <div style="position: relative;">
                        <img :src="item.images" style="width:54px;height:38px;">
                        <div style="display: inline-block;margin-left:6px;">
                            <div style="line-height:22px;">{{item.name}}<el-tag style="margin-left:20px;padding: 0px 8px;height: 20px;line-height: 20px;margin-bottom: 4px;">标签一</el-tag></div>
                            <div style="line-height:18px;color: #9fa1a8;font-size: 12px;">{{item.p_name}}/{{item.c_name}}/{{item.a_name}}</div>          
                        </div>
                        <!-- <div ref="baval" class="item" style="position:absolute;right:16px;top:4px;width:20px;height:20px;color:red;"></div>  -->
                    </div>
                </template>
                <el-menu-item-group>
                    <el-tabs v-model="activeName2" type="card">
                        <el-tab-pane label="可招商" name="first" >
                            <el-checkbox-group v-model="checkList">
                                <div class="checkli" v-for="(item,index) in kzs" :key="index" >
                                    <el-checkbox :label="item.id" :value="item.id" @change="sl(item.id)">
                                        <span style="display:inline-block;width:28%;text-align: center;">{{item.level_name}}</span>
                                        <span style="display:inline-block;width:22%;text-align: center;">{{item.room_number}}室</span>
                                        <span style="display:inline-block;width:46%;text-align: right;">{{item.area}}m²</span>
                                    </el-checkbox>
                                </div>
                            </el-checkbox-group>
                        </el-tab-pane>
                        <el-tab-pane label="已租" name="second" >
                            <ul>
                                <li v-for="(item,index) in kzspart" :key="index" class="checkli checkli02">
                                    <span>{{item.level_name}}</span>
                                    <span>{{item.room_number}}室</span>
                                    <span>{{item.area}}m²</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="所有房源" name="third" >
                            <ul>
                                <li v-for="(item,index) in kzsall" :key="index" class="checkli checkli02">
                                    <span>{{item.level_name}}</span>
                                    <span>{{item.room_number}}室</span>
                                    <span>{{item.area}}m²</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </el-menu-item-group>                                     
            </el-submenu>  
        </el-menu>       
    </div>
</template>
<script>
import { buildinglist } from '@/axios/api' //合同对话框楼宇列表
import { housinglist } from '@/axios/api' //合同对话框房源列表


export default {
    name: 'fymsg',
    data(){ 
        return{
            activeName2: 'first',
            checkList: [],
            kzs:[],
            kzspart:[],
            kzsall:[],
            lydateils: [],
            bbb: '',
            ooo: [],
            bid: '32'
        }
    },
    props:{
        fyulxxid:{
            type: Array,
            required: true
        }
    },
    watch:{
        fyulxxid(val,oldval){
            this.checkList=val;
        }
    },
    methods:{
        sl(index){   
            this.$emit('fyxx',this.checkList,this.kzs)
            // var ppp = this.checkList.length;
            // var xb=this.bbb;
            // console.log(xb)
            // this.$refs.baval[xb].innerHTML=ppp;
            // console.log(this.$refs.baval[xb].innerHTML);
            // 已经找到对应的提示数字div，数字长度显示不上去
        },
        aaa(index){
            this.bbb=index;
            housinglist({  
            id: '['+ this.bbb +']'         
            }).then(res => {
                if(res.flag == 0){ 
                    this.kzsall = res.data;
                    for (const key in this.kzsall) {
                        if (this.kzsall[key].let_type==0) {
                            this.kzs.push(this.kzsall[key])    
                        }else{
                            this.kzspart.push(this.kzsall[key])
                        }
                    }
                } 
            });         
        }   
    },
    mounted(){
        buildinglist({                         
        }).then(res => {
            if(res.flag == 0){ 
                this.lydateils=res.data;       
            } 
        });
    } 
}
</script>
<style>
.scroll .el-menu-vertical-demo{
    width: calc(100% - 4px);
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
    overflow-x: hidden;
    overflow-y: auto;
    height: 300px;
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
    height: 34px;
    line-height: 34px;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .checkli .el-checkbox span{
    text-overflow: ellipsis;
    white-space: normal;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .checkli .el-checkbox .el-checkbox__label{
    width: 98%;
}
.scroll .el-menu-vertical-demo .el-submenu .el-tabs .checkli02{
    width: 100%;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
    justify-content: space-between;
    padding: 0 30px;
}
</style>

