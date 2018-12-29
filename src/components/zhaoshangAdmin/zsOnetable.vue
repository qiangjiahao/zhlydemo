<template>
    <div class="zs-table">
      <div class="table-header">
          <div>可招商</div>
          <i class="el-icon-more"></i>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
        height="650"
        @row-click="isopendarwer = true">
        <el-table-column
          type="selection"
          width="62">
        </el-table-column>
        <el-table-column
          prop="name"
          label="客户"
          width="289">
        <template slot-scope="scope">
          <span style="color: #353b4b;font-size: 14px;display:block;height:16px;line-height:16px;margin-bottom: 4px;">{{ scope.row.name }}</span>
          <span style="color: #7085a1;font-size: 12px;margin-left: 4px;display:block;height:16px;line-height:16px;">跟进人:{{ scope.row.gjr }}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="lfsj"
          label="来访时间"
          sortable
          width="194">
        </el-table-column>
        <el-table-column
          prop="zxbz"
          label="最新备注"
          sortable
          width="194">
        <template slot-scope="scope">
          <span style="color: #353b4b;font-size: 14px;display:block;height:16px;line-height:16px;margin-bottom: 4px;">{{ scope.row.gjr }}<i style="color:red;">●</i>{{ scope.row.lfsj }}</span>
          <span style="color: #7085a1;font-size: 12px;margin-left: 4px;display:block;height:16px;line-height:16px;">{{scope.row.zxbz}}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="khzt"
          label="客户状态"
          sortable
          width="194">
          <template slot-scope="scope">
            <div @click.stop="xqjdxg = true"><span>{{scope.row.khzt}}</span><i class="el-icon-arrow-down" style="margin-left: 8px;"></i></div>
            <el-dialog title="需求阶段修改" :visible.sync="xqjdxg" top="100px" width="340px" class="zsOnetable" :append-to-body="true">
              <el-form :model="form" class="demo-ruleForm">
                <el-form-item label="需求状态" >
                  <el-select v-model="form.region" placeholder="请选择需求状态">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="修改原因" style="margin-bottom:0px;">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4}"
                    placeholder="请输入修改原因"
                    v-model="form.bz">
                  </el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="xqjdxg = false">取 消</el-button>
                <el-button type="primary" @click="xqjdxg = false">确 定</el-button>
              </div>
            </el-dialog>
          </template>
        </el-table-column>
        <el-table-column
          prop="qd"
          label="渠道"
          width="194">
        </el-table-column>
        <el-table-column
          prop="xqmjd"
          label="需求面积段"
          width="195">
        </el-table-column>
        <el-table-column
          prop="xqgwd"
          label="需求工位段"
          sortable
          width="195">
        </el-table-column>
        <el-table-column
          prop="hy"
          label="行业"
          width="194">
        </el-table-column>
        <el-table-column
          prop="yjqysj"
          label="预计签约时间"
          width="194">
        </el-table-column>
        <el-table-column
          prop="gjr"
          label="跟进人"
          width="195">
        </el-table-column>
      </el-table>
      <Drawer :closable="true" width="1000" class="zsOneDrawer" v-model="isopendarwer">
        <div slot="header" class="drawer-header">客户详情</div>
        <div class="content">
            <div class="info">
              <div class="info-top">
                <div class="info-msg">
                  <span>11111(北京)科技有限公司</span>
                </div>
                <ul class="info-cz">
                  <li>                 
                    <el-tooltip class="item" effect="dark" content="跟进人" placement="bottom">
                     <div><i class="fa fa-user-o"></i><span>1111111</span></div>
                    </el-tooltip>
                  </li>
                  <li @click="zsOnetablebj = true;">
                    <i class="fa fa-pencil"></i><span>编辑</span>
                    <zsOneDialogs v-if="zsOnetablebj" :visible.sync="zsOnetablebj"></zsOneDialogs> 
                  </li>
                  <li @click="deleteDialog = true">
                    <i class="el-icon-delete"></i><span>删除</span>
                    <el-dialog
                      :visible.sync="deleteDialog"
                      width="400px"
                      :modal="false"
                      center
                      :append-to-body="true"
                      class="zsOneDrawer-dialog">
                      <div class="zsOneDrawer-dialog-div">
                          <i class="el-icon-warning"></i>
                          <p>确定要删除该客户吗？</p>
                      </div>
                      <span slot="footer" class="dialog-footer">
                          <el-button type="primary" @click="affirm">确 定</el-button>
                          <el-button type="info" style="margin-left:20px;" @click="cancel">取 消</el-button>
                      </span>
                    </el-dialog>
                  </li>
                </ul>
              </div>
              <div class="info-bottom">
                <div class="info-bottom-left">
                  <div class="ztmsg">
                    <div>客户状态</div>
                    <div>
                      <span>初次接触</span>
                      <span style="color: rgb(130, 134, 146);padding-left: 14px;">昨日</span>
                    </div>
                  </div>     
                </div>
                <div class="info-bottom-right">
                  <div class="slmsg slborder">
                    <div>成交几率</div>
                    <div>-%</div>
                  </div>
                  <div class="slmsg">
                    <div>需求数量/m²</div>
                    <div>0 - Max</div>
                  </div> 
                </div>
              </div>
            </div>
            <div class="blockmsg">          
              <div class="msg">
                <div class="msg-header">客户信息</div>
                <div class="msg-body msg-width">
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">111</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">-</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">-</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">-</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">-</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">-</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">-</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">-</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">-</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">-</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="msg">
                <div class="msg-header">房源信息</div>
                <div class="msg-body">
                  <div class="fyxx-top">
                      <div class="fyxximg"></div>
                      <div class="fyxxtxt">
                        <div>文创集团</div>
                        <div>杭州市/滨江区</div>
                      </div>
                  </div>
                  <div class="fyxx-top fyxx-bottom">
                      <div class="fyxxheader">
                        <span>楼层/房号</span>
                        <span>面积</span>
                      </div>
                      <div class="fyxxbody">
                        <span style="color: #4494f0;">7层 701-1室</span>
                        <span>150.00m²</span>
                      </div>
                  </div>
                </div>
              </div>
              <div class="msg">
                <div class="msg-header">客户信息</div>
                <div class="msg-body khxx">
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">111</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">-</div>
                    </div>
                  </div>
                </div>           
              </div>
          </div>
        </div>
      </Drawer>
    </div>
