<template> 
    <el-dialog :title="title" :visible.sync="visible" class="zk-dialog" width="1000px" top="100px" center :before-close="modalClose" :append-to-body="true" :close-on-click-modal="false"	>               
        <el-form :model="ruleForm" class="demo-ruleForm" :rules="rules" ref="ruleForm" hide-required-asterisk> 
            <div class="tc-form-top">
                <div class="tc-form-tops">
                    <div class="tc-form-txt">
                        <span>客户信息</span>
                        <span style="cursor: pointer;font-size: 12px;color: #6b809f;margin-top: 6px;" >同步工商数据</span>
                    </div>
                    <div class="tc-form-content">
                        <div class="tc-form-contents">
                            <el-form-item label="租客名称" prop="zkmc">
                                <el-input v-model="ruleForm.zkmc" placeholder="请填写姓名或公司"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人" prop="lxr">    
                                <el-input v-model="ruleForm.lxr" placeholder="请填写租客联系人"></el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents">
                            <el-form-item label="证件号码" prop="zjhm">
                                <el-input v-model="ruleForm.zjhm" placeholder="请填写证件号码"></el-input>
                            </el-form-item>
                            <el-form-item label="行业分类" prop="hyfl">    
                                <el-select v-model="ruleForm.hyfl" placeholder="请选择行业分类" >
                                    <el-option :label="item.name" :value="item.id" v-for="(item, index) in typeFenlei" :key="index"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents">
                            <el-form-item label="电话" prop="khdh">
                                <el-input v-model="ruleForm.khdh" placeholder="请填写电话"></el-input>
                            </el-form-item>
                            <el-form-item label="邮箱" prop="yx">    
                                <el-input v-model="ruleForm.yx" placeholder="请填写邮箱"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </div>
                <div class="tc-form-tops">
                    <div class="tc-form-txt">
                        <span>开票信息</span>
                    </div>
                    <div class="tc-form-content">
                        <div class="tc-form-contents">
                            <el-form-item label="开户银行" prop="khyh">
                                <el-input v-model="ruleForm.khyh" placeholder="请填写开户银行"></el-input>
                            </el-form-item>
                            <el-form-item label="账号" prop="zh">    
                                <el-input v-model="ruleForm.zh" placeholder="请填写租客联系人"></el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents">
                            <el-form-item label="电话" prop="kpdh">
                                <el-input v-model="ruleForm.kpdh" placeholder="请填写电话"></el-input>
                            </el-form-item>
                            <el-form-item label="纳税人识别号" prop="nsrsbh">    
                                <el-input v-model="ruleForm.nsrsbh" placeholder="请填写纳税人识别号"></el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents">
                            <el-form-item label="开票地址" prop="kpdz" style="width:100%;">
                                <el-input v-model="ruleForm.kpdz" placeholder="请填写地址"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tc-form-bottom">
                <div class="tc-form-txt">
                    <span>工商信息</span>
                </div>
                <div class="tc-form-content">
                    <div class="tc-form-contents">
                        <el-form-item label="统一社会信用代码" prop="tyshxydm">
                            <el-input v-model="ruleForm.tyshxydm" placeholder="请填写统一社会信用代码"></el-input>
                        </el-form-item>
                        <el-form-item label="纳税人识别号" prop="nsrsbh02">    
                            <el-input v-model="ruleForm.nsrsbh02" placeholder="请填写纳税人识别号"></el-input>
                        </el-form-item>
                        <el-form-item label="注册号" prop="zch">    
                            <el-input v-model="ruleForm.zch" placeholder="请填写注册号"></el-input>
                        </el-form-item>
                        <el-form-item label="组织机构代码" prop="zzjgdm">    
                            <el-input v-model="ruleForm.zzjgdm" placeholder="请填写组织机构代码"></el-input>
                        </el-form-item>
                    </div>
                    <div class="tc-form-contents">
                        <el-form-item label="法定代表人" prop="fddbr">
                            <el-input v-model="ruleForm.fddbr" placeholder="请填写法定代表人"></el-input>
                        </el-form-item>
                        <el-form-item label="国籍" prop="gj">    
                            <el-input v-model="ruleForm.gj" placeholder="请填写国籍"></el-input>
                        </el-form-item>
                        <el-form-item label="注册资本" prop="zczb">    
                            <el-input v-model="ruleForm.zczb" placeholder="请填写注册资本"></el-input>
                        </el-form-item>
                        <el-form-item label="经营状态" prop="jyzt">    
                            <el-input v-model="ruleForm.jyzt" placeholder="请填写经营状态"></el-input>
                        </el-form-item>
                    </div>
                    <div class="tc-form-contents">
                        <el-form-item label="成立日期" prop="clrq">
                            <el-date-picker
                            v-model="ruleForm.clrq"
                            type="date"
                            placeholder="请选择成立日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="公司类型" prop="gslx">    
                            <el-input v-model="ruleForm.gslx" placeholder="请填写公司类型"></el-input>
                        </el-form-item>
                        <el-form-item label="人员规模" prop="rygm">    
                            <el-input v-model="ruleForm.rygm" placeholder="请填写人员规模"></el-input>
                        </el-form-item>
                        <el-form-item label="营业期限" prop="yyqx">    
                            <el-date-picker
                            v-model="ruleForm.yyqx"
                            type="date"
                            placeholder="请选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                    <div class="tc-form-contents">
                        <el-form-item label="登记机关" prop="djjg">
                            <el-input v-model="ruleForm.djjg" placeholder="请填写登记机关"></el-input>
                        </el-form-item>
                        <el-form-item label="核准日期" prop="hzrq">                           
                            <el-date-picker
                            v-model="ruleForm.hzrq"
                            type="date"
                            placeholder="请选择核准日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="英文名" prop="ywm">    
                            <el-input v-model="ruleForm.ywm" placeholder="请填写英文名"></el-input>
                        </el-form-item>
                        <el-form-item label="所属地区" prop="ssdq">    
                            <el-input v-model="ruleForm.ssdq" placeholder="请填写所属地区"></el-input>
                        </el-form-item>
                    </div>
                    <div class="tc-form-contents tc-form-contents02">
                        <el-form-item label="所属行业" prop="sshy">
                            <el-input v-model="ruleForm.sshy" placeholder="请选择所属行业"></el-input>
                        </el-form-item>                      
                        <el-form-item label="注册地址" prop="zcdz">    
                            <el-input v-model="ruleForm.zcdz" placeholder="请填写注册地址"></el-input>
                        </el-form-item>
                    </div>
                    <div class="tc-form-contents tc-form-contents02">
                        <el-form-item label="经营范围" prop="jyfw">    
                            <el-input type="textarea" v-model="ruleForm.jyfw" placeholder="请填写经营范围" :autosize="{ minRows: 1, maxRows: 4}"></el-input>
                        </el-form-item>
                    </div>
                </div> 
                <div class="tc-form-txt">
                    <span>客户标签</span>
                    <span style="font-size:12px;font-weight: 300;cursor: pointer;">标签管理</span>
                </div>         
                <div class="tc-form-content">
                    <el-checkbox-group v-model="ruleForm.checkboxGroup1">
                        <el-checkbox-button v-for="city in cities" :label="city.name" :key="city.id">{{city.name}}</el-checkbox-button>
                    </el-checkbox-group> 
                </div>                 
            </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button plain @click="modalClose" >取 消</el-button>
            <el-button type="primary" @click="save('ruleForm')">保 存</el-button>
        </div>   
    </el-dialog>
