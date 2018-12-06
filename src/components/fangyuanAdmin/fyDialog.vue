<template>     
    <div> 
        <el-dialog title="新增房源" :visible.sync="visible" class="fy-dialog" width="700px" top="100px" center :before-close="modalClose">               
            <div class="empty"></div> 
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <div class="fyform">
                    <el-form-item label="选择楼宇">
                        <el-select v-model="ruleForm.xzly">
                            <el-option
                            v-for="item in xzly"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value"                            
                            style="height:58px;line-height:58px;display:flex;">               
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="fyform02">
                    <div class="fyform02-txt">房源信息</div>
                    <div class="fyform-content">
                        <div class="fyform-contents">
                            <el-form-item label="选择楼层" prop="xzlc">
                                <el-select v-model="ruleForm.xzlc" placeholder="请选择楼层">
                                    <el-option
                                    v-for="item in xzlc"
                                    :key="item.id"
                                    :label="item.label"
                                    :value="item.value">               
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="房号" prop="fh">    
                                <el-input v-model="ruleForm.fh" placeholder="请输入房号"></el-input>
                            </el-form-item>
                        </div>
                        <div class="fyform-contents">
                            <el-form-item label="面积">
                                <el-input v-model="ruleForm.mj" placeholder="请输入面积"></el-input>
                            </el-form-item>
                            <el-form-item label="装修">    
                                <el-select v-model="ruleForm.zx" placeholder="装修选择">
                                    <el-option
                                    v-for="item in zx"
                                    :key="item.id"
                                    :label="item.label"
                                    :value="item.value">               
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div> 
                        <div class="fyform-contents fyform-contents01">
                            <el-form-item label="工位" prop="gw">
                                <el-input v-model="ruleForm.gw" placeholder="工位"></el-input>
                            </el-form-item>
                        </div>                     
                    </div>
                    <div class="fyform-content fyform-content01">
                          <div class="fyform-contents">
                            <el-form-item label="招商状态">
                                <el-select v-model="ruleForm.zszt">
                                    <el-option
                                    v-for="item in zszt"
                                    :key="item.id"
                                    :label="item.label"
                                    :value="item.value">               
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <div class="fyform-contents-right">
                                <el-form-item label="预租单价">    
                                    <el-input v-model="ruleForm.yzdj" placeholder="请输入预租单价"></el-input>
                                </el-form-item>
                                <el-form-item label="房号">    
                                    <el-select v-model="ruleForm.dj">
                                        <el-option label="元/工位·天" value="1"></el-option>
                                        <el-option label="元/工位·月" value="2"></el-option>
                                        <el-option label="元/天" value="3"></el-option>
                                        <el-option label="元/月" value="4"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>                       
                        </div>                   
                    </div>
                </div>
                <div class="fyform02 ">
                    <div class="fyform02-txt">
                        <span>房源信息</span>
                        <span>标签管理</span> 
                    </div>
                    <div class="fyform-content">
                        <div class="fyform-contents">
                            <el-form-item style="width:100%;">
                                <el-checkbox-group v-model="ruleForm.checkboxGroup1">
                                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                                </el-checkbox-group>
                            </el-form-item>
                        </div>
                    </div>
                </div>
            </el-form>
             <div slot="footer" class="dialog-footer">
                <el-button plain @click="submitForm02('ruleForm')">保存并新建下一个</el-button>
                <el-button type="primary" @click="submitForm01('ruleForm')">保存</el-button>
            </div>         
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible01"
            width="400px"
            :modal="false"
            center
            class="fy-dialog02">
            <div class="fy-dialog02-div">
                <i class="el-icon-warning"></i>
                <p>新建成功</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="gb01('ruleForm')">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            :visible.sync="dialogVisible02"
            width="400px"
            center
            class="fy-dialog02">
            <div class="fy-dialog02-div">
                <i class="el-icon-warning"></i>
                <p>新建成功</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="gb02('ruleForm')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