</template>
<script>
import Vue from 'vue'
import { Drawer } from 'iview';
Vue.component('Drawer', Drawer);

import zsOneDialogs from '@/components/zhaoshangAdmin/zsOneDialogs'

export default {
  name: 'zsOnetable',
  components:{
    zsOneDialogs
  },
  data(){
      return{
          tableData: [{
              name: '西安希网',
              lfsj: '2018/10/30',
              zxbz: '跟进',
              khzt: '潜在客户',
              qd: '电话',
              xqmjd: '300-350㎡',
              xqgwd: '',
              hy: '网络科技',
              yjqysj: '2017-11-30',
              gjr: '111111'
              }, {
              name: '天涯海角',
              lfsj: '2018/06/30',
              zxbz: '第二次来',
              khzt: '意向客户',
              qd: '上门',
              xqmjd: '300-500㎡',
              xqgwd: '',
              hy: '教育',
              yjqysj: '2017-12-30',
              gjr: '111111'
              }, {
              name: '西安希网',
              lfsj: '2018/10/30',
              zxbz: '跟进',
              khzt: '潜在客户',
              qd: '电话',
              xqmjd: '300-350㎡',
              xqgwd: '',
              hy: '网络科技',
              yjqysj: '2017-11-30',
              gjr: '111111'
              }, {
              name: '西安希网',
              lfsj: '2018/10/30',
              zxbz: '跟进',
              khzt: '潜在客户',
              qd: '电话',
              xqmjd: '300-350㎡',
              xqgwd: '',
              hy: '网络科技',
              yjqysj: '2017-11-30',
              gjr: '111111'
              }
          ],
          xqjdxg: false,
          form: {

          },
          isopendarwer: false,
          deleteDialog: false,
          zsOnetablebj: false,
          fy02ht: false,
          fy02xjkh: false,
          fy02bjfy: false 
      }
  },
  methods:{
    affirm(){
      this.deleteDialog=!this.deleteDialog;
      setTimeout(()=>{
        this.isopendarwer=false;
      },500)
    },
    cancel(){
      this.deleteDialog=!this.deleteDialog;
    },
  }
}
</script>
<style>
.zs-table{
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
}
.zs-table .el-table__row{
  cursor: pointer;
}
.zs-table .table-header{
    font-size: 14px;
    height: 50px;
    background: #fff;
    padding: 0 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-bottom: 0px;
}
.zs-table .table-header i{
    font-size: 16px;
}
.zs-table .el-table thead tr th{
    font-size: 12px;
    color: #7085a1;
    font-weight: normal; 
    border-bottom: 1px solid #e0e0e0 !important;
    padding: 0;
}
.zs-table .el-table thead tr th .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.zs-table .el-table tbody tr{
    padding: 10px 0;
    background: #fff;
    color: #353b4b;
    font-size: 14px;
}
.zs-table .el-table tbody tr td{
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
}
.zs-table .el-table tbody tr td .cell{
    padding: 0 20px;
}
.zsOnetable .el-dialog__header{
    height: 50px;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.zsOnetable .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.zsOnetable .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.zsOnetable .demo-ruleForm{
    padding: 20px;
}
.zsOnetable .demo-ruleForm label{
    text-align: left;
    font-size: 12px;
    color: #1a2838; 
    min-height: 22px;
    line-height: 18px;
}
.zsOnetable .demo-ruleForm .el-form-item .el-form-item__content{
    line-height: 30px;
}
.zsOnetable  .demo-ruleForm .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}

