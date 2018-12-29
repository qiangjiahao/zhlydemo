<template>
    <div class="sjpz">
        <i class="el-icon-edit-outline" @click="dialogFormVisible = true" style="cursor:pointer"></i>
        <el-dialog title="数据配置" :visible.sync="dialogFormVisible" width="800px" top="100px" class="sjpz-dialog">
            <el-form :model="form">
                <div class="sjpz-dia-txt">统计范围</div>
                <div class="sjpz-dia-txt-content">
                    <el-radio v-model="radio" label="1" @change="qb">全部</el-radio>
                    <el-radio v-model="radio" label="2" @change="jxz">仅统计选中标签</el-radio>
                    <el-radio v-model="radio" label="3" @change="bxz">不统计选中标签</el-radio>
                </div>
                <div class="sjpz-dia-txt-content" style="margin-top:20px;"> 
                    <el-checkbox-group v-model="checkboxGroup1">
                        <el-checkbox-button v-for="city in cities" :label="city" :key="city" :disabled="isdisabled">{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div class="sjpz-dia-txt">在租设定</div>
                <div class="sjpz-dia-txt-content dia-item">
                    <el-form-item>
                        <div class="dia-item-div">
                            什么是在租？
                            <el-tooltip placement="top">
                                <div slot="content">审核通过、计租开始、合同到期、归档全部都只统计包含租赁条款的合同</div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.zaizu">
                            <el-option label="审核通过-归档" value="zaizu01"></el-option>
                            <el-option label="计租开始-合同到期" value="zaizu02"></el-option>
                            <el-option label="计租开始-归档" value="zaizu03"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="在租均价统一换算显示为">                     
                        <el-select v-model="form.zzjj" placeholder="">
                            <el-option label="元/㎡·天" value="zzjj01"></el-option>
                            <el-option label="元/㎡·月" value="zzjj02"></el-option>
                            <el-option label="元/月" value="zzjj03"></el-option>
                            <el-option label="元/天" value="zzjj04"></el-option>
                            <el-option label="元/工位·天" value="zzjj05"></el-option>
                            <el-option label="元/工位·月" value="zzjj06"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="sjpz-dia-txt">在租设定<i class="el-icon-refresh" style="font-size:20px;margin-left:6px;cursor:pointer" @click="sx"></i></div>
                <div class="sjpz-dia-txt-content" v-loading="pictLoading" element-loading-background="rgba(255, 255, 255, 0.3)">
                    <ul class="sjpz-dia-ul">
                        <li v-for="(item,i) in yls" :key="i">
                            <div>
                                <span>{{item.name}}</span>
                                <span>{{item.data}}</span>
                                <el-tooltip placement="top">
                                    <div slot="content">{{item.msg}}</div>
                                    <i class="el-icon-question"></i>
                                </el-tooltip>
                            </div>
                            <div>{{item.txt}}</div>
                        </li>
                    </ul>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="bbb" :loading="isloading">{{baocun}}</el-button>
            </div>
        </el-dialog>
        <el-dialog
        :visible.sync="dialogVisible"
        width="400px"
        :modal="false"
        center
        class="sjpz-dialog02">
        <div class="sjpz-dialog02-div">
            <i class="el-icon-warning"></i>
            <p>统计数据自定义成功！</p>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
const cityOptions = ['朝南', '朝北', '有窗', '自用', '精装修'];
export default {
    name: 'Dialogsjpz', 
    data(){
        return{
            isloading: false,
            pictLoading: false,
            baocun: '保存',
            dialogFormVisible: false,
            dialogVisible: false,
            form: {
                zaizu: 'zaizu01',
                zzjj: ''
            },
            radio: '2',
            checkboxGroup1: ['朝北', '有窗', '自用'],
            cities: cityOptions,
            isdisabled: false,
            yls:[
                {
                    name: '管理数量',
                    data: '',
                    msg: '系统当前录入的所有房源面积总和',
                    txt: '10,760.81'
                },
                {
                    name: '在租数量',
                    data: '56.50%',
                    msg: '当前在租房源面积总计',
                    txt: '6,080.00'
                },
                {
                    name: '空置数量',
                    data: '41.26%',
                    msg: '管理面积-在租面积',
                    txt: '4,440.00'
                },
                {
                    name: '在租实时均价',
                    data: '',
                    msg: '对所有租赁合同的单价与面积进行加权平均计算，并按设定的单位展示，若楼宇中同时存在按面积计算和按工位计算、则无法统计。',
                    txt: '-'
                },
                {
                    name: '在租合同份数',
                    data: '',
                    msg: '存在有效租赁条款（非归档）的租客数量',
                    txt: '21'
                },
                {
                    name: '可招商数量',
                    data: '43.21%',
                    msg: '房源面积为可招商的房源面积总计',
                    txt: '4,650.00'
                }
            ]
        }
    },
    methods:{
        qb(){
            this.checkboxGroup1=cityOptions;
            this.isdisabled=true;
        },
        jxz(){
            this.checkboxGroup1=['朝北', '有窗', '自用'];
            this.isdisabled=false;
        },
        bxz(){
            this.checkboxGroup1=[];
            this.isdisabled=false;
        },
        bbb(){
            this.isloading=true;
            this.baocun='保存中';
            var sj=1;
            var bctimer = setInterval(()=>{
                sj--;
                if(sj<=0){
                    this.isloading=false;
                    this.dialogFormVisible=false;
                    this.baocun='保存';
                    this.dialogVisible=true;
                    clearInterval(bctimer);
                }
            },1000) 
        },
        sx(){
            this.pictLoading=true;
            var timer = setInterval(()=>{
                this.pictLoading=false;
                clearInterval(timer);
            },1000);
        }
    }
}
</script>

<style>
.sjpz-dialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    border-radius: 4px 4px 0 0;
    background: #fff;
    color: rgba(0,0,0,.65);
    border-bottom: 1px solid #e9e9e9;
    box-sizing: border-box;
}
.sjpz-dialog .el-dialog__body{
    background-color: #f4f4f4;
    padding: 20px;
}
.sjpz-dialog .sjpz-dia-txt{
    padding: 10px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
    box-sizing: border-box;
}
.sjpz-dialog .sjpz-dia-txt-content{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.sjpz-dialog .sjpz-dia-txt-content .el-radio{
    margin-left: 0;
    margin-right: 10px;
}
.sjpz-dialog .sjpz-dia-txt-content .el-radio span:last-child{
    font-size: 12px;
}
.sjpz-dialog .sjpz-dia-txt-content .el-checkbox-button{
    margin-right: 12px;
}
.el-checkbox-button__inner{
    border: 1px solid #d9d9d9;
}
.sjpz-dialog .sjpz-dia-txt-content .el-checkbox-button .el-checkbox-button__inner{
    padding: 6px 16px;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: none;
}
.sjpz-dialog .dia-item{
    display: flex;
    justify-content: space-between;
}
.sjpz-dialog .dia-item .el-form-item{
    width: calc(50% - 10px);
}
.sjpz-dialog .dia-item .el-form-item .dia-item-div{
    font-size: 12px;
    color: #6b809f;
    line-height: 22px;
}
.sjpz-dialog .dia-item .el-form-item .dia-item-div i{
    font-size: 14px;
}
.sjpz-dialog .dia-item .el-form-item .el-input__inner{
    height: 30px;
    line-height: 30px;
    color: rgba(0,0,0,.65);
    font-size: 12px;
}
.sjpz-dialog .dia-item .el-form-item label{
    width: 100%;
    min-height: 22px;
    font-size: 12px;
    color: #6b809f;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
    text-align: left !important;
}
.sjpz-dialog .dia-item .el-form-item .el-form-item__content{
    line-height: 30px;
}
.sjpz-dialog .dia-item .el-form-item .el-form-item__content .el-select{
    width: 100%;
}
.sjpz-dialog .dia-item .el-form-item .el-form-item__content .el-select i{
    line-height: 30px;
}
.sjpz-dialog .sjpz-dia-ul li{
    display: inline-block;
    width: 32.9%;
    padding: 0 15px;
    font-size: 12px;
    color: #6b809f;
    margin: 5px 0;
    box-sizing: border-box; 
}
.sjpz-dialog .sjpz-dia-ul li div:first-child{
    width: 100%;
    min-height: 22px;
    line-height: 18px;
    border-right: 1px solid rgb(224, 224, 224);
}
.sjpz-dialog .sjpz-dia-ul li div:first-child span{
    margin-right: 10px;
}
.sjpz-dialog .sjpz-dia-ul li div:first-child i{
    font-size: 14px;
}
.sjpz-dialog .sjpz-dia-ul li div:last-child{
    width: 100%;
    color: #353b4b;
    font-size: 14px;
    border-right: 1px solid rgb(224, 224, 224);
}
.sjpz-dialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.sjpz-dialog .el-dialog__footer button{
    margin-left: 10px;
    padding: 10px 30px;
}
.sjpz-dialog02 .sjpz-dialog02-div{
    text-align: center;
}
.sjpz-dialog02 .sjpz-dialog02-div i{ 
    font-size: 84px;
}
.sjpz-dialog02 .sjpz-dialog02-div p{
    font-size: 18px;
    color: #979797;
    margin-top: 20px;
}
.sjpz-dialog02 .el-button{
    padding: 8px 42px;
}
</style>


