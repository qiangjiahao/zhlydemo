<template>
<div class="forget">
    <div class="forget-content">
        <div class="logo"></div>
        <div class="forget-bottom">
            <div class="txt">
                <p>忘记密码</p>
                <p>需要请你输入绑定的手机号码完成安全性的验证</p>
            </div>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  label-position="left" label-width="0px" class="demo-ruleForm login-container">
                <el-form-item prop="username">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    <el-input type="text" v-model="ruleForm2.username" autocomplete="off" placeholder="请输入手机号吗"></el-input>
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
                    <el-button type="primary" style="width:100%;" @click="forget">提交</el-button>
                </el-form-item>
                <p class="fh"><router-link to="/logins">返回登录</router-link></p>
            </el-form>
        </div>   
    </div>
</div>
</template>
<script>
import { Sms } from '@/axios/api'
import { forget } from '@/axios/api'
export default {
    name:'forget',
    data(){
        var validateName = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('请输入手机号码'))
            }
        };
         var validateyzm = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入验证码'));
            } 
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } 
        };
        var validatePass2 = (rule, value, callback) => {
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
             yzm: [
                { validator: validateName, trigger: 'blur' }
            ],
            userpass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ]
            },
            checked: false,
           disabled:false
        }
    },
    methods:{
         // 发送短信
    setCode(){
    var reg=/^1[34578]\d{9}$/;
    var tel = this.ruleForm2.username
    if(!reg.test(this.ruleForm2.username)){
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
   //   忘记密码
     forget(){
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
        };
        forget({
         tel:tel,
         code:code,
         pw:pw,
         pwd:pwd,
         
        }).then(res =>{
         if(res.flag == 0){
                this.$message({
                      message: res.data.msg,
                      type: 'success',
                      duration: 1000
                    }); 
            setTimeout(() => { this.$router.replace("/logins")}, 2000)
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
.forget{
    width: 100%;
    height: 100%;
    background: url('../assets/login.jpg') no-repeat;
}
.forget .forget-content{
    width: 464px;
    height: 600px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
}
.forget .forget-content .logo{
    width: 120px;
    height: 110px;
    background: url("../assets/logo.png") no-repeat;
    margin: 32px auto 20px;
}
.forget .forget-content .forget-bottom{
    padding: 0 38px;
}
.forget .forget-content .forget-bottom .txt{
    margin-bottom: 18px;
}
.forget .forget-content .forget-bottom .txt p:first-child{
    font-size: 22px;
    color: #333;
}
.forget .forget-content .forget-bottom .txt p:last-child{
    font-size: 14px;
    color: #666;
}
.forget .forget-content .forget-bottom .el-form .el-form-item{
    position: relative;
    margin-bottom: 18px;
}
.forget .forget-content .forget-bottom .el-form .el-form-item .fa{
    position: absolute;
    left: 0;
    right: 0;
    font-size: 18px;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    z-index: 9;
}
.forget .forget-content .forget-bottom .el-form .el-form-item .el-input__inner{
    padding-left: 34px;
}
.forget .forget-content .forget-bottom .el-form .yzm .el-input{
    width: calc(100% - 126px);
    float: left;
}
.forget .forget-content .forget-bottom .el-form .el-form-item:nth-of-type(2) .hqyzm{
    float: right;
    width: 116px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
     padding: 12px 0;
}
.forget .forget-content .forget-bottom .fh a{
    font-size: 14px;
    color: #666;
    text-decoration: none;
}
</style>

