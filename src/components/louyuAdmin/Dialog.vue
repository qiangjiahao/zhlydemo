<template>
    <div>
        <el-button class="ly-button" icon="el-icon-plus" @click="dialogFormVisible = true">楼宇</el-button>
        <el-dialog title="编辑楼宇" :visible.sync="dialogFormVisible" class="ly-dialog" width="700px" top="100px" center @close="gb">               
            <el-menu class="el-menu-demo" mode="horizontal">
                <el-menu-item v-for="(item,i) in lyformmsg" :key="i" :index="item.sub" :class="{itemtab:i === selectIndex}">{{item.msg}}</el-menu-item>
            </el-menu>
            <div class="menu-content">
                <div class="menu-ul">
                    <Dialog01 v-for="(item,index) in lyformmsg" :key="index" :is="item.sub" v-show="index===selectIndex"></Dialog01>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="clickLeft">{{footermsg}}</el-button>
            </div>                  
        </el-dialog>
    </div>
</template>

<script>
import Dialog01 from '@/components/louyuAdmin/Dialog01'
import Dialog02 from '@/components/louyuAdmin/Dialog02'
import Dialog03 from '@/components/louyuAdmin/Dialog03'
import Dialog04 from '@/components/louyuAdmin/Dialog04'

export default {
    name: 'Dialog',
    components:{
        Dialog01,Dialog02,Dialog03,Dialog04
    },
    data(){
        return{
            dialogFormVisible: false,
            selectIndex:0,
            footermsg: '保存&下一步',
            isRouterAlive:false,
            i:0,
            index: 0,
            lyformmsg:[
                {
                    msg: '详细信息',
                    sub: 'Dialog01'
                },
                {
                    msg: '创建楼层',
                    sub: 'Dialog02'
                },
                {
                    msg: '默认设置',
                    sub: 'Dialog03'
                },
                {
                    msg: '收入目标',
                    sub: 'Dialog04'
                }
            ]
        }
    },
    methods:{
        clickLeft:function(){
            if(this.selectIndex>2){ 
                this.dialogFormVisible = false;                
                this.footermsg= '保存&下一步';       
                return
              }
            else if(this.selectIndex==2){
                this.footermsg='保存'
                this.selectIndex++; 
                return
            }
            else{ 
                this.selectIndex++;             
            }          
        },
        gb(){
            this.selectIndex = 0; 
        }
    }
}
</script>

