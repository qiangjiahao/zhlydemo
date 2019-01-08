<template> 
    <div>
        <el-button plain icon="el-icon-edit" class="tabBtn btnHt" @click="openbjht">编辑合同</el-button>
        <el-dialog title="编辑合同" :visible.sync="aaaDialog" class="ht-dialog" width="1000px" top="100px" center :append-to-body="true" :close-on-click-modal="false" :before-close="cancel">  
            <el-menu class="el-menu-demo" :default-active="activeIndex" mode="horizontal">
                <el-menu-item index="01" :class="{itemtab:isitemtab}">基本信息</el-menu-item>
            </el-menu>             
            <el-form :model="ruleForm" class="demo-ruleForm" :rules="rules" ref="ruleForm" hide-required-asterisk> 
                <div class="ht-dialog-left">
                    <div class="ht-dialog-everyblock">
                        <div class="tc-form-txt">
                            <span>合同信息</span>
                        </div>
                        <div class="tc-form-content">  
                            <div class="tc-form-contents">
                                <el-form-item label="合同编号" prop="htbh">
                                    <el-input v-model="ruleForm.htbh" placeholder="请填写合同编号" readonly></el-input>
                                </el-form-item>
                                <el-form-item label="跟进人" prop="gjr">   
                                    <el-input v-model="ruleForm.gjr" placeholder="请填写跟进人" readonly></el-input> 
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents">
                                <el-form-item label="租赁数量（已选0m²)" prop="htbh01" class="form-item-flex">
                                    <el-input v-model="ruleForm.htbh01" placeholder="请输入面积"></el-input>
                                    <el-select v-model="ruleForm.htbh02">
                                        <el-option label="m²" value="1"></el-option>
                                        <el-option label="工位" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="合同签订时间" prop="htqdsj">   
                                    <el-date-picker
                                    v-model="ruleForm.htqdsj"
                                    type="date"
                                    placeholder="请选择合同签订时间">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents">
                                <el-form-item label="合同计租时间" prop="htjzsj">
                                    <el-date-picker
                                    v-model="ruleForm.htjzsj"
                                    type="date"
                                    placeholder="请选择合同计租时间">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="合同结束时间" prop="htjssj">
                                    <el-date-picker
                                    v-model="ruleForm.htjssj"
                                    type="date"
                                    placeholder="请选择合同结束时间">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents">
                                <el-form-item prop="djblxsd">
                                    <div style="text-align: left;font-size: 12px;color: #353b4b;min-height: 22px;line-height: 18px;">
                                        单价保留小数点
                                        <el-tooltip class="item" placement="top">
                                            <div slot="content">租金报表中最终单价的精确度保留</div>
                                            <i class="el-icon-question"></i>
                                        </el-tooltip>
                                    </div>
                                    <el-input v-model="ruleForm.djblxsd" placeholder="请填写单价保留小数点"></el-input>
                                    <span style="position: absolute;right: 10px;top: 22px;">位</span>
                                </el-form-item>
                                <el-form-item label="计算精度" prop="jsjd">
                                    <el-select v-model="ruleForm.jsjd">
                                        <el-option label="精确计算结果保留2位" value="1"></el-option>
                                        <el-option label="每步计算结果保留2位" value="2"></el-option>
                                    </el-select>
                                </el-form-item>                        
                            </div>
                            <div class="tc-form-contents">
                                <el-form-item style="width:100%;" label="合同标签">
                                    <el-checkbox-group v-model="checkboxGroup1">
                                        <el-checkbox-button v-for="(item,index) in zhyq" :key="index" :label="item.id" :value="item.id">{{item.name}}</el-checkbox-button>
                                    </el-checkbox-group>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                    <div class="ht-dialog-everyblock">
                        <div class="tc-form-txt">
                            <span>合同信息</span>
                        </div>
                        <div class="tc-form-content">  
                            <div class="tc-form-contents">
                                <el-form-item label="租客" prop="zk">
                                    <el-autocomplete
                                    class="inline-input"
                                    v-model="ruleForm.zk"
                                    :fetch-suggestions="querySearchAsync01"
                                    placeholder="请填写姓名或公司名称"
                                    @select="handleSelect01"
                                    ></el-autocomplete>
                                </el-form-item>
                                <el-form-item label="行业" prop="hy">   
                                    <el-autocomplete
                                    class="inline-input"
                                    v-model="ruleForm.hy"
                                    :fetch-suggestions="querySearchAsync02"
                                    placeholder="请选择行业"
                                    @select="handleSelect02"
                                    ></el-autocomplete> 
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents">
                                <el-form-item label="法人" prop="fr">
                                    <el-input v-model="ruleForm.fr" placeholder="请填写法人"></el-input>
                                </el-form-item>
                                <el-form-item label="签订人" prop="qdr">   
                                    <el-input v-model="ruleForm.qdr" placeholder="请填写签订人"></el-input>
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents">
                                <el-form-item label="租客联系人" prop="zklxr" style="width:100%;">
                                    <el-input v-model="ruleForm.zklxr" placeholder="请输入租客联系人"></el-input>
                                </el-form-item>
                            </div>                      
                        </div>
                    </div>
                    <div class="ht-dialog-everyblock">
                        <div class="tc-form-txt">
                            <span>其他关键信息</span>
                        </div>
                        <div class="tc-form-content" style="height:238px;">  
                            <div style="display: flex;justify-content: center;margin-bottom:20px;">
                                <el-button plain class="xinjian"><i class="el-icon-plus"></i>新建自定义关键词</el-button>
                            </div>                                          
                        </div>
                    </div>             
                </div>
                <div class="ht-dialog-left">
                    <div class="ht-dialog-everyblock">
                        <div class="tc-form-txt">
                            <span>房源信息</span>
                        </div>
                        <div class="tc-form-content" style="height:1008px;overflow:hidden;">  
                            <p style="display: flex;justify-content: space-between;margin-bottom: 20px;font-size: 14px;">
                                <span>{{fymsg01}}</span>
                                <span style="color: #108ee9;cursor: pointer;" @click="fymsgevent02">{{fymsg02}}</span>
                            </p>
                            <ul v-if="isul">
                                <li v-for="item in ruleForm.xzfy" :key="item.id" style="height:28px;line-height:28px;font-size:14px;display:flex;justify-content: space-between;">
                                    <span>{{item.level_name}}</span>
                                    <span>{{item.room_number}}室</span>
                                    <span>{{item.area}}m²</span>
                                </li>
                            </ul>  
                            <keep-alive>
                                <fymsg v-if="isfymsg" @fyxx="fyxx" :fyulxxid="fyulxxid"></fymsg>
                            </keep-alive>
                        </div>
                    </div>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button plain @click="cancel" >取 消</el-button>
                <el-button type="primary" @click="save('ruleForm')">保 存</el-button>
            </div>   
        </el-dialog>
    </div>
