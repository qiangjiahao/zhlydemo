<template>
    <el-dialog :title="title" :visible.sync="visible" width="300px" :append-to-body="true" class="xgDialog" :before-close="modalClose" :close-on-click-modal="false">
        <el-form :model="form" ref="form" class="demo-ruleForm" :rules="rules" hide-required-asterisk>
            <el-form-item :label="title=='密码账号'?'旧密码':title" prop="name">
                <el-input v-model="form.name" autocomplete="off" :placeholder="'请输入'+title"></el-input>
            </el-form-item>
             <div v-if="mnxg">
                <el-form-item label="新密码" prop="pass">
                    <el-input type="password" v-model="form.pass" autocomplete="off" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="form.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
                </el-form-item> 
            </div>
        </el-form>
       
        <div slot="footer" class="dialog-footer">
            <el-button @click="modalClose" plain>取 消</el-button>
            <el-button type="primary" @click="save('form')">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
import { Housesourcelabeladded } from '@/axios/api' //房源标签添加
import { Addcontractlabel } from '@/axios/api' //添加合同标签
import { Feetypeaddition } from '@/axios/api' //费用类型添加
import { Addtenantlabel } from '@/axios/api' //添加租客标签
import { Addtenantindustry } from '@/axios/api' //添加租客行业
import { changepassword } from '@/axios/api' //修改密码


export default {
    name: 'xgDialog',
    inject: ['reload'],
    props:{
        visible: {
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            form:{
                name: '',
                pass: '',
                checkPass: ''
            },
            rules: {        
                name: [{ required: true, message: '请输入'+this.title, trigger: 'change' }],
                pass: [{ required: true, message: '请输入新密码', trigger: 'change' }],
                checkPass: [{ required: true, message: '请再次输入密码', trigger: 'change' }]
            },
            mnxg: false
        }
    },
    mounted(){
        console.log(this.title)
        if(this.title=="密码账号"){
            this.mnxg=true;
        }
    },
    methods:{
        modalClose(){
            this.$emit('update:visible', false);
        },
        save(formName) {  
            this.$refs[formName].validate((valid) => {
            if (valid) {
                if(this.title=="密码账号"){
                    changepassword({  
                        ypw: this.form.name,
                        pw: this.form.pass,
                        pwd: this.form.checkPass                                      
                    }).then(res => {
                    if (res.flag == 0) {
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                            }); 
                            this.$emit('update:visible', false);
                            this.reload();
                        } else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            });  
                        }
                    });
                }else if(this.title=="房源标签"){
                    Housesourcelabeladded({  
                        name: this.form.name                                        
                    }).then(res => {
                    if (res.flag == 0) {
                        this.$message({
                        message: '保存成功',
                        type: 'success'
                        }); 
                        this.$emit('update:visible', false);
                        this.reload();
                        } else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            });  
                        }
                    });             
                }else if(this.title=="合同标签"){
                    Addcontractlabel({  
                        name: this.form.name                                        
                    }).then(res => {
                    if (res.flag == 0) {
                        this.$message({
                        message: '保存成功',
                        type: 'success'
                        }); 
                        this.$emit('update:visible', false);
                        this.reload();
                        } else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            });  
                        }
                    });             
                }else if(this.title=="费用类型"){
                    Feetypeaddition({  
                        name: this.form.name                                        
                    }).then(res => {
                    if (res.flag == 0) {
                        this.$message({
                        message: '保存成功',
                        type: 'success'
                        }); 
                        this.$emit('update:visible', false);
                        this.reload();
                        } else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            });  
                        }
                    });
                }else if(this.title=="租客标签"){
                    Addtenantlabel({  
                        name: this.form.name                                        
                    }).then(res => {
                    if (res.flag == 0) {
                        this.$message({
                        message: '保存成功',
                        type: 'success'
                        }); 
                        this.$emit('update:visible', false);
                        this.reload();
                        } else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            });  
                        }
                    });
                }else if(this.title=="行业管理"){
                    Addtenantindustry({  
                        name: this.form.name                                        
                    }).then(res => {
                    if (res.flag == 0) {
                        this.$message({
                        message: '保存成功',
                        type: 'success'
                        }); 
                        this.$emit('update:visible', false);
                        this.reload();
                        } else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error'
                            });  
                        }
                    });
                }  
            } else {
                return false;
            }
        });     
      }
    }
}
</script>
<style>
.xgDialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.xgDialog .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.xgDialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.xgDialog .el-dialog__body .demo-ruleForm{
    padding: 20px;
}
.xgDialog .el-dialog__body .demo-ruleForm label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.xgDialog .el-dialog__body .demo-ruleForm .el-form-item .el-form-item__content{
    line-height: 30px;
}
.xgDialog .el-dialog__body .demo-ruleForm .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}
.xgDialog .el-dialog__body .demo-ruleForm .el-form-item .el-select{
    width: 100%;
}
.xgDialog .el-dialog__body .demo-ruleForm .el-form-item .el-select .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}
.xgDialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.xgDialog .el-dialog__footer .el-button{
    padding: 10px 30px;
}
</style>


