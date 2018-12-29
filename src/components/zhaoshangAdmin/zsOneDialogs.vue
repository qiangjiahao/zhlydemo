<template>
    <el-dialog title="新建客户" :visible.sync="visible" class="zsOne-dialog" width="1000px" top="100px" center :before-close="modalClose" :append-to-body="true">               
        <el-form :model="ruleForm" class="demo-ruleForm" :rules="rules" ref="ruleForm"> 
            <div class="tc-form-top">
                <div class="tc-form-tops">
                    <div class="tc-form-txt">
                        <span>客户信息</span>
                    </div>
                    <div class="tc-form-content" style="height: 610px;overflow-y: auto;">
                        <div class="tc-form-contents">
                            <el-form-item label="客户" prop="kh">
                                <el-input v-model="ruleForm.kh" placeholder="请填写租客"></el-input>
                            </el-form-item>
                            <el-form-item label="跟进人" prop="gjr">    
                                <el-input v-model="ruleForm.gjr" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents">
                            <el-form-item label="行业" prop="hy">
                                <el-input v-model="ruleForm.hy" placeholder="请选择行业"></el-input>
                            </el-form-item>
                            <el-form-item label="客户联系人" prop="khlxr">    
                                <el-input v-model="ruleForm.khlxr" placeholder="请填写客户联系人"></el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents">
                            <el-form-item label="预计签约时间" prop="yjqysj">
                                <el-date-picker
                                v-model="ruleForm.yjqysj"
                                type="date"
                                placeholder="请选择预计签约时间">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="需求数量/㎡" prop="xqsl01,xqsl02" class="two-el-form-item">    
                                <el-input v-model="ruleForm.xqsl01" placeholder="Min"></el-input>
                                &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                                <el-input v-model="ruleForm.xqsl02" placeholder="Max"></el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents">
                            <el-form-item label="来访时间" prop="lfsj">
                                <el-date-picker
                                v-model="ruleForm.lfsj"
                                type="date"
                                placeholder="请选择预计签约时间">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="客户状态" prop="khzt">    
                                <el-select v-model="ruleForm.khzt">
                                    <el-option
                                    v-for="item in khzt"
                                    :key="item.id"
                                    :label="item.label"
                                    :value="item.value">               
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents tc-form-contents02">
                            <el-form-item label="来访渠道" prop="lfqd">    
                                <el-select v-model="ruleForm.lfqd">
                                    <el-option
                                    v-for="item in lfqd"
                                    :key="item.id"
                                    :label="item.label"
                                    :value="item.value">               
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents tc-form-contents02">
                            <el-form-item label="渠道联系人" prop="qdlxr">    
                                <el-input v-model="ruleForm.qdlxr" placeholder="请填写渠道联系人"></el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents tc-form-contents02">
                            <el-form-item label="备注" prop="bz">    
                                <el-input
                                type="textarea"
                                :rows="1"
                                style="height:100px;"
                                placeholder="请填写备注信息"
                                v-model="ruleForm.bz">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents tc-form-contents02">
                            <el-form-item label="成交几率" prop="cjjl">    
                                <el-slider v-model="ruleForm.cjjl" style="float:left;width:90%;"></el-slider><span style="float:right;margin-top:4px;">111</span>
                            </el-form-item>
                        </div>
                    </div>
                </div>
                <div class="tc-form-tops">
                    <div class="tc-form-txt">
                        <span>房源信息</span>
                    </div>
                    <div class="tc-form-content" style="overflow:hidden;height: 610px;">
                        <fymsg></fymsg>
                    </div>
                </div>
            </div>
            <div class="tc-form-bottom">
                <div class="bottom-txt" @click="isbh,show2 = !show2">{{xsgd}}</div>
                <transition name="el-zoom-in-top">
                    <div v-show="show2" class="transition-box">
                        <div class="tc-form-top">
                            <div class="tc-form-tops">
                                <div class="tc-form-txt">
                                    <span>需求信息</span>
                                </div>
                                <div class="tc-form-content">
                                    <div class="tc-form-contents">
                                        <el-form-item label="城市/区域/商圈" prop="cqs" style="width: 100%;">
                                            <el-input v-model="ruleForm.cqs" placeholder="请输入城市/区域/商圈"></el-input>
                                        </el-form-item>
                                    </div>
                                    <div class="tc-form-contents">
                                        <el-form-item label="期望价格" prop="qwjg" class="two-el-form-item">
                                            <el-input v-model="ruleForm.qwjg01" placeholder="Min"></el-input>
                                            &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                                            <el-input v-model="ruleForm.qwjg02" placeholder="Max"></el-input>
                                        </el-form-item>
                                        <el-form-item label="qwjgdw" prop="qwjgdw" class="fffcolor">    
                                            <el-select v-model="ruleForm.qwjgdw">
                                                <el-option
                                                v-for="item in qwjgdw"
                                                :key="item.id"
                                                :label="item.label"
                                                :value="item.value">               
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </div>
                                </div>
                            </div>
                            <div class="tc-form-tops">
                                <div class="tc-form-txt">
                                    <span>客户当前信息</span>
                                </div>
                                <div class="tc-form-content ">
                                    <div class="tc-form-contents">
                                        <el-form-item label="当前地址" prop="dqdz">
                                            <el-input v-model="ruleForm.dqdz" placeholder="请输入当前地址"></el-input>
                                        </el-form-item>
                                        <el-form-item label="当前合同到期日" prop="dqhtdqr">
                                            <el-date-picker
                                            v-model="ruleForm.dqhtdqr"
                                            type="date"
                                            placeholder="请选择日期">
                                            </el-date-picker>
                                        </el-form-item>
                                    </div>
                                    <div class="tc-form-contents">
                                        <el-form-item label="当前租赁数" prop="dqzls" class="two-el-form-item">
                                            <el-input v-model="ruleForm.dqzls01" placeholder="请输入当前面积"></el-input>
                                            <el-select v-model="ruleForm.dqzls02" style="width: calc(50% - 40px);padding-left: 10px;box-szie:border-box;">
                                                <el-option
                                                label="m²"
                                                value="01">               
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="当前租金" prop="dqzj" class="two-el-form-item">
                                            <el-input v-model="ruleForm.dqzj01" placeholder="请输入当前租金"></el-input>
                                            <el-select v-model="ruleForm.dqzj02" style="width: calc(50% - 10px);padding-left: 10px;box-szie:border-box;">
                                                <el-option
                                                v-for="item in qwjgdw"
                                                :key="item.id"
                                                :label="item.label"
                                                :value="item.value">               
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition> 
            </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel('ruleForm')" plain>取 消</el-button>
            <el-button type="primary" @click="save('ruleForm')">保 存</el-button>
        </div>   
    </el-dialog>