</template>

<script>
import { obtaintenant } from '@/axios/api' //获取租客
import { accessindustry } from '@/axios/api' //获取行业
import { obtaincontractlabel } from '@/axios/api' //获取合同标签
import { contractdetails } from '@/axios/api' //获取合同详情
import { editcontract } from '@/axios/api' //编辑合同 

import fymsg from '@/components/fangyuanAdmin/fymsg'

export default {
    name: 'httabDialog',
    props:{
        httabid:{
            type:String,
            required: true
        }       
    },
    inject: ['reload'],
    components:{
        fymsg
    },
    data(){
        var x=new Date();
        x.setFullYear(x.getFullYear()+1);
        var nyr=x.setDate(x.getDate()-1);
        nyr=new Date(nyr);
        return{
            aaaDialog:false,
            nyr,
            ruleForm: {
                gjr: "1111111",
                htbh02: '1',
                htbh01: '',
                htqdsj: new Date(),
                htjzsj: new Date(),
                htjssj: nyr,
                djblxsd: '2',
                jsjd: '1',
                zk: '',
                hy: '',
                fr: '',
                qdr: '',
                zklxr: '',
                xzfy: []
            },
            checkboxGroup1: [], 
            state4: '',
            restaurants01: [],
            restaurants02: [],
            timeout:null,  
            rules: {        
                htbh01: [{ required: true, message: '请输入面积', trigger: 'change' }],
                htqdsj: [{ required: true, message: '请选择合同签订时间', trigger: 'change' }],
                htjzsj: [{ required: true, message: '请选择合同计租时间', trigger: 'change' }],
                htjssj: [{ required: true, message: '请选择合同结束时间', trigger: 'change' }],
                djblxsd: [{ required: true, message: '请选择单价保留小数点', trigger: 'change' }],
                jsjd: [{ required: true, message: '请选择计算精度', trigger: 'change' }],
                zk: [{ required: true, message: '请填写姓名或公司名称', trigger: 'change' }],
                hy: [{ required: true, message: '请选择行业', trigger: 'change' }],
                fr: [{ required: true, message: '请填写法人', trigger: 'change' }],
                qdr: [{ required: true, message: '请填写签订人', trigger: 'change' }],
                zklxr: [{ required: true, message: '请输入租客联系人', trigger: 'change' }],
            },
            activeIndex: "01",
            isitemtab: true,
            fymsg01: '已选中房源',
            fymsg02: '+房源',
            isfymsg: false,
            isul: true,
            id01: null,
            id02: null,
            zhyq: [],
            fyulxx: [],
            fyulxxid: []
        }
    },
    methods:{ 
        querySearchAsync01(queryString, cb) {
            var restaurants01 = this.restaurants01;
            var results = queryString ? restaurants01.filter(this.createStateFilter(queryString)) : restaurants01;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
            cb(results);
            }, 100 * Math.random());
        },
        querySearchAsync02(queryString, cb) {
            var restaurants02 = this.restaurants02;
            var results = queryString ? restaurants02.filter(this.createStateFilter(queryString)) : restaurants02;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
            cb(results);
            }, 100 * Math.random());
        },
        createStateFilter(queryString) {
            return (state) => {
            return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect01(item) {
            this.id01=item.id;
        },
        handleSelect02(item) {
            this.id02=item.id;
        },
        save(formName) {
            for (const key in this.restaurants01) {           
                if(this.restaurants01[key].value == this.ruleForm.zk){
                    var zk = this.restaurants01[key].id;
                }
            } 
            for (const key in this.restaurants02) {           
                if(this.restaurants02[key].value == this.ruleForm.hy){
                    var hy = this.restaurants02[key].id;
                }
            } 
            let arrid = [];
            for (const key in this.ruleForm.xzfy) {
                var rid = this.ruleForm.xzfy[key].id;
                arrid.push(rid)
            }
            if(this.isul==true){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        editcontract({  
                            id: this.httabid,
                            znum:this.ruleForm.htbh01,     
                            ztype:this.ruleForm.htbh02, 
                            strtime:this.ruleForm.htqdsj, 
                            jtime:this.ruleForm.htjzsj,                                      
                            endtime:this.ruleForm.htjssj, 
                            pmoney:this.ruleForm.djblxsd, 
                            jingdu:this.ruleForm.jsjd, 
                            clable:this.checkboxGroup1, 
                            cid:zk,
                            industryid:hy,
                            legalperson:this.ruleForm.fr,
                            signedperson:this.ruleForm.qdr,
                            contacts:this.ruleForm.zklxr,
                            roominfo: arrid
                        }).then(res => {
                            if(res.flag == 0){  
                                this.$message({
                                    message: '保存成功',
                                    type: 'success'
                                });
                                this.aaaDialog=false;                        
                            } else{
                                this.$message({
                                    message: res.data.msg,
                                    type: 'error'
                                });
                            }
                        });    
                        
                    } else {    
                        return false;
                    }
                });
            }else{
                this.$message({
                    message: '请确认完成',
                    type: 'warning'
                });
            }                    
        },
        cancel(){
             this.reload();
        },
        openbjht(){
            this.aaaDialog=true;
            this.id=parseInt(this.httabid);
            contractdetails({   
                id: this.httabid                                             
            }).then(res => {
                if(res.flag == 0){   
                    this.ruleForm.htbh=res.data.number;
                    this.ruleForm.gjr=res.data.uid;
                    this.ruleForm.htbh01=res.data.znum;
                    this.ruleForm.htbh02=res.data.ztype;
                    this.ruleForm.htqdsj=res.data.strtime;
                    this.ruleForm.htjzsj=res.data.jtime;
                    this.ruleForm.htjssj=res.data.endtime;
                    this.ruleForm.djblxsd=res.data.pmoney;
                    this.ruleForm.jsjd=res.data.jingdu;
                    this.zhyq=res.data.clable;
                    for (const key in this.restaurants01) {
                        if(this.restaurants01[key].id ==res.data.cid){
                           this.ruleForm.zk=this.restaurants01[key].value;
                        }
                    }  
                    for (const key in this.restaurants02) {
                        if(this.restaurants02[key].id ==res.data.industryid){
                           this.ruleForm.hy=this.restaurants02[key].value;
                        }
                    }  
                    this.ruleForm.fr=res.data.legalperson;
                    this.ruleForm.qdr=res.data.signedperson;
                    this.ruleForm.zklxr=res.data.contacts;  
                    this.ruleForm.xzfy=res.data.rid;
                }
            });
        },
        fymsgevent02(){
            if(this.isul==true){
                this.fymsg01="房源列表";
                this.fymsg02="完成";
                this.isul=false;
                this.isfymsg=true;
            }else{
                this.fymsg01="已选中房源";
                this.fymsg02="+房源";
                this.isul=true;
                this.isfymsg=false;
            }
        },
        fyxx(checkList,kzs){
            this.ruleForm.xzfy= [];   
            let arrid = [];  
            for(const key in checkList){
                for(const keys in kzs){
                    if(checkList[key]==kzs[keys].id){
                        var kkk=kzs[keys];
                        var kkkid=kzs[keys].id;
                        this.ruleForm.xzfy.push(kkk);
                        arrid.push(kkkid);
                    }
                }
            }
            this.fyulxxid=arrid;
        }
    },
    mounted() {
        obtaintenant({                                                
        }).then(res => {
            if(res.flag == 0){     
                this.restaurants01 = res.data;
            }
        });             
        accessindustry({                                                
        }).then(res => {
            if(res.flag == 0){   
                this.restaurants02 = res.data;
            }
        });
        obtaincontractlabel({                                                
        }).then(res => {
            if(res.flag == 0){          
                this.zhyq =res.data;
            }
        }); 
    }
}
</script>

