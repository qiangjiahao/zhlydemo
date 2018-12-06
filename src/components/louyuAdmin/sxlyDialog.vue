<template>
    <div class="bjly">
        <el-button plain class="bily-button" @click.stop="dialogFormVisible = true"><i class="el-icon-plus"></i>编辑楼宇</el-button>
        <el-dialog title="编辑楼宇" :visible.sync="dialogFormVisible" class="bj-dialog" width="700px" top="100px" center :append-to-body="isbody"  @close="gb">               
            <el-menu class="el-menu-demo" :default-active="activeIndex" mode="horizontal">
                <el-menu-item v-for="(item,i) in lyformmsg" :key="i" :index="item.sub" @click="dj(i)" :class="{itemtab:i === selectIndex}">{{item.msg}}</el-menu-item>
            </el-menu>
            <div class="menu-ul">
                <div class="menu-li">
                    <Dialog01 v-for="(item,i) in lyformmsg" :key="i" :is="item.sub" v-show="i === selectIndex"></Dialog01>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <div class="bz">
                    <el-button plain v-show="isshang" @click="shang">上一步</el-button>
                    <el-button plain @click="xia" v-show="isxia">下一步</el-button>
                </div>
                <el-button type="primary">保存</el-button>
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
    name: 'sxly',
    components:{
        Dialog01,Dialog02,Dialog03,Dialog04
    },
    data(){
        return{          
            dialogFormVisible: false,
            isbody: true,
            activeIndex: 'Dialog01',
            isRouterAlive:false,
            selectIndex:0,
            isshang: false,
            isxia:true,
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
        dj(i){
            this.selectIndex=i;
            if(i>2){
                this.isxia = false;
                this.isshang = true;
            }else if(i<1){
                this.isshang = false;               
                this.isxia = true;
            }else{
                this.isxia = true;
                this.isshang = true; 
            }
        },
        gb(){
            this.selectIndex=0;
            this.isshang=false;
            this.isxia=true;
        },
        xia(){
            this.isshang = true;
            if(this.selectIndex==2){
                this.isxia = false;
                this.isshang = true;
                this.selectIndex++;
            }
            else{
                this.selectIndex++;
            }           
        },
        shang(){
            this.isxia = true;
            if(this.selectIndex==1){
                this.isshang = false;               
                this.selectIndex--;
            }
            else{
                this.selectIndex--;
            }
        }
    }
}
</script>

<style>

.Box-bottom .bjly{
    position: absolute;   
    left: -88px;
    top: -4px;
    display: none;
}
.Box-bottom .el-table__row:hover .bjly{
    display: block;
}
.Box-bottom .bjly .bily-button{
    padding: 6px 10px;
}

.bj-dialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.bj-dialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.bj-dialog .el-dialog__body .el-menu-demo{
    padding: 0 50px;
    border: 0;
    border-bottom: 1px solid #e9e9e9;
}
.bj-dialog .el-dialog__body .el-menu-demo .el-menu-item{
    height: 40px;
    line-height: 41px;
    font-size: 14px;
    margin-right: 20px;
    padding: 0;
    width: auto;
    border-bottom: 2px solid #fff; 
}
.bj-dialog .el-dialog__body .el-menu-demo .itemtab{
    border-bottom: 2px solid #409EFF !important;
    color: #303133;
    cursor: pointer;
}
.bj-dialog .el-dialog__body .menu-ul{
    padding: 20px;
    overflow: hidden;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li{
    width: 100%;
    overflow: hidden;
    float: left;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li .el-form .form-top{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li .el-form .form-public{
    display: flex;
    justify-content: space-between;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li .el-form label{
    width: 100%;
    min-height: 22px;
    font-size: 12px;
    color: #6b809f;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
    text-align: left;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li .el-form .el-form-item__content{
    line-height: 30px;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li .el-form .el-form-item__content .form-03-span{
    position: absolute;
    right: 10px;
    top: 22px;
    color: #353b4b;
    font-size: 14px;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li .el-form .el-select{
    width: 100%;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li .el-form input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li .el-form .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li .el-form .el-input__inner:hover{
    border-color: #49a9ee;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li  .el-form .el-input__inner[disabled]:hover{
    border-color: #e2e2e2;
}
.bj-dialog .el-dialog__body .menu-ul .menu-li  .el-form .el-input__inner:focus{
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
.bj-dialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.bj-dialog .el-dialog__footer .dialog-footer{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
