<template>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <el-form-item prop="username">
            <i class="fa fa-user-o" aria-hidden="true"></i>
            <el-input type="text" v-model="ruleForm2.username" autocomplete="off"  placeholder="请输入绑定手机号"></el-input>
        </el-form-item>
        <el-form-item prop="yzm" class="yzm">
            <i class="fa fa-get-pocket" aria-hidden="true"></i>
            <el-input type="text" v-model="ruleForm2.yzm" autocomplete="off" placeholder="请输入验证码"></el-input>
            <el-button type="primary" class="hqyzm" @click="setCode" v-bind:disabled="disabled">{{btntxt}}</el-button>
        </el-form-item>
        <el-form-item prop="userpass">
            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
            <el-input type="password" v-model="ruleForm2.userpass" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked">我已认真阅读并接受</el-checkbox>
        <el-form-item style="width:100%;padding-top: 20px;">
            <el-button type="primary" style="width:100%;" @click="Reg">注册</el-button>
            <!-- <div style="font-size:14px;color: #666;text-align: center;">忘记密码？<router-link to="/logins"><span>立即修改</span></router-link></div> -->
        </el-form-item>
    </el-form>     
</template> 
<script>
import { Sms } from '@/axios/api'
import { Regist } from '@/axios/api'
export default {
    name: "register",
    data(){
        var validateName = (rule, value, callback) => {
            if (!value) {
            callback(new Error('请输入用户名'));
            } 
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } 
        };
         var validateyzm = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入验证码'));
            } 
        };
           var validatecheckPass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } 
        };
        return {
            time:0,
            btntxt:"获取验证码",
            ruleForm2: {
                username: '',
                yzm: '',
                userpass: '',
                checkPass: ''
            },
            rules2: {
                username: [
                { validator: validateName, trigger: 'blur' }
            ],
            userpass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            yzm: [
                { validator: validateyzm, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatecheckPass, trigger: 'blur' }
            ]
            },
            checked: false,
            disabled:false,
        }
    },
     mounted: function () {
   },
    methods:{
    // 发送短信
    setCode(){
    var reg=/^1[34578]\d{9}$/;
    var tel = this.ruleForm2.username
    if(this.ruleForm2.username==''){
     this.$message.error('请输入手机号码');
    }else if(!reg.test(this.ruleForm2.username)){
     this.$message.error("手机格式不正确");
    }else{
     this.time=60;
     this.disabled=true;
     this.timer();
     
        Sms({                    
                tel: tel,                                
            }).then(res => {
                if(res.flag == 0){      
                     this.$message({
                      message: res.data.msg,
                      type: 'success'
                    });       
                } else{
                   this.$message({
                      message: res.data.msg,
                      type: 'error'
                    });
                } 
            }) 
    }
   },
//    倒计时
    timer() {
    if (this.time > 0) {
      this.time--;
      this.btntxt=this.time+"s后重新获取";
      setTimeout(this.timer, 1000);
    } else{
      this.time=0;
      this.btntxt="获取验证码";
      this.disabled=false;
      clearInterval(this.timer);
    }
   },
//   注册
     Reg(){
        var tel = this.ruleForm2.username;
        var code = this.ruleForm2.yzm;
        var pw = this.ruleForm2.userpass;
        var pwd = this.ruleForm2.checkPass;
        if(pwd!=pw){
             this.$message({
                      message: '两次密码不一致，请重新输入',
                      type: 'error'
        });
        return; 
        }
        Regist({
         tel:tel,
         code:code,
         pw:pw,
         pwd:pwd
        }).then(res =>{
         if(res.flag == 0){
                this.$message({
                      message: '注册成功，请点击登录',
                      type: 'success',
                      duration: 1000
                    }); 
            setTimeout(() => { this.$router.go(0);}, 1000)
         }else{
             this.$message({
                      message: res.data.msg,
                      type: 'error'
             }); 
         }
        })
     }
    },
    beforeDestroy(){
        clearInterval();
    }
}
  
</script>
<style>
    .yzm .el-input{
        width: calc(100% - 126px);
        float: left;
    }
    .hqyzm{
        float: right;
        width: 116px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 12px 0;
    }
</style>