<style>
.ht-dialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.ht-dialog .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.ht-dialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.ht-dialog .el-dialog__body .el-menu-demo{
    padding: 0 50px;
    border: 0;
    border-bottom: 1px solid #e9e9e9;
}
.ht-dialog .el-dialog__body .el-menu-demo .el-menu-item{
    height: 40px;
    line-height: 41px;
    font-size: 14px;
    margin-right: 20px;
    padding: 0;
    width: auto;
    border-bottom: 2px solid #fff; 
}
.ht-dialog .el-dialog__body .el-menu-demo .itemtab{
    border-bottom: 2px solid #409EFF !important;
    color: #409EFF;
    cursor: pointer;
}
.ht-dialog .el-dialog__body .demo-ruleForm{
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
.ht-dialog .el-dialog__body .demo-ruleForm label{
    text-align: left;
    font-size: 12px;
    color: #353b4b;   
    min-height: 22px;
    line-height: 18px;
}
.ht-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-form-item__content{
    line-height: 30px;
}
.ht-dialog .el-dialog__body .demo-ruleForm .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}
.ht-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-date-editor.el-input{
    width: 100%;
}
.ht-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-date-editor span{
    left: auto;
    right: 5px;
}
.ht-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-date-editor span i{
    line-height: 30px;
}
.ht-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-select{
    width: 100%;
}
.ht-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-select .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}
.ht-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-checkbox-button{
    margin-right: 12px;
}
.ht-dialog .el-dialog__body .demo-ruleForm .el-form-item .el-checkbox-button .el-checkbox-button__inner{
    padding: 6px 16px;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid #d9d9d9;
    border: 0;
}
.ht-dialog .el-dialog__body .demo-ruleForm .el-form-item .inline-input{
    width: 100%;
}