.zsOnetable .demo-ruleForm .el-select{
    width: 100%;
}
.zsOnetable .demo-ruleForm .el-select .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}

.zsOnetable .demo-ruleForm .el-form-item textarea{
    padding: 4px 7px;
    font-size: 12px;
}

.zsOnetable .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.zsOnetable .el-dialog__footer .dialog-footer{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

/* 抽屉 */
.zsOneDrawer .ivu-drawer-header{
    height: 51px;
    line-height: 1.5;
}
.zsOneDrawer .drawer-header{
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #1a2838;
}
.zsOneDrawer .ivu-drawer-close{
    left: 16px;
} 
.zsOneDrawer .ivu-drawer-body{
    padding: 0;
}
.zsOneDrawer .content{
    height: 100%;
}
.zsOneDrawer .content .info{
  background-color: #fff;
  border-bottom: 1px solid rgb(234, 235, 236);
}
.zsOneDrawer .content .info .info-top{
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.zsOneDrawer .content .info .info-top .info-msg span{
  color: #4494f0;
  font-size: 24px;
}
.zsOneDrawer .content .info .info-top .info-cz{
  display: flex;
}
.zsOneDrawer .content .info .info-top .info-cz li{
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #828692;
  cursor: pointer;
}
.zsOneDrawer .content .info .info-top .info-cz li i{
  margin-right: 5px;
  margin-left: 20px;
  font-size: 20px;
}
.zsOneDrawer .content .info .info-bottom{
  overflow: hidden;
}
.zsOneDrawer .content .info .info-bottom .info-bottom-left{
  float: left;
  width: 66%;
  margin: 20px;
}
.zsOneDrawer .content .info .info-bottom .info-bottom-left .ztmsg{
  width: 45%;
  border-right: 1px solid #edeef0;
} 
.zsOneDrawer .content .info .info-bottom .info-bottom-left .ztmsg div:first-child{
  padding-right: 10px;
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  line-height: 18px;
  color: #7085a1;
} 
.zsOneDrawer .content .info .info-bottom .info-bottom-left .ztmsg div:last-child{
  padding-right: 10px;
  width: 100%;
  font-size: 24px;
  color: #353b4b;
} 
.zsOneDrawer .content .info .info-bottom .info-bottom-right{
  display: flex;
  align-items: center;
  height: 98px;
}
.zsOneDrawer .content .info .info-bottom .info-bottom-right .slmsg{
  margin: 20px;
}  
.zsOneDrawer .content .info .info-bottom .info-bottom-right .slborder div{
  border-right: 1px solid #edeef0;
} 
.zsOneDrawer .content .info .info-bottom .info-bottom-right .slmsg div:first-child{
  padding-right: 10px;
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  line-height: 18px;
  color: #7085a1;
} 
.zsOneDrawer .content .info .info-bottom .info-bottom-right .slmsg div:last-child{
  padding-right: 10px;
  width: 100%;
  font-size: 24px;
  color: #353b4b;
}  
.zsOneDrawer .content .info .info-bottom .info-bottom-right{
  float: right;
  width: 30%;
  display: flex;
  justify-content: flex-end;
} 

.zsOneDrawer .content .blockmsg{
  background: #f4f4f4;
  height: calc(100% - 155px);
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
}
.zsOneDrawer .content .blockmsg .msg{
  margin-bottom: 20px;
  width: calc(50% - 10px);
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
}
.zsOneDrawer .content .blockmsg .msg .msg-header{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  font-weight: 500;
  color: #1a2838;
}
.zsOneDrawer .content .blockmsg .msg .msg-body{
  padding: 20px;
  overflow: auto;
  height: 452px;
  box-sizing: border-box;
}
/* 第一个板块 */
.zsOneDrawer .content .blockmsg .msg .msg-bodys{
  width: calc(50% - 10px);
  float: left;
  padding: 0 10px 7px 0;
  min-height: 50px;
  font-size: 12px;
  color: #6b809f;
  margin: 5px 0;
}
.zsOneDrawer .content .blockmsg .msg .msg-bodys .msg-content{
  padding-right: 10px;
  width: 100%;
  border-right: 1px solid rgb(224, 224, 224);
}
.zsOneDrawer .content .blockmsg .msg .msg-bodys .msg-content .msg-content-top{
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  color: #7085a1;
  line-height: 18px;
}
.zsOneDrawer .content .blockmsg .msg .msg-bodys .msg-content .msg-content-bottom{
  width: 100%;
  color: #353b4b;
  font-size: 14px;
}
.zsOneDrawer .content .blockmsg .msg .msg-width .msg-bodys:first-child{
  width: 100%;
}
.zsOneDrawer .content .blockmsg .msg .msg-width .msg-bodys:last-child{
  width: 100%;
}
.zsOneDrawer .content .blockmsg .msg .msg-width .msg-bodys:first-child .msg-content{
  border-right: 0;
}
.zsOneDrawer .content .blockmsg .msg .msg-width .msg-bodys:last-child .msg-content{
  border-right: 0;
}
.zsOneDrawer .content .blockmsg .msg .msg-bodys:nth-child(odd) .msg-content{
  border-right: 0;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-top{
  width: 100%;
  float: left;
  padding: 0 10px 7px 0;
  min-height: 36px;
  font-size: 12px;
  color: #6b809f;
  margin: 5px 0;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-top .fyxximg{
  background-image: url(../../assets/login.jpg);
  width: 54px;
  height: 36px;
  display: inline-block;
  margin-right: 12px;
  background-size: 100% 100%;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-top .fyxxtxt{
  width: calc(100% - 70px);
  display: inline-block;
  padding-right: 10px;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-top .fyxxtxt div:first-child{
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  color: #7085a1;
  line-height: 18px;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-top .fyxxtxt div:first-child{
  width: 100%;
  color: #353b4b;
  font-size: 14px;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-bottom .fyxxheader{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  color: #7085a1;
  line-height: 18px;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-bottom .fyxxbody{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(230, 232, 235);
  padding: 10px 0px;
  font-size: 14px;
}
.zsOneDrawer .content .blockmsg .msg .khxx .msg-bodys .msg-content{
  border-right: 0;
}
.zsOneDrawer .content .blockmsg .msg .khxx .msg-bodys:nth-child(odd) .msg-content{
  border-right: 1px solid rgb(224, 224, 224);
}
    

.zsOneDrawer-dialog .zsOneDrawer-dialog-div{
    text-align: center;
}
.zsOneDrawer-dialog .zsOneDrawer-dialog-div i{ 
    font-size: 84px;
}
.zsOneDrawer-dialog .zsOneDrawer-dialog-div p{
    font-size: 18px;
    color: #979797;
    margin-top: 20px;
}
.zsOneDrawer-dialog .el-button{
    padding: 8px 42px;
}
</style>