const cityOptions = ['朝南', '朝北', '有窗', '自用', '精装修'];
export default {
    name: 'fyDialog',
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
            dialogFormVisible: false,
            dialogVisible01: false,
            dialogVisible02: false,
            ruleForm: {
                xzly: 'aaa',
                xzlc: '',
                fh: '',
                mj: '',
                zx: '',
                gw: '',
                zszt: '1',
                yzdj: '',
                dj: '1',
                checkboxGroup1: []
            },
            cities: cityOptions,
            xzly: [{
                value: 'aaa',
                label: 'aaa'
                }, {
                value: 'bbb',
                label: 'bbb'
                }, {
                value: 'ccc',
                label: 'ccc'
                }, {
                value: 'ddd',
                label: 'ddd'
                }
            ],
            xzlc:[
                {
                    label: '1',
                    value: '1'
                },
                {
                    label: '2',
                    value: '2'
                },
                {
                    label: '3',
                    value: '3'
                },
                {
                    label: '4',
                    value: '4'
                }
            ],
            zx:[
                {
                    label: '不限',
                    value: '1'
                },
                {
                    label: '毛坯',
                    value: '2'
                },
                {
                    label: '简装',
                    value: '3'
                },
                {
                    label: '精装',
                    value: '4'
                }
            ],
            zszt:[
                {
                    label: '可招商',
                    value: '1'
                },
                {
                    label: '不可招商',
                    value: '2'
                }
            ],
            rules: {
                xzlc: [
                    { required: true, message: '请选择楼层', trigger: 'change' }
                ],
                fh: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                gw: [
                    { required: true, message: '年龄不能为空', trigger: 'change'}
                ]
            }
        }
    },
    methods:{
        submitForm01(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.dialogVisible01=true;
                } else {
                    return false;
                }
            });
        },
        gb01(formName){
            this.dialogVisible01=false;       
            setTimeout(()=>{this.$emit('update:visible', false);this.$refs[formName].resetFields();},1000);                  
        },
        submitForm02(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.dialogVisible02=true;
                } else {
                    return false;
                }
            });
        },
        gb02(formName){
            this.dialogVisible02=false;
            this.ruleForm.fh='';   
        },
        modalClose(){
            // 关闭弹窗，触发父组件修改visible值
            this.$emit('update:visible', false);
        }
    }
}
</script>

<style>
.fy-dialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.fy-dialog .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.fy-dialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.fy-dialog .el-dialog__body .empty{
    width: 100%;
    height: 21px;
    background-color: #fff;
    margin-bottom: 16px;
}
.fy-dialog .el-dialog__body .demo-ruleForm{
    padding: 20px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform .el-form-item{
    display: flex;
    flex-direction: column; 
    width: 100%;
    padding-right: 10px;
    box-sizing: border-box;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform .el-form-item label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform .el-form-item .el-select{
    width: 100%;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform .el-form-item .el-select input{
    height: 58px;
    line-height: 58px; 
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02{
    width: 100%;
    margin-top: 10px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform02-txt{
    padding: 10px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-contents{
    display: flex;
    justify-content: space-between;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item{
    width: calc(50% - 10px);
    padding-right: 10px;
    display: flex;
    flex-direction: column;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item .el-form-item__content{
    line-height: 30px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item .el-select{
    width: 100%;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item .el-select .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .fyform-contents01{
    justify-content: flex-start;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content01{
    margin-top: 10px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-contents-right{
    width: calc(50% - 10px);
    display: flex;
    justify-content: space-between;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-contents-right .el-form-item{
    width: 50%;   
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-contents-right .el-form-item:last-child label{
    color: #fff;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform02-txt span:last-child{
    font-size: 12px;
    cursor: pointer;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .el-checkbox-button{
    margin-right: 12px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .el-checkbox-button .el-checkbox-button__inner{
    padding: 6px 16px;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid #d9d9d9;
}
.fy-dialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.fy-dialog02 .fy-dialog02-div{
    text-align: center;
}
.fy-dialog02 .fy-dialog02-div i{ 
    font-size: 84px;
}
.fy-dialog02 .fy-dialog02-div p{
    font-size: 18px;
    color: #979797;
    margin-top: 20px;
}
.fy-dialog02 .el-button{
    padding: 8px 42px;
}
</style>