.ht-dialog .el-dialog__body .demo-ruleForm .ht-dialog-left{
    width: calc(50% - 10px);
}
.ht-dialog .el-dialog__body .demo-ruleForm .tc-form-txt{
    padding: 10px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.ht-dialog  .el-dialog__body .demo-ruleForm .tc-form-content{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.ht-dialog .el-dialog__body .demo-ruleForm .tc-form-content .tc-form-contents{
    display: flex;
    justify-content: space-between;
}
.ht-dialog .el-dialog__body .demo-ruleForm .tc-form-content .tc-form-contents .el-form-item{
    width: calc(50% - 10px);
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
}
.ht-dialog .el-dialog__body .demo-ruleForm .tc-form-content .xinjian{
    color: #409eff;
    border-color: #409eff;
    padding: 6px 18px;
    font-size: 12px;
}
.ht-dialog .el-dialog__body .demo-ruleForm .tc-form-content .xinjian:hover{
    color: rgba(0,0,0,.25);
    background-color: #f7f7f7;
    border-color: #d9d9d9;
    cursor: not-allowed;
}
.ht-dialog .el-dialog__body .demo-ruleForm .tc-form-content .tc-form-contents .form-item-flex .el-form-item__content{
    display: flex;
    justify-content: space-between;
}
.ht-dialog .el-dialog__body .demo-ruleForm .tc-form-content .tc-form-contents .form-item-flex .el-form-item__content .el-input{
    width: 70%;
    margin-right: 10px;
}
.ht-dialog .el-dialog__body .demo-ruleForm .tc-form-content .tc-form-contents .form-item-flex .el-form-item__content .el-select{
    width: 30%;
}
.ht-dialog .el-dialog__body .demo-ruleForm .tc-form-content .tc-form-contents .form-item-flex .el-form-item__content .el-select .el-input{
    width: 100%;
}

.ht-dialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.ht-dialog .el-dialog__footer .el-button{
    padding: 10px 30px;
} 
</style>
