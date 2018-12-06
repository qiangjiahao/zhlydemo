<template>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  label-position="left" label-width="0px" class="demo-ruleForm login-container login">
        <el-form-item prop="username">
            <i class="fa fa-user-o" aria-hidden="true"></i>
            <el-input type="text" v-model="ruleForm2.username" autocomplete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="userpass">
            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
            <el-input type="password" v-model="ruleForm2.userpass" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;padding-top: 20px;">
            <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
            <router-link tag='span' :to="{ path:'/forget' }" >忘记密码</router-link>
        </el-form-item>
    </el-form>   
</template>

<script>
import { Login } from '@/axios/api';
export default {
    name: "login",
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
        return {
            ruleForm2: {
                username: '',
                userpass: ''
            },
            rules2: {
                username: [
                { validator: validateName, trigger: 'blur' }
            ],
            userpass: [
                { validator: validatePass, trigger: 'blur' }
            ]
            }
        }
    },
    methods:{
        login(){   
        var tel = this.ruleForm2.username;
        var pw = this.ruleForm2.userpass;
         Login({                    
                tel: tel,                    
                pw: pw             
            }).then(res => {
                if(res.flag == 0){       
               this.$store.commit('ADD_COUNT',res.data.session);
                this.$message({
                      message: '登陆成功',
                      type: 'success',
                      duration: 1000
                    }); 
                  setTimeout(() => { this.$router.push("/")}, 1000)
                } else{
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
  .login .el-form-item{
    position: relative;
  }
  .login .el-form-item .fa{
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
  .login .el-form-item .el-input__inner{
      padding-left: 34px;
  }
</style>