</template>

<script>
import { tenants } from '@/axios/api' //新建租客
import { industry } from '@/axios/api' //请求行业分类
import { customertags } from '@/axios/api' //请求行业分类
import { getonecustomer } from '@/axios/api' //编辑租客详情
import { editcustomer } from '@/axios/api' //再次编辑租客详情对话框

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
            title: '新建租客',
            ruleForm: {
                zkmc: '',
                lxr: '',
                zjhm: '',
                hyfl: '',
                khdh: '',
                yx: '',
                khyh: '',
                zh: '',
                kpdh: '',
                nsrsbh: '',
                kpdz: '',
                tyshxydm: '',
                nsrsbh02: '',
                zch: '',
                zzjgdm: '',
                fddbr: '',
                gj: '',
                zczb: '',
                jyzt: '',
                clrq: '',
                gslx: '',
                rygm: '',
                yyqx: '',
                djjg: '',
                hzrq: '',
                ywm: '',
                ssdq: '',
                sshy: '',
                jyfw: '',
                zcdz: '',
                checkboxGroup1: [],
            },
            cities: [],
            typeFenlei:[],
            value:'',
            rules: {        
                zkmc: [{ required: true, message: '请填写姓名或公司', trigger: 'change' }],
                lxr: [{ required: true, message: '请填写租客联系人', trigger: 'change' }],
                zjhm: [{ required: true, message: '请填写证件号码', trigger: 'change' }],
                hyfl: [{ required: true, message: '请选择行业分类', trigger: 'change' }],
                khdh: [{ required: true, message: '请填写电话', trigger: 'change' }],
                yx: [{ required: true, message: '请填写邮箱', trigger: 'change' }],
                khyh: [{ required: true, message: '请填写开户银行', trigger: 'change' }],
                zh: [{ required: true, message: '请填写租客联系人', trigger: 'change' }],
                kpdh: [{ required: true, message: '请填写电话', trigger: 'change' }],
                nsrsbh: [{ required: true, message: '请填写纳税人识别号', trigger: 'change' }],
                kpdz: [{ required: true, message: '请填写地址', trigger: 'change' }],
                tyshxydm: [{ required: true, message: '请填写统一社会信用代码', trigger: 'change' }],
                nsrsbh02: [{ required: true, message: '请填写纳税人识别号', trigger: 'change' }],
                zch: [{ required: true, message: '请填写注册号', trigger: 'change' }],
                zzjgdm: [{ required: true, message: '请填写组织机构代码', trigger: 'change' }],
                fddbr: [{ required: true, message: '请填写法定代表人', trigger: 'change' }],
                gj: [{ required: true, message: '请填写国籍', trigger: 'change' }],
                zczb: [{ required: true, message: '请填写注册资本', trigger: 'change' }],
                jyzt: [{ required: true, message: '请填写经营状态', trigger: 'change' }],
                clrq: [{ required: true, message: '请选择成立日期', trigger: 'change' }],
                gslx: [{ required: true, message: '请填写公司类型', trigger: 'change' }],
                rygm: [{ required: true, message: '请填写人员规模', trigger: 'change' }],
                yyqx: [{ required: true, message: '选择日期', trigger: 'change' }],
                djjg: [{ required: true, message: '请填写登记机关', trigger: 'change' }],
                hzrq: [{ required: true, message: '请选择核准日期', trigger: 'change' }],
                ywm: [{ required: true, message: '请填写英文名', trigger: 'change' }],
                ssdq: [{ required: true, message: '请填写所属地区', trigger: 'change' }],
                sshy: [{ required: true, message: '请选择所属行业', trigger: 'change' }],
                zcdz: [{ required: true, message: '请选择注册地址', trigger: 'change' }]
            }
        }
    },
    mounted(){
        let that = this;       
        industry({                                             
        }).then(res => {
            if(res.flag == 0){           
                that.typeFenlei=res.data;
            } 
        });
        customertags({                                             
        }).then(res => {
            if(res.flag == 0){  
                that.cities=res.data;
            } 
        });     
        if(this.$store.state.dateilsid !== 0){
            this.title="编辑租客";
            getonecustomer({
                id: this.$store.state.dateilsid                                     
            }).then(res => {
                if(res.flag == 0){ 
                    this.ruleForm.zkmc=res.data.info.name;
                    this.ruleForm.lxr=res.data.info.contacts;
                    this.ruleForm.zjhm=res.data.info.num;
                    this.ruleForm.hyfl=res.data.info.industryid;
                    this.ruleForm.khdh=res.data.info.tel;
                    this.ruleForm.yx=res.data.info.email;
                    this.ruleForm.khyh=res.data.tick.bankname;
                    this.ruleForm.zh=res.data.tick.cardnum;
                    this.ruleForm.kpdh=res.data.tick.banktel;
                    this.ruleForm.nsrsbh=res.data.tick.number;
                    this.ruleForm.kpdz=res.data.tick.taddress;
                    this.ruleForm.tyshxydm=res.data.icinfo.uccode;
                    this.ruleForm.nsrsbh02=res.data.icinfo.tinumber;
                    this.ruleForm.zch=res.data.icinfo.rnumber;
                    this.ruleForm.zzjgdm=res.data.icinfo.ocode;
                    this.ruleForm.fddbr=res.data.icinfo.representative;
                    this.ruleForm.gj=res.data.icinfo.nationality;
                    this.ruleForm.zczb=res.data.icinfo.rcapital;
                    this.ruleForm.jyzt=res.data.icinfo.ostate;
                    this.ruleForm.clrq=res.data.icinfo.edate;
                    this.ruleForm.gslx=res.data.icinfo.ctype;
                    this.ruleForm.rygm=res.data.icinfo.scale;
                    this.ruleForm.yyqx=res.data.icinfo.timelimit;
                    this.ruleForm.djjg=res.data.icinfo.registration;
                    this.ruleForm.hzrq=res.data.icinfo.adate;
                    this.ruleForm.ywm=res.data.icinfo.ename	;
                    this.ruleForm.ssdq=res.data.icinfo.aarea;
                    this.ruleForm.sshy=res.data.icinfo.industry;
                    this.ruleForm.zcdz=res.data.icinfo.raddress;
                    this.ruleForm.jyfw=res.data.icinfo.scope;
                    let arr = [];
                    for (const key in res.data.lable) {
                        arr.push(res.data.lable[key].name)
                    }
                    this.ruleForm.checkboxGroup1=arr;
                } 
            })
        } 
    },
    methods:{
        modalClose(){
            // 关闭弹窗，触发父组件修改visible值
            this.$emit('update:visible', false);
            this.$store.state.dateilsid = 0;
        },
        save(formName) {  
            let arr = [];
            for (const key in this.cities) {
                var citiesid = this.cities[key].id;
                var citiesname = this.cities[key].name;
                for (const key in this.ruleForm.checkboxGroup1) {
                    if (citiesname==this.ruleForm.checkboxGroup1[key]) {
                        arr.push(citiesid)
                    }
                }
            }
            this.$refs[formName].validate((valid) => {
                if (valid) {    
                    if(this.$store.state.dateilsid !== 0){                     
                        editcustomer({
                            id: this.$store.state.dateilsid,
                            name: this.ruleForm.zkmc, 
                            contacts: this.ruleForm.lxr,
                            num: this.ruleForm.zjhm,  
                            industryid: this.ruleForm.hyfl,
                            tel: this.ruleForm.khdh,
                            email: this.ruleForm.yx,                               
                            bankname: this.ruleForm.khyh,
                            cardnum: this.ruleForm.zh,
                            banktel: this.ruleForm.kpdh,
                            number: this.ruleForm.nsrsbh,
                            taddress: this.ruleForm.kpdz,
                            uccode: this.ruleForm.tyshxydm,
                            tinumber: this.ruleForm.nsrsbh02,
                            rnumber: this.ruleForm.zch,
                            ocode: this.ruleForm.zzjgdm,
                            representative: this.ruleForm.fddbr,
                            nationality: this.ruleForm.gj,
                            rcapital: this.ruleForm.zczb,
                            ostate: this.ruleForm.jyzt,
                            edate: this.ruleForm.clrq,
                            ctype: this.ruleForm.gslx,
                            scale: this.ruleForm.rygm,
                            timelimit: this.ruleForm.yyqx,
                            registration: this.ruleForm.djjg,
                            adate: this.ruleForm.hzrq,
                            ename: this.ruleForm.ywm,
                            aarea: this.ruleForm.ssdq,
                            industry: this.ruleForm.sshy,
                            raddress: this.ruleForm.zcdz,
                            scope: this.ruleForm.jyfw,
                            lable: arr
                        }).then(res => {
                            if(res.flag == 0){  
                                this.$message({
                                    message: res.data.msg,
                                    type: 'success'
                                });                        
                                this.$emit('update:visible', false);
                                this.reload();
                            } else{
                                this.$message({
                                    message: res.data.msg,
                                    type: 'error'
                                });
                            }
                        })   
                    }else{                    
                        // 新建租客
                        tenants({         
                            name: this.ruleForm.zkmc, 
                            contacts: this.ruleForm.lxr,
                            num: this.ruleForm.zjhm,  
                            industryid: this.ruleForm.hyfl,
                            tel: this.ruleForm.khdh,
                            email: this.ruleForm.yx,                               
                            bankname: this.ruleForm.khyh,
                            cardnum: this.ruleForm.zh,
                            banktel: this.ruleForm.kpdh,
                            number: this.ruleForm.nsrsbh,
                            taddress: this.ruleForm.kpdz,
                            uccode: this.ruleForm.tyshxydm,
                            tinumber: this.ruleForm.nsrsbh02,
                            rnumber: this.ruleForm.zch,
                            ocode: this.ruleForm.zzjgdm,
                            representative: this.ruleForm.fddbr,
                            nationality: this.ruleForm.gj,
                            rcapital: this.ruleForm.zczb,
                            ostate: this.ruleForm.jyzt,
                            edate: this.ruleForm.clrq,
                            ctype: this.ruleForm.gslx,
                            scale: this.ruleForm.rygm,
                            timelimit: this.ruleForm.yyqx,
                            registration: this.ruleForm.djjg,
                            adate: this.ruleForm.hzrq,
                            ename: this.ruleForm.ywm,
                            aarea: this.ruleForm.ssdq,
                            industry: this.ruleForm.sshy,
                            raddress: this.ruleForm.zcdz,
                            scope: this.ruleForm.jyfw,
                            lable: arr
                        }).then(res => {
                            if(res.flag == 0){  
                                this.$message({
                                    message: '保存成功',
                                    type: 'success'
                                });                        
                                this.$emit('update:visible', false);
                                this.reload();
                            } else{
                                this.$message({
                                    message: res.data.msg,
                                    type: 'error'
                                });
                            }
                        })
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
.zk-dialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.zk-dialog .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.zk-dialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.zk-dialog .el-dialog__body .demo-ruleForm{
    padding: 20px;
}
.zk-dialog .el-dialog__body .demo-ruleForm label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.zk-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-form-item__content{
    line-height: 30px;
}
.zk-dialog .el-dialog__body .demo-ruleForm .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}
.zk-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-select{
    width: 100%;
}
.zk-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-select .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}
.zk-dialog .el-dialog__body .demo-ruleForm .tc-form-top{
    display: flex;
    justify-content: space-between;
}
.zk-dialog .el-dialog__body .demo-ruleForm .tc-form-top .tc-form-tops{
    width: calc(50% - 9px);
}
.zk-dialog .el-dialog__body .demo-ruleForm .tc-form-txt{
    padding: 10px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.zk-dialog .el-dialog__body .demo-ruleForm .tc-form-content{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.zk-dialog .el-dialog__body .demo-ruleForm .tc-form-content .tc-form-contents{
    display: flex;
    justify-content: space-between;
}
.zk-dialog .el-dialog__body .demo-ruleForm .tc-form-top .tc-form-tops .tc-form-content .el-form-item{
    width: calc(50% - 10px);
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
}
.zk-dialog .el-dialog__body .demo-ruleForm .tc-form-bottom .tc-form-content .el-form-item{
    width: calc(25% - 14px);
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
}
.zk-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-date-editor.el-input{
    width: 100%;
}
.zk-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-date-editor span{
    left: auto;
    right: 5px;
}
.zk-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-date-editor span i{
    line-height: 30px;
}
.zk-dialog .el-dialog__body .demo-ruleForm .tc-form-bottom .tc-form-content .tc-form-contents02 .el-form-item{
    width: calc(50% - 10px);
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
}
.zk-dialog .el-dialog__body .demo-ruleForm .tc-form-bottom .tc-form-content .tc-form-contents02 .el-form-item textarea{
    padding: 4px 7px;
    max-height: 90px;
    font-size: 12px;
}
.zk-dialog .el-dialog__body .demo-ruleForm .el-checkbox-button{
    margin-right: 12px;
}
.zk-dialog .el-dialog__body .demo-ruleForm .el-checkbox-button .el-checkbox-button__inner{
    padding: 6px 14px;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid #d9d9d9;
}

.zk-dialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.zk-dialog .el-dialog__footer .el-button{
    padding: 10px 30px;
}
</style>
