 <template>
    <div class="account">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">账户设置</el-menu-item>
        </el-menu>
        <div class="wrapper">
            <div class="ant-card">
                <el-row>
                <el-col :span="24" class="ant-card-head"><div class="grid-content bg-purple-dark">账户设置</div></el-col>
                </el-row>
                <div class="ant-card-body">
                    <el-col :span="3"><div class="grid-content bg-purple" style="text-align:right;font-size:24px">{{name}}</div></el-col>
                    <el-col :span="21"><div class="grid-content bg-purple-light" style="font-size:12px;color:#ff8d1f;padding-left:40px;padding-top:10px">有效使用期限：2018/06/30</div></el-col>
                </div>
            </div>
            <div class="ant-card">
                <div class="info">
                    <div class="row">
                        <div class="col1">{{yxzh}}</div>
                        <div class="col2">{{email}}</div>
                        <div class="col3">
                            <el-button class="xg" plain @click="open01">修改</el-button>
                            <xgdialog v-if="xgDialog01" :visible.sync="xgDialog01" :title="tt"></xgdialog>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col1">{{sjhm}}</div>
                        <div class="col2">{{tel}}<span>手机号码可以用于重置密码或其它安全验证</span>
                        </div>
                        <div class="col3">
                            <el-button class="xg" plain @click="open02">修改</el-button>
                            <xgdialog v-if="xgDialog02" :visible.sync="xgDialog02" :title="tt"></xgdialog>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col1">{{mmzh}}</div>
                        <div class="col2">
                            **********
                            <span>用于保护账号信息和登录安全</span>
                        </div>
                        <div class="col3">
                            <el-button class="xg" plain @click="open03">修改</el-button>
                            <xgdialog v-if="xgDialog03" :visible.sync="xgDialog03" :title="tt"></xgdialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Getuserinformation } from '@/axios/api' //获取用户信息

import xgdialog from '@/components/profile/xgDialog'

export default {
    name:'accountSetting',
    components:{
        xgdialog
    },
    data() {
      return {
        activeIndex: '1',
        input: "",
        xgDialog01: false,
        xgDialog02: false,
        xgDialog03: false,
        yxzh: '邮箱账号',
        sjhm: '手机号码',
        mmzh: '密码账号',
        tt: '',
        name: '',
        tel: '',
        email: ''
      };
    },
    mounted(){
        Getuserinformation({                                     
        }).then(res => {
        if (res.flag == 0) {
                this.name = res.data.name;
                this.tel = res.data.tel;
                this.email = res.data.email;
            } 
        });
    },
    methods: {
      handleSelect(key, keyPath) {

      },
      open01(){
          this.xgDialog01 = true;
          this.tt = this.yxzh;
      },
      open02(){
          this.xgDialog02 = true;
          this.tt = this.sjhm;
      },
      open03(){
          this.xgDialog03 = true;
          this.tt = this.mmzh;
      }
    }
}
</script>
<style>
.account{
    background: #fff;
}
.account .el-menu-item.is-active{
     color: #409EFF !important
 }
.account .wrapper{
     padding: 22px 34px;
    background-color: #f4f4f4;
 }
.account .ant-card{
    min-height: 152px;
    margin-bottom: 20px;
    border: 1px solid #e9e9e9;
    background: #fff;
    border-radius: 2px;
    position: relative;
    transition: all .3s;
 }
.account .ant-card:not(.ant-card-no-hovering):hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: rgba(0,0,0,.2);
}
.account .ant-card-head{
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #353b4b;
    padding: 0 32px;
    border-bottom: 1px solid #e9e9e9;
    padding: 0 24px;
    border-radius: 2px 2px 0 0;
    zoom: 1;
    margin-bottom: -1px;
    font-size: 14px;
}
.account .ant-card-body{
        padding: 24px 32px;
}
.account .ant-card .info{
        padding: 45px 56px;
}
.account .info .row{
        height: 79px;
    border-bottom: 1px solid #dbe2e7;
    display: flex;
    align-items: center;
}
.account .info .row .col1{
    padding: 32px 10px;
    font-size: 16px;
    color: #7a7d83;
    display: flex;
}
.account .info .row .col2{
    width: 350px;
    padding: 32px 10px;
    color: #353b4b;
    font-size: 16px;
    position: relative;
    display: flex;
}
.account .info .row .col3{
    padding: 32px 10px;
    display: flex;
}
.account .info .row .col3 .xg{
    border: 1px solid #4494f0;
    padding: 3px 26px;
    font-size: 16px;
    color: #4494f0;
    cursor: pointer;
    border-radius: 4px;
}
.account .col2 span{
        position: absolute;
    bottom: 12px;
    color: #ff8d1f;
    font-size: 12px;
    left: 5px;
}
</style>
