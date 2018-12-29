<template>
    <div class="conBox">
      <div class="titleBox">
        <el-row>
          <el-col :span="18"><div class="grid-content bg-purple" style="font-size:14px;color:rgba(0,0,0,.65)">租客管理</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light">  <el-checkbox  style="color:rgba(0,0,0,.65);font-size:12px;">仅显示在租租客</el-checkbox></div></el-col>
          <el-col :span="2" style="text-align:right">
            <div class="grid-content bg-purple">
              <el-dropdown>
                <i class="el-icon-more" style="cursor:pointer"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>列表导出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-table :data="tableData3" height="650" border style="width: 100%;text-alig:center" :default-sort = "{prop: '', order: 'descending'}" @row-click="open">
        <el-table-column prop="name" label="租客名" width="300">
        </el-table-column>
        <el-table-column prop="num" label="证件号码" width="220">
        </el-table-column>
        <el-table-column prop="industry" label="行业分类" width="100">
        </el-table-column>
        <el-table-column prop="name" label="楼宇名" width="300">
        </el-table-column>
        <el-table-column prop="contacts" label="法人" width="150">
        </el-table-column>
        <el-table-column prop="rcapital"  label="注册资本/万" width="150">
        </el-table-column>
        <el-table-column prop="edate"  sortable label="成立日期" width="200">
        </el-table-column>
        <el-table-column prop="timelimit" label="营业期限" width="200">
        </el-table-column>
        <el-table-column prop="adate" label="核准日期" width="200">
        </el-table-column>
        <el-table-column prop="contacts" label="联系人" width="150">
        </el-table-column>
      </el-table>
      <Drawer :closable="true" width="1000" class="zk-table" v-model="isopendarwer">
          <div slot="header" class="drawer-header">租客详细信息</div>
          <div class="content">
              <div class="info">
                  <div class="info-top">
                      <div class="info-msg">
                          <span style="color: #4494f0;">{{name}}</span>
                      </div>
                      <ul class="info-cz">
                          <li @click="zkbjdialog">
                            <i class="fa fa-pencil"></i><span>编辑</span>
                            <zkDialog v-if="zkbj" :visible.sync="zkbj"></zkDialog>
                          </li>
                          <li @click="deleteDialog = true">
                              <i class="el-icon-delete"></i><span>删除</span>
                              <el-dialog
                              :visible.sync="deleteDialog"
                              width="400px"
                              :modal="false"
                              center
                              :append-to-body="true"
                              class="zk-table-dialog">
                              <div class="zk-table-dialog-div">
                                  <i class="el-icon-warning"></i>
                                  <p>确认删除该租客吗？</p>
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
                          <div class="info-content">
                             <div class="info-content-top">
                               <div class="info-content-tops">
                                  <div>法人</div>
                                  <div>{{representative}}</div>
                               </div>
                             </div>
                             <div class="info-content-top">
                                <div class="info-content-tops">
                                  <div>证件号码</div>
                                  <div>{{num}}</div>
                               </div>
                             </div>
                          </div>
                          <div class="info-content">
                             <div class="info-content-top">
                               <div class="info-content-tops">
                                  <div>成立时间</div>
                                  <div>{{edate}}</div>
                               </div>
                             </div>
                             <div class="info-content-top">
                                <div class="info-content-tops">
                                  <div>注册资本</div>
                                  <div>{{rcapital}}</div>
                               </div>
                             </div>
                          </div>
                          <div class="info-content">
                             <div class="info-content-top">
                               <div class="info-content-tops">
                                  <div>行业分类</div>
                                  <div>{{industryname}}</div>
                               </div>
                             </div>
                             <div class="info-content-top">
                                <div class="info-content-tops">
                                  <div>企业地址</div>
                                  <div>{{raddress}}</div>
                               </div>
                             </div>
                          </div>
                          <div class="info-content">
                             <div class="info-content-top">
                               <div class="info-content-tops">
                                  <div>联系人</div>
                                  <div>{{contacts}}</div>
                               </div>
                             </div>
                             <div class="info-content-top">
                                <div class="info-content-tops">
                                  <div>标签</div>
                                  <div><span class="bq" v-for="(item,index) in lable" :key="index">{{item.name}}</span></div>
                               </div>
                             </div>
                          </div>
                      </div>
                      <div class="info-bottom-right">
                        <div class="gsdiv"><el-button class="gsxx" plain @click="examine">查看工商信息</el-button></div>    
                      </div>
                  </div>
              </div>
              <div class="blockmsg">          
                  <div class="blockbox">
                      <div class="boxheader">
                          <span>发表抬头</span>
                      </div>
                      <div class="boxcontent">
                            <div class="boxmsg">
                                <div class="msgs">
                                    <div class="msgs-div">
                                        <div class="msgs-divs">
                                            <div class="msgs-divs-top">纳税人识别号</div>
                                            <div class="msgs-divs-bottom">{{number}}</div>
                                        </div>
                                    </div>
                                    <div class="msgs-div">
                                        <div class="msgs-divs">
                                            <div class="msgs-divs-top">账号</div>
                                            <div class="msgs-divs-bottom">{{cardnum}}</div>
                                        </div>
                                    </div>
                                    <div class="msgs-div">
                                        <div class="msgs-divs">
                                            <div class="msgs-divs-top">开户银行</div>
                                            <div class="msgs-divs-bottom">{{bankname}}</div>
                                        </div>
                                    </div>
                                    <div class="msgs-div">
                                        <div class="msgs-divs">
                                            <div class="msgs-divs-top">电话</div>
                                            <div class="msgs-divs-bottom">{{banktel}}</div>
                                        </div>
                                    </div>
                                    <div class="msgs-div">
                                        <div class="msgs-divs">
                                            <div class="msgs-divs-top">开票地址</div>
                                            <div class="msgs-divs-bottom">{{taddress}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                      </div>
                  </div>
                  <div class="blockbox">
                      <div class="boxheader">
                          <span>发票抬头</span>
                          <el-button plain  @click="openht"><i class="el-icon-plus"></i>合同</el-button>
                          <htDialog v-if="zkht" :visible.sync="zkht"></htDialog>
                      </div>
                      <div class="boxcontent">
                          <el-table
                              :data="tableData02"
                              style="width: 100%"
                              class="fydetails-table">
                              <el-table-column
                              prop="zk"
                              label="租客"
                              width="180">
                              </el-table-column>
                              <el-table-column
                              prop="lyfh"
                              label="楼宇/房号"
                              width="180">
                              </el-table-column>
                              <el-table-column
                              prop="zls"
                              label="租赁数">
                              </el-table-column>
                              <el-table-column
                              prop="ksr"
                              label="开始日">
                              </el-table-column>
                              <el-table-column
                              prop="jsr"
                              label="结束日">
                              </el-table-column>
                              <el-table-column
                              prop="htdj"
                              label="合同单价">
                              </el-table-column>
                              <el-table-column
                              prop="zt"
                              label="状态">
                              </el-table-column>
                          </el-table>
                          <el-pagination
                              class="fy"
                              background
                              layout="prev, pager, next"
                              :page-size="5"
                              :total="1">
                          </el-pagination>  
                      </div>
                  </div>
              </div>
          </div>
      </Drawer>
      <Drawer :closable="true" width="1000" class="zk-table" v-model="isopendarwer02">
          <div slot="header" class="drawer-header"><i class="el-icon-back" @click.stop="back"></i>工商信息</div>
          <div class="zsxx">
              <div class="zsxx-block" style="height: max-content;">
                  <div class="zsxxheader">
                      <span>工商信息</span>
                  </div>
                  <div class="zsxxbody">
                      <div class="zsxxrow">
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">统一社会信用代码</div>
                                  <div class="zxsscontent-bottom">91330303325567662G</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">纳税人识别号</div>
                                  <div class="zxsscontent-bottom">91330303325567662G</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">注册号</div>
                                  <div class="zxsscontent-bottom">330303000135770</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">组织机构代码</div>
                                  <div class="zxsscontent-bottom">32556766-2</div>
                              </div>
                          </div>
                      </div>
                      <div class="zsxxrow">
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">法定联系人</div>
                                  <div class="zxsscontent-bottom">陈建</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">国籍</div>
                                  <div class="zxsscontent-bottom">中国</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">注册资本(万人民币)</div>
                                  <div class="zxsscontent-bottom">20万元人民币</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">经营状态</div>
                                  <div class="zxsscontent-bottom">存续</div>
                              </div>
                          </div>
                      </div>
                      <div class="zsxxrow">
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">成立日期</div>
                                  <div class="zxsscontent-bottom">暂无</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">公司类型</div>
                                  <div class="zxsscontent-bottom">有限责任公司(自然人投资或控股)</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">人员规模</div>
                                  <div class="zxsscontent-bottom"></div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">营业期限</div>
                                  <div class="zxsscontent-bottom">2024/12/14</div>
                              </div>
                          </div>
                      </div>
                      <div class="zsxxrow">
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">核准日期</div>
                                  <div class="zxsscontent-bottom">暂无</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">英文名</div>
                                  <div class="zxsscontent-bottom"></div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">所属地区</div>
                                  <div class="zxsscontent-bottom">浙江</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">登记机关</div>
                                  <div class="zxsscontent-bottom">温州市龙湾区市场监督管理局</div>
                              </div>
                          </div>
                      </div>
                      <div class="zsxxrow">
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">所属行业</div>
                                  <div class="zxsscontent-bottom">批发和零售业</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">开票地址</div>
                                  <div class="zxsscontent-bottom">温州市龙湾区蒲州街道屿田村贺兴路68弄39号</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">注册地址</div>
                                  <div class="zxsscontent-bottom">温州市龙湾区蒲州街道屿田村贺兴路68弄39号</div>
                              </div>
                          </div>
                          <div class="zsxxcol">
                              <div class="zxsscontent">
                                  <div class="zxsscontent-top">经营范围</div>
                                  <div class="zxsscontent-bottom">销售:文具用品、纸张、办公用品。销售:文具用品、纸张、办公用品。</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Drawer>
      <el-dialog
          :visible.sync="sclxr"
          width="400px"
          :modal="false"
          center
          :append-to-body="true"
          class="zsTwotable-dialog">
          <div class="zsTwotable-dialog-div">
              <i class="el-icon-warning"></i>
              <p>删除房源后，相关合同、客户数据不会发生变化，请手动修改对应数据。确认删除？</p>
          </div>
          <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="qd">确 定</el-button>
              <el-button type="info" style="margin-left:20px;" @click="sclxr=false;">取 消</el-button>
          </span>
      </el-dialog>
    </div>
</template>

<script>
import { zkList } from '@/axios/api' //获取租客列表
import { getonecustomer } from '@/axios/api' //编辑租客详情


import zkDialog from '@/components/zukeAdmin/zkDialog'
import htDialog from '@/components/hetongAdmin/htDialog'

export default {
    name: 'zkTable',
    components:{
      zkDialog,htDialog
    },
    data(){
        return{
            tableData3: [],
            sclxr: false,
            isopendarwer: false,  
            deleteDialog: false,
            tableData02:[],
            zkbj: false,
            isopendarwer02: false,
            zkid: '',
            zkht: false,
            id:'',
            // 租客详情
            name: '',
            representative: '',
            num: '',
            edate: '',
            rcapital: '',
            industryname: '',
            raddress: '',
            contacts: '',
            lable: [],
            number: '',
            cardnum: '',
            bankname: '',
            banktel: '',
            taddress: ''
            //租客详情弹窗

        }
    },
    mounted(){
       // 租客列表
        zkList({                                                 
        }).then(res => {
            if(res.flag == 0){         
                this.tableData3=res.data;    
            } 
        }) 
    },
    methods:{
        shanchu(){
            this.sclxr=!this.sclxr;
        },
        qd(index){
            this.tableData.splice(index,1);
            this.sclxr=false;
        },
        affirm(){
            this.deleteDialog=!this.deleteDialog;
            setTimeout(()=>{
                this.isopendarwer=false;
            },500)
            },
            cancel(){
                this.deleteDialog=!this.deleteDialog;
        },
        examine(){
            this.isopendarwer=false;
            setTimeout(()=>{
                this.isopendarwer02=true;
            },500)    
        },
        back(){
            this.isopendarwer02=false;
            setTimeout(()=>{
                this.isopendarwer=true;
            },500) 
        },
        zkbjdialog(){
            this.zkbj=true;    
            this.$store.commit('ADD_DATEILSID',this.id);            
        },
        open(row){
            this.isopendarwer=true;
            this.id=row.id;
            getonecustomer({
                id : row.id                                          
            }).then(res => {
                if(res.flag == 0){ 
                    this.name=res.data.info.name; 
                    this.representative=res.data.icinfo.representative;
                    this.num=res.data.info.num;
                    this.edate=res.data.icinfo.edate;      
                    this.rcapital=res.data.icinfo.rcapital;
                    this.industryname=res.data.info.industryname;
                    this.raddress=res.data.icinfo.raddress;
                    this.contacts=res.data.info.contacts;
                    this.lable=res.data.lable;
                    this.number=res.data.tick.number;
                    this.cardnum=res.data.tick.cardnum;
                    this.bankname=res.data.tick.bankname;
                    this.banktel=res.data.tick.banktel;
                    this.taddress=res.data.tick.taddress;
                } 
            }) 
        },
        openht(){
            this.zkht=true;
        }
    }
}
</script>
<style>
.conBox .el-table__row:hover{
  cursor: pointer;
}
.conBox .el-table__row td{
  text-align: center
}
.conBox .el-table th.is-leaf{
  text-align: center
}
.titleBox{
    text-align: left;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #e0e0e0;
    background: #fff;
    border-bottom: none;
    border-radius: 5px 5px 0px 0px
}
.titleBox .el-checkbox__label{
font-size: 12px;

}
.zkclose {
  color: #108ee9 !important;
  cursor: pointer;
  margin-left: 10px;
}

.conBox{
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px 20px;
    margin-top: 20px;
}
.conBox .el-table--border{
    border: 1px solid #e0e0e0;
}

/* 抽屉 */
.zk-table .ivu-drawer-header{
    height: 51px;
    line-height: 1.5;
}
.zk-table .drawer-header{
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #1a2838;
    position: relative;
}
.zk-table .drawer-header .el-icon-back{
    position: absolute;
    left: 38px;
    top: 2px;
    border-left: 1px solid #e0e0e0;
    padding: 0 16px;
    z-index: 9999;
    cursor: pointer;
}
.zk-table .ivu-drawer-close{
    left: 16px;
} 
.zk-table .ivu-drawer-body{
    padding: 0;
}
.zk-table .content{
    height: 100%;
}
.zk-table .content .info{
  background-color: #fff;
  border-bottom: 1px solid rgb(234, 235, 236);
}
.zk-table .content .info .info-top{
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.zk-table .content .info .info-top .info-msg span{
  font-size: 24px;
}
.zk-table .content .info .info-top .info-cz{
  display: flex;
}
.zk-table .content .info .info-top .info-cz li{
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #828692;
  cursor: pointer;
}
.zk-table .content .info .info-top .info-cz li i{
  margin-right: 5px;
  margin-left: 20px;
  font-size: 20px;
}
.zk-table .content .info .info-bottom{
    border-top: 1px dashed #eaebec;
    display: flex;
    padding-bottom: 30px;
    width: 100%;
}
.zk-table .content .info .info-bottom .info-bottom-left{
    width: 90%;
    display: flex;
}
.zk-table .content .info .info-bottom .info-bottom-left .info-content{
    min-width: 12%;
    font-size: 12px;
    color: #6b809f;
    margin: 20px;
}
.zk-table .content .info .info-bottom .info-bottom-left .info-content:last-child .info-content-top .info-content-tops{
    border: 0;
}
.zk-table .content .info .info-bottom .info-bottom-left .info-content .info-content-top{
    margin: 20px 0;
    width: 100%;
    min-height: 43px;
    font-size: 12px;
    color: #6b809f;
}
.zk-table .content .info .info-bottom .info-bottom-left .info-content .info-content-tops{
    display: inline-block;
    padding-right: 10px;
    width: 100%;
    border-right: 1px solid rgb(224, 224, 224);
}
.zk-table .content .info .info-bottom .info-bottom-left .info-content .info-content-tops .bq{
    background-color: #e1f0fb;
    color: #49a5f2;
    padding: 4px 12px;
    margin: 5px 6px 5px 0;
    border-radius: 4px;
}
.zk-table .content .info .info-bottom .info-bottom-left .info-content .info-content-tops div:first-child{
    width: 100%;
    min-height: 22px;
    font-size: 12px;
    color: #7085a1;
    line-height: 18px;
}
.zk-table .content .info .info-bottom .info-bottom-left .info-content .info-content-tops div:last-child{
    width: 100%;
    color: #353b4b;
    font-size: 14px;
}
.zk-table .content .info .info-bottom .info-bottom-right{
    width: 10%;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
}
.zk-table .content .info .info-bottom .info-bottom-right .gsdiv{
  padding-top: 40px;
}
.zk-table .content .info .info-bottom .info-bottom-right .gsdiv .gsxx{
  padding: 8px 15px;
  font-size: 12px;
}
.zk-table .content .blockmsg{
  background: #f4f4f4;
  height: calc(100% - 157px);
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
.zk-table .content .blockmsg .blockbox{
  width: 100%;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}
.zk-table .content .blockmsg .blockbox:nth-child(n+2){
  margin-top: 20px;
}
.zk-table .content .blockmsg .blockbox .boxheader{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.zk-table .content .blockmsg .blockbox .boxheader .el-button{
    padding: 6px 18px;
}
.zk-table .boxcontent .boxmsg{
    padding: 20px;
    overflow-y: auto;
}
.zk-table .boxcontent .boxmsg .msgs{
    margin-left: -5px;
    display: flex;
}
.zk-table .boxcontent .boxmsg .msgs .msgs-div{
    width: 100%;
    font-size: 12px;
    color: #6b809f;
    margin: 5px 0;
    min-height: 43px;
    padding: 0 5px;
}
.zk-table .boxcontent .boxmsg .msgs .msgs-div .msgs-divs{
    display: inline-block;
    padding-right: 10px;
    width: 100%;
    border-right: 1px solid rgb(224, 224, 224);
}
.zk-table .boxcontent .boxmsg .msgs .msgs-div:last-child .msgs-divs{
    border: 0;
}
.zk-table .boxcontent .boxmsg .msgs .msgs-div .msgs-divs-top{
    font-size: 12px;
    color: #6b809f;
    line-height: 18px;
    min-height: 22px;
    line-height: 18px;
}
.zk-table .boxcontent .boxmsg .msgs .msgs-div .msgs-divs-bottom{
    width: 100%;
    color: #353b4b;
    font-size: 14px;
}
.zk-table .boxcontent .fydetails-table thead tr th{
  border: 0;
  padding: 9px 10px;
  color: #7085a1;
  font-size: 12px;
  font-weight: normal;
  text-align: left;
}
.zk-table .boxcontent .fydetails-table thead tr th:first-child{
  padding-left: 30px;
}
.zk-table .boxcontent .fydetails-table tbody tr td{
  padding: 9px 10px;
  color: rgba(0,0,0,.65);
  font-size: 12px;
  text-align: left;
}
.zk-table .boxcontent .fydetails-table tbody tr td:first-child{
  padding-left: 30px;
}
.zk-table .boxcontent .fydetails-table tbody tr td:last-child{
  padding-right: 30px;
  text-align: right;
}
.zk-table .boxcontent .fy{
  text-align: right;
  margin: 6px 20px;
}
.zk-table .boxcontent .fy ul li{
  width: 20px;
  height: 20px;
  line-height: 20px;
  min-width: 20px;
}
.zk-table .boxcontent .fy button{
  height: 20px;
  line-height: 20px;
  min-width: 20px;
}
.zk-table .zsxx{
    background: #f4f4f4;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
}
.zk-table .zsxx .zsxx-block{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
}
.zk-table .zsxx .zsxx-block .zsxxheader{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.zk-table .zsxx .zsxx-block .zsxxbody{
    padding: 20px;
    overflow: auto;
}
.zk-table .zsxx .zsxx-block .zsxxbody .zsxxrow{
    margin-left: -5px;
    display: flex;
}
.zk-table .zsxx .zsxx-block .zsxxbody .zsxxcol{
    width: 100%;
    font-size: 12px;
    color: #6b809f;
    margin: 20px 0;
    padding: 0 5px;
}
.zk-table .zsxx .zsxx-block .zsxxbody .zsxxcol .zxsscontent{
    display: inline-block;
    padding-right: 10px;
    width: 100%;
    border-right: 1px solid rgb(224, 224, 224)
}
.zk-table .zsxx .zsxx-block .zsxxbody .zsxxcol .zxsscontent{
    display: inline-block;
    padding-right: 10px;
    width: 100%;
    border-right: 1px solid rgb(224, 224, 224)
}
.zk-table .zsxx .zsxx-block .zsxxbody .zsxxcol:nth-of-type(4n) .zxsscontent{
    border-right: 0;
}
.zk-table .zsxx .zsxx-block .zsxxbody .zsxxcol .zxsscontent .zxsscontent-top{
    width: 100%;
    min-height: 22px;
    font-size: 12px;
    color: #7085a1;
    line-height: 18px;
}
.zk-table .zsxx .zsxx-block .zsxxbody .zsxxcol .zxsscontent .zxsscontent-bottom{
    word-wrap:break-word;
    width: 100%;
    color: #353b4b;
    font-size: 14px;
}

/* 抽屉对话框 */
.zk-table-dialog .zk-table-dialog-div{
    text-align: center;
}
.zk-table-dialog .zk-table-dialog-div i{ 
    font-size: 84px;
}
.zk-table-dialog .zk-table-dialog-div p{
    font-size: 18px;
    color: #979797;
    margin-top: 20px;
}
.zk-table-dialog .el-button{
    padding: 8px 42px;
}
</style>