<style>
.ly-dialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.ly-dialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.ly-dialog .el-dialog__body .el-menu-demo{
    padding: 0 50px;
    border: 0;
    border-bottom: 1px solid #e9e9e9;
}
.ly-dialog .el-dialog__body .el-menu-demo .el-menu-item{
    height: 40px;
    line-height: 41px;
    font-size: 14px;
    margin-right: 20px;
    padding: 0;
    width: auto;
    color: rgba(0,0,0,.25);
    border-bottom: 2px solid #fff; 
    cursor:not-allowed;
}
.ly-dialog .el-dialog__body .el-menu-demo .itemtab{
    border-bottom: 2px solid #409EFF !important;
    color: #303133;
    cursor: pointer;
}
.ly-dialog .el-dialog__body .menu-content{
    padding: 20px;
    overflow: hidden;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul{
    width: 100%;
    overflow: hidden;
    float: left;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form .form-top{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form .form-public{
    display: flex;
    justify-content: space-between;
}
.form-01 .el-form-item{
    width: 100%;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form label{
    width: 100%;
    min-height: 22px;
    font-size: 12px;
    color: #6b809f;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
    text-align: left !important;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form .el-form-item__content{
    line-height: 30px;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form .el-form-item__content .form-03-span{
    position: absolute;
    right: 10px;
    top: 22px;
    color: #353b4b;
    font-size: 14px;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form .el-select{
    width: 100%;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form .el-input__inner:hover{
    border-color: #49a9ee;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul  .el-form .el-input__inner[disabled]:hover{
    border-color: #e2e2e2;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul  .el-form .el-input__inner:focus{
    box-shadow: 0 0 0 2px rgba(16,142,233,.2);
}
.el-popper[x-placement^=bottom]{
    margin-top: 6px;
}
.el-popper .el-select-dropdown__item{
    height: 30px;
    line-height: 30px;
    font-size: 12px;
}
.form-02 .el-form-item{
    float: left;
    width: calc(34% - 18px);
}
.form-03 .el-form-item{
    float: left;
    width: calc(50% - 9px);
}
.form-03 .el-date-editor{
    width: 100%;
}
.form-03 .el-date-editor span{
   left: auto;
   right: 6px;
}
.form-04 .el-form-item{
    float: left;
    width: calc(34% - 9px);
}
.form-04 .form-04-item label{
    color: #fff !important;
}
.form-04 .el-form-item .el-checkbox__input{
    position: relative;
    left: 34px;
    top: 2px;
}
.form-04 .el-form-item .el-checkbox__label{
    font-size: 12px;
}
.form-04 .el-form-item .el-checkbox__label i{
    font-size: 14px;
}


/* Dialog02 */
.form-06 .el-form-item:nth-of-type(1){
    width: 184px;
}
.form-06 .el-form-item:nth-of-type(2){
    width: 254px;
}
.form-06 .el-form-item:nth-of-type(3){
    width: 118px;
}
.form-07 .el-form-item{
    width: 30%;
    margin-bottom: 10px;
}
.form-07 .button-07{
    padding: 0;
    border: none;
    background: #fff;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    position: relative;
    top: 6px;
}
.form-07 .button-07 i{
    position: relative;
    top: -10px;
}
.tjly{
    text-align: center;
    font-size: 14px;
    margin-top: 24px;
}
.tjly button{
    padding: 5px 20px;
    border-radius: 2px;
    color: #4494f0;
    text-align: center;
    border: 1px solid #4494f0;
    background-color: #fff;
    outline: none;
    cursor: pointer;
}

/* Dialog03 */
.dia03-txt{
    padding: 10px 20px;
    background: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
    box-sizing: border-box;
}
.form-08 .form-08-item{
    width: 50%;
}
.form-08 .form-08-div{
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
}
.form-08 .form-08-div .el-form-item{
    width: calc(50% - 4px);  
}
.form-09 .el-form-item{
    width: calc(50% - 10px);
}
.form-10 .form-10-item{
    width: 50%;
}
.form-10 .form-10-item .form-10-item-div{
    font-size: 12px;
    color: #6b809f;
    line-height: 22px;
}
.form-10 .form-10-item .form-10-item-div i{
    font-size: 14px;
    cursor: pointer;
}
.form-10 .form-10-div{
    width: 50%;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
}
.form-10 .form-10-div .el-form-item:nth-of-type(1){
    width: 70%;
}
.form-10 .form-10-div .el-form-item:nth-of-type(2){
    width: 30%;
    margin-left: 8px;
    box-sizing: border-box;
}
.form-10 .form-10-div .el-form-item:nth-of-type(2) label{
    color: #fff !important;
}
.form-11 .el-form-item{
    width: calc(50% - 10px);
}
.form-11 .el-form-item .el-form-item__content{
    line-height: 22px !important;
}
.form-11 .el-form-item .form-11-div{
    font-size: 12px;
    color: #6b809f;
}
.form-11 .el-form-item i{
    font-size: 14px;
    cursor: pointer;
}
.form-12 .el-form-item{
    width: calc(50% - 10px);
}
.form-12 .el-form-item .form-12-input{
    width: calc(50% - 6px);
    float: left;
}
.form-12 .el-form-item .el-select{
    width: calc(50% - 6px) !important;
    float: right;
}
.dia03-button .el-button{
    margin-top: 20px;
    font-size: 12px;
    padding: 10px 20px;
}
.dia03-button .el-button:hover{
    color: #409EFF;
    border-color: #409EFF;
    background-color: #ecf5ff;
}
.dia03-button .el-button:focus{
    color: #409EFF;
    border-color: #409EFF;
    background-color: #ecf5ff;
}
.dia03-button .el-button i{
    font-size: 14px;
}
.dia03-button .dia03-button-content{
    position: relative;
}
.dia03-button .dia03-button-content .el-icon-close{
    position: absolute;
    right: 0;
    width: 48px;
    height: 48px;
    font-size: 14px;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    z-index: 999;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form .el-radio{
    display: inline-block;
    width: auto;
    color: rgba(0,0,0,.65);
    margin-left: 0;
    margin-right: 16px;
}
.ly-dialog .el-dialog__body .menu-content .menu-ul .el-form .el-radio span{
    font-size: 12px;
}


/* Dialog04 */
.dia04-top{
    overflow: hidden;
    margin-bottom: 10px;
}
.dia04-top .dia04-top-div{
    float: right;
    margin-top: 10px;
    padding: 1px 8px;
    border: 1px solid #828692;
    border-radius: 2px;
    color: #828692;
    font-size: 12px;
    opacity: .6;
    cursor: pointer;
}
.dia04-botton {
    height: 900px;
    overflow: auto;
}
.form-13 .el-form-item{
    width: calc(50% - 10px);
}
.form-13 .el-form-item:nth-of-type(1) .el-input{
    width: calc(50% - 10px);
}
.form-13 .el-form-item:nth-of-type(1) .el-input:first-child{
    float: left;
}
.form-13 .el-form-item:nth-of-type(1) .el-input:last-child{
    float: right;
}
.dia04-botton .el-icon-close{
    position: absolute;
    right: 20px;
    font-size: 16px;
    top: 14px;
    z-index:999;
    font-weight: bold;
    cursor: pointer;
}

.form-bottom{
    margin-top: 20px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
    height: 450px;
}
.form-bottom .bottom-ul{
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    color: #6b809f;
}
.form-bottom .bottom-ul li{
    float: left;
    width: 33%;
}
.el-tooltip__popper{
    max-width: 200px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 94px;
    height: 94px;
    line-height: 94px;
    text-align: center;
}
.avatar {
    width: 94px;
    height: 94px;
    display: block;
}
.el-upload__input{
    display: none !important;
}
.hide-bottom .hide-bottom-span{
    display: block;
    margin: 10px;
    text-align: center;
    color: #108ee9;
    cursor: pointer;
}
.hide-bottom .transition-box{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.ly-dialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
</style>
