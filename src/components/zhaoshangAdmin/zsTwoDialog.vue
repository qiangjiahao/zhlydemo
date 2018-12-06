<template>
    <div class="zsTwoDialog">
        <el-button class="button-dialog" icon="el-icon-plus" plain @click="dialogFormVisible = true">渠道联系人</el-button>
        <el-dialog title="新建渠道联系人" :visible.sync="dialogFormVisible" class="zsTwo-dialog" width="700px" top="100px" center append-to-body>               
            <el-form :model="ruleForm" class="demo-ruleForm" :rules="rules" ref="ruleForm" hide-required-asterisk> 
                <div class="tc-form-content">
                    <div class="tc-form-contents">
                        <el-form-item label="姓名" prop="xm">
                            <el-input v-model="ruleForm.xm" placeholder="请填写姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="电话" prop="dh">
                            <el-input v-model="ruleForm.dh" placeholder="请填写电话"></el-input>
                        </el-form-item>
                    </div>
                    <div class="tc-form-contents">
                        <el-form-item label="公司名称" prop="gsmc">
                            <el-input v-model="ruleForm.gsmc" placeholder="请填写公司名称"></el-input>
                        </el-form-item>
                        <el-form-item label="所属城市/区域/商圈" prop="ss">    
                            <el-input v-model="ruleForm.ss" placeholder="请选择商圈"></el-input>
                        </el-form-item>
                    </div>
                    <div class="tc-form-contents">
                        <el-form-item label="公司名称" prop="gsmc">
                            <el-input v-model="ruleForm.gsmc" placeholder="请填写公司名称"></el-input>
                        </el-form-item>
                    </div>
                    <div class="tc-form-contents" style="padding-bottom:40px;">
                        <el-form-item label="通讯地址" prop="txdz" style="width:100%;">
                            <el-input
                            type="textarea"
                            :rows="4"
                            placeholder="请填写公司名称"
                            v-model="ruleForm.textarea">
                            </el-input>
                        </el-form-item>
                    </div>
                </div> 
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="save('ruleForm')">保 存</el-button>
            </div>   
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible"
            width="400px"
            top="100px"
            :modal="false"
            center
            class="zsDialog-dialog02"
            append-to-body>
            <div class="zsDialog-dialog02-div">
                <i class="el-icon-warning"></i>
                <p>新建成功</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="gb('ruleForm')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'zsTwoDialog',
    data(){
        return{
            dialogFormVisible: false,
            dialogVisible: false,
            ruleForm:{

            },
            rules: {        
                xm: [
                    { required: true, message: '公司名称不能为空', trigger: 'change' }
                ],
                dh: [
                    { required: true, message: '公司电话不能为空', trigger: 'change' }
                ]
            }
        }
    },
    methods:{
        save(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.dialogVisible=true; 
                } else {    
                    return false;
                }
            });
        },
        gb(formName){
            this.dialogVisible=false;       
            setTimeout(()=>{this.dialogFormVisible=false;this.$refs[formName].resetFields();},1000);                  
        }
    }
}
</script>
<style>
.zsTwoDialog .button-dialog{
    float: right;
    color: #585858;
    border-radius: 4px;
    border: .6px solid rgba(130,134,146,.6);
    margin-top: 6px;
    padding: 0 15px;
    font-size: 14px;
    height: 28px;
}
.zsTwo-dialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.zsTwo-dialog .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.zsTwo-dialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.zsTwo-dialog .el-dialog__body .demo-ruleForm{
    padding: 20px;
}
.zsTwo-dialog .el-dialog__body .demo-ruleForm label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.zsTwo-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-form-item__content{
    line-height: 30px;
}
.zsTwo-dialog .el-dialog__body .demo-ruleForm .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}
.zsTwo-dialog .el-dialog__body .demo-ruleForm .tc-form-content{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.zsTwo-dialog .el-dialog__body .demo-ruleForm .tc-form-content .tc-form-contents{
    display: flex;
    justify-content: space-between;
}
.zsTwo-dialog .el-dialog__body .demo-ruleForm .tc-form-content .tc-form-contents .el-form-item{
    width: calc(50% - 10px);
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
}
.zsTwo-dialog .el-dialog__body .demo-ruleForm .tc-form-content .tc-form-contents .el-form-item textarea{
    padding: 4px 7px;
    font-size: 12px;
}

.zsTwo-dialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.zsTwo-dialog .el-dialog__footer .el-button{
    padding: 10px 15px;
}
.zsDialog-dialog02 .zsDialog-dialog02-div{
    text-align: center;
}
.zsDialog-dialog02 .zsDialog-dialog02-div i{ 
    font-size: 84px;
}
.zsDialog-dialog02 .zsDialog-dialog02-div p{
    font-size: 18px;
    color: #979797;
    margin-top: 20px;
}
.zsDialog-dialog02 .el-button{
    padding: 8px 42px;
}
</style>


