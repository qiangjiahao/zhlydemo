<template>
<div  v-loading="loading">
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="ruleForm2.username"  autocomplete="off" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="userpass">
      <el-input type="password" v-model="ruleForm2.userpass" autocomplete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox  class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</div>
</template>
<script>
import { Login } from '@/axios/api';
export default {
    name:'Logins',
    data () {
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
        },
           loading: false
        
    }
  },
  methods:{
    login(){
      // var that = this;
      var tel = this.ruleForm2.username;
      var pw = this.ruleForm2.userpass;
         Login({                    
                tel: tel,                    
                pw: pw             
            }).then(res => {
                if(res.flag == 0){
                  // localStorage.setItem('user',JSON.stringify(res.data.session))   
                  // var userInfo=JSON.parse(localStorage.getItem('user'));
                  // alert(userInfo.tel)         
               this.$store.commit('ADD_COUNT',res.data.session);
                  this.$router.replace("/");           
                } else{
                   this.$message({
                      message: res.data.msg,
                      type: 'error'
                    });
                } 
            })  

    }   
  }
}
</script>

<style>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
</style>
