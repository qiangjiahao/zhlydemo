<template> 
    <el-dialog :title="title" :visible.sync="visible" class="htmldialog" width="1000px" top="100px" center :before-close="modalClose" :append-to-body="true" :close-on-click-modal="false">               
        <div class="content">
            <div class="title">Step1:复制关键词属性</div>
            <div class="msg">
                <div class="msgtitle">房源信息</div>
                <div class="msgcontent">
                    <el-button plain v-for="item in gjcsx01" :key="item.id" @click="copyUrl(item.value)">{{item.value}}</el-button>
                </div>
            </div>
            <div class="msg">
                <div class="msgtitle">租客信息</div>
                <div class="msgcontent">
                    <el-button plain v-for="item in gjcsx02" :key="item.id" @click="copyUrl(item.value)">{{item.value}}</el-button>
                </div>
            </div>
            <div class="msg">
                <div class="msgtitle">合同信息</div>
                <div class="msgcontent">
                    <el-button plain v-for="item in gjcsx03" :key="item.id" @click="copyUrl(item.value)">{{item.value}}</el-button>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="title">Step1:上传合同模板</div>
            <el-upload
                class="upload-demo"
                ref="upload"
                action="http://dev.360yibao.co/builadmin/ucenter/upload"
                accept=".docx"
                :limit=1
                :auto-upload="false"
                :on-success="sccg"
                :on-exceed="aaa">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>  
                <div slot="tip" class="el-upload__tip" style="font-size:16px;">文件只能上传docx格式文件</div>
            </el-upload>   
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button plain @click="modalClose" >取 消</el-button>
            <el-button type="primary" size="small" @click="submitUpload">上传到服务器</el-button>
        </div>   
    </el-dialog>
</template>

<script>
import { Getcontractkeywords } from '@/axios/api' //获取合同关键词

export default {
    name: 'zkDialog',
    inject: ['reload'],
    props:{
        visible: {
            type: Boolean,
            default: false
        }
    },
    components:{
        
    },
    data(){
        return{
            title: '新建合同模板',
            gjcsx01: [],
            gjcsx02: [],
            gjcsx03: []
        }
    },
    mounted(){
        Getcontractkeywords({                                                
        }).then(res => {
            if(res.flag == 0){ 
                this.gjcsx01 = res.data.gatherlist;
                this.gjcsx02 = res.data.customerlist;
                this.gjcsx03 = res.data.contractlist;
            }
        });
    },
    methods:{
        modalClose() {
            // 关闭弹窗，触发父组件修改visible值
            this.$emit('update:visible', false);
        },
        submitUpload() {
            this.$refs.upload.submit();
        },
        copyUrl(name) {
            const input = document.createElement('input')
            document.body.appendChild(input)
            input.setAttribute('value',name)
            input.select()
            if (document.execCommand('copy')) {
                this.$message({
                    message: '复制成功',
                    type: 'success'
                });
                document.execCommand('copy')
            }
            document.body.removeChild(input)
        },
        aaa(files, fileList){
            this.$message({
                message: '只能上传一个合同模板',
                type: 'warning'
            });
        },
        sccg(res, file, fileList){
            if(res.flag==0){
                this.$message({
                    message: res.data.msg,
                    type: 'success'
                });
                this.reload();
            }
        }
    }
}
</script>

<style>
.htmldialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.htmldialog .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.htmldialog .el-dialog__body{
    background-color: #fff;
    font-size: 12px;
    padding: 0;
}
.htmldialog .el-dialog__body .content{
    padding: 10px 20px;
}
.htmldialog .el-dialog__body .content:nth-child(1){
    padding-bottom: 0; 
}
.htmldialog .el-dialog__body .content:nth-child(n+2){
    padding-top: 0; 
}
.htmldialog .el-dialog__body .content .title{
    font-size: 16px;
    color: #000;
    height: 38px;
    line-height: 38px;
}
.htmldialog .el-dialog__body .content .msg .msgtitle{
    height: 24px;
    line-height: 24px;
    border-left: 4px solid #2084fb;
    font-size: 14px;
    padding-left: 10px;
}
.htmldialog .el-dialog__body .content .msg .msgcontent{
    padding: 10px 0;
}
.htmldialog .el-dialog__body .content .msg .msgcontent .el-button+.el-button{
    margin-left: 0;
}
.htmldialog .el-dialog__body .content .msg .msgcontent .el-button{
    margin-right: 10px;
    margin-top: 6px;
    margin-bottom: 6px;
    padding: 10px 12px;
    border: 1px solid #6f6f6f;
    font-size: 12px;
}

.htmldialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.htmldialog .el-dialog__footer .el-button{
    padding: 10px 30px;
}
</style>