</template>
<script>
import fymsg from "@/components/fangyuanAdmin/fymsg"

export default {
    name: 'zsOneDialogs',
    components:{
        fymsg
    },
    props:{
        visible: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            ruleForm:{
                kh: '',
                gjr: '111111111',
                lfsj: new Date(),
                khzt: '01',
                lfqd: '08',
                qwjgdw: '03',
                dqzls02: '01',
                dqzj02: '01'
            },
            rules: {        
                
            },
            khzt:[
                { label:'初次接触',value:'01' },
                { label:'潜在客户',value:'02' },
                { label:'意向客户',value:'03' },
                { label:'成交客户',value:'04' },
                { label:'流失客户',value:'05' }
            ],
            lfqd:[
                { label:'自由经纪人',value:'01' },
                { label:'公司经纪人',value:'02' },
                { label:'老客户介绍',value:'03' },
                { label:'政府关系',value:'04' },
                { label:'股东关系',value:'05' },
                { label:'第三方个人',value:'06' },
                { label:'同行介绍',value:'07' },
                { label:'上门',value:'08' },
                { label:'电话',value:'09' },
                { label:'网络',value:'10' }
            ],
            xsgd: '显示更多',
            qwjgdw:[
                { label:'元/㎡·天',value:'01' },
                { label:'元/㎡·月',value:'02' },
                { label:'元/天',value:'03' },
                { label:'元/月',value:'04' }
            ],
            badgeval: '',
            show2: false
        }
    },
    methods:{  
         modalClose(){
            // 关闭弹窗，触发父组件修改visible值
            this.$emit('update:visible', false);
        },
        isbh(){
            if(this.xsgd=="显示更多"){
                this.xsgd="收起";
            }else{
                this.xsgd="显示更多";
            }
            
        },
        save(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.dialogFormVisible=false;
                } else {
                    return false;
                }
            });
        },
        cancel(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.dialogFormVisible=false;
                } else {
                    return false;
                }
            });
        }
    }
}
</script>
<style>
.zsOne-dialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.zsOne-dialog .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.zsOne-dialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.zsOne-dialog .demo-ruleForm{
    padding: 20px;
}
.zsOne-dialog .demo-ruleForm label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.zsOne-dialog .demo-ruleForm .el-form-item .el-form-item__content{
    line-height: 30px;
}
.zsOne-dialog  .demo-ruleForm .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}

.zsOne-dialog .demo-ruleForm .el-select{
    width: 100%;
}
.zsOne-dialog  .demo-ruleForm .el-select .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}

.zsOne-dialog .demo-ruleForm .el-form-item textarea{
    padding: 4px 7px;
    max-height: 90px;
    font-size: 12px;
    height: 100px;
    max-height: 100px;
}

.zsOne-dialog .demo-ruleForm .el-form-item .el-date-editor.el-input{
    width: 100%;
}
.zsOne-dialog .demo-ruleForm .el-form-item .el-date-editor span{
    left: auto;
    right: 5px;
}
.zsOne-dialog .demo-ruleForm .el-form-item .el-date-editor span i{
    line-height: 30px;
}
.zsOne-dialog  .demo-ruleForm .tc-form-top{
    display: flex;
    justify-content: space-between;
}
.zsOne-dialog .demo-ruleForm .tc-form-top .tc-form-tops{
    width: calc(50% - 9px);
}
.zsOne-dialog .demo-ruleForm .tc-form-txt{
    padding: 10px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.zsOne-dialog .demo-ruleForm .tc-form-content{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.zsOne-dialog .demo-ruleForm .tc-form-content .tc-form-contents{
    display: flex;
    justify-content: space-between;
}
.zsOne-dialog  .demo-ruleForm .tc-form-top .tc-form-tops .tc-form-content .el-form-item{
    width: calc(50% - 10px);
    padding-right: 10px;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
}
.zsOne-dialog .demo-ruleForm .tc-form-top .tc-form-tops .tc-form-content .two-el-form-item .el-form-item__content{
    width: 100%;
    display: flex;
}
.zsOne-dialog .demo-ruleForm .tc-form-top .tc-form-tops .tc-form-content .two-el-form-item .el-form-item__content .el-input{
    width: calc(50% - 10px);
}
.zsOne-dialog .demo-ruleForm .tc-form-top .tc-form-tops .tc-form-contents02 .el-form-item{
    width: 100%;
}

.zsOne-dialog .tc-form-bottom .bottom-txt{
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #108ee9;
    cursor: pointer;
}
.zsOne-dialog .fffcolor label{
    color: #fff;
}
.zsOne-dialog .tc-form-bottom .el-select .el-input{
    width: 100% !important;
}
.zsOne-dialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
</style>


