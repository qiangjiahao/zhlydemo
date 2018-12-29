<template>
    <div style="display: inline-block;">
        <span style="cursor:pointer;padding-left:10px" @click="bjvisible=true">编辑</span>  
        <el-dialog :title="txt" :visible.sync="bjvisible" width="300px" :append-to-body="true" class="xgDialog">
            <el-form :model="form" ref="form" class="demo-ruleForm" :rules="rules" hide-required-asterisk>
                <el-form-item :label="txt" prop="name">
                    <el-input v-model="form.name" autocomplete="off" :placeholder="txt"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="bjvisible=false" plain>取 消</el-button>
                <el-button type="primary" @click="save('form')">确 定</el-button>
            </div>
        </el-dialog>
    </div> 
</template>
<script>
import { Editcontractlabel } from '@/axios/api' //编辑合同标签
import { Typeedit } from '@/axios/api' //费用类型编辑
import { EdittenantTAB } from '@/axios/api' //编辑租客标签
import { Edittenantindustry } from '@/axios/api' //编辑租客行业


export default {
    name: 'xgDialog',
    inject: ['reload'],
    props:{
        txt:{
            type: String,
            required: true
        },
        bjid:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
    },
    data(){
        return{
            form:{
                name: ''
            },
            rules: {        
                name: [{ required: true, message: '请输入'+this.txt, trigger: 'change' }]
            },
            bjvisible: false
        }
    },
    methods:{
        save(formName) { 
            var bjid=parseInt(this.bjid)
            this.$refs[formName].validate((valid) => {
            if (valid) {
                if(this.txt=="合同标签"){
                    Editcontractlabel({ 
                    id: this.bjid,
                    name: this.form.name
                    }).then(res => {
                    if (res.flag == 0) {
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        }); 
                        }
                    });
                }else if(this.txt=="费用类型"){
                    Typeedit({ 
                    id: this.bjid,
                    name: this.form.name
                    }).then(res => {
                    if (res.flag == 0) {
                        this.$message({
                            message: "保存成功",
                            type: 'success'
                        }); 
                        }
                    });           
                }else if(this.txt=="租客标签"){
                    EdittenantTAB({ 
                    id: this.bjid,
                    name: this.form.name
                    }).then(res => {
                    if (res.flag == 0) {
                        this.$message({
                            message: "保存成功",
                            type: 'success'
                        }); 
                        }
                    });           
                }else if(this.txt=="行业管理"){
                    Edittenantindustry({ 
                    id: this.bjid,
                    name: this.form.name
                    }).then(res => {
                    if (res.flag == 0) {
                        this.$message({
                            message: "保存成功",
                            type: 'success'
                        }); 
                        }
                    });           
                }
                this.bjvisible=false;
                this.reload();
            } else {
                return false;
            }
        });     
      }
    },
    mounted(){
        this.form.name=this.name;
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


