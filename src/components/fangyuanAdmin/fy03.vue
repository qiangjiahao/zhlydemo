<template>
    <div class="fy-table">
      <div class="table-header">
          <div>所有房源</div>
          <i class="el-icon-more"></i>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
        height="650"
        @row-click="isopendarwer = true">
        <el-table-column
          prop="name"
          label="楼宇名称"
          width="149">
        </el-table-column>
        <el-table-column
          prop="lc"
          label="楼层"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="fh"
          label="房号"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="zx"
          label="装修"
          width="150">
        </el-table-column>
        <el-table-column
          prop="mj"
          label="面积"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="gw"
          label="工位"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="房源标签"
          :filters="[{ text: '朝南', value: '朝南' }, { text: '朝北', value: '朝北' }, { text: '有窗', value: '有窗' }, { text: '自用', value: '自用' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
          width="150">
          <template slot-scope="scope">
            <el-tag
              type="primary" plan
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="zk"
          label="租客"
          width="150">
        </el-table-column>
        <el-table-column
          prop="jzr"
          label="计租日"
          width="200">
        </el-table-column>
        <el-table-column
          prop="jsr"
          label="结束日"
          width="200">
        </el-table-column>
        <el-table-column
          prop="htdj"
          label="合同单价"
          width="150">
        </el-table-column>
        <el-table-column
          prop="htdjdw"
          label="合同单价单位"
          width="150">
        </el-table-column>
        <el-table-column
          prop="ssdj"
          label="实时单位"
          width="150">
        </el-table-column>
      </el-table>
      <Drawer :closable="true" width="1000" class="fy03Drawer" v-model="isopendarwer">
        <div slot="header" class="drawer-header">房源信息</div>
        <div class="content">
            <div class="info">
              <div class="info-top">
                <div class="info-msg">
                  <span>1楼 / 22室</span>
                </div>
                <ul class="info-cz">
                  <li @click="fy03bj = true;">
                    <i class="fa fa-pencil"></i><span>编辑</span>
                    <fyDialog v-if="fy03bj" :visible.sync="fy03bj"></fyDialog>
                  </li>
                  <li @click="deleteDialog = true">
                    <i class="el-icon-delete"></i><span>删除</span>
                    <el-dialog
                      :visible.sync="deleteDialog"
                      width="400px"
                      :modal="false"
                      center
                      :append-to-body="true"
                      class="fy03delete-dialog">
                      <div class="fy03delete-dialog-div">
                          <i class="el-icon-warning"></i>
                          <p>删除房源后，相关合同、客户数据不会发生变化，请手动修改对应数据。确认删除？</p>
                      </div>
                      <span slot="footer" class="dialog-footer">
                          <el-button type="primary" @click="affirm">确 定</el-button>
                          <el-button type="info" style="margin-left:20px;" @click="cancel">取 消</el-button>
                      </span>
                    </el-dialog>
                    <el-dialog
                      :visible.sync="deleteDialog02"
                      width="400px"
                      :modal="false"
                      center
                      :append-to-body="true"
                      class="fy03delete-dialog">
                      <div class="fy03delete-dialog-div">
                          <i class="el-icon-warning"></i>
                          <p>该房源已被删除</p>
                      </div>
                      <span slot="footer" class="dialog-footer">
                          <el-button type="primary" @click="affirm02">确定</el-button>
                      </span>
                    </el-dialog>
                  </li>
                </ul>
              </div>
              <div class="info-bottom">
                <ul class="info-ul">
                  <li>
                    <div>工位(工位)</div>
                    <div>222</div>
                  </li>
                  <li>
                    <div>招商状态</div>
                    <div>可招商</div>
                  </li>
                  <li>
                    <div>预租单价(元/工位·天)</div>
                    <div>-</div>
                  </li>
                  <li>
                    <div>装修</div>
                    <div>-</div>
                  </li>
                  <li>
                    <div>面积</div>
                    <div>-</div>
                  </li>
                  <li class="li02">
                    <div>标签</div>
                    <div></div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="blockmsg">          
              <div class="blockbox">
                <div class="boxheader">
                    <div class="headertxt">合同</div>
                    <el-button plain @click="fy03ht = true"><i class="el-icon-plus"></i>合同</el-button>
                    <htDialog v-if="fy03ht" :visible.sync="fy03ht"></htDialog>
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
                      prop="zls"
                      label="租赁数"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="jzr"
                      label="计租日">
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
              <div class="blockbox">
                <div class="boxheader">
                    <div class="headertxt">客户</div>
                    <el-button plain @click="fy03xjkh = true"><i class="el-icon-plus"></i>新建客户</el-button>
                    <zsOneDialogs v-if="fy03xjkh" :visible.sync="fy03xjkh"></zsOneDialogs>               
                </div>
                <div class="boxcontent">
                  <el-table
                    :data="tableData03"
                    style="width: 100%"
                    class="fydetails-table">
                    <el-table-column
                      prop="zk"
                      label="租客"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="zls"
                      label="租赁数"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="jzr"
                      label="计租日">
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
    </div>
</template>

<script>
import Vue from 'vue'
import { Drawer } from 'iview';
Vue.component('Drawer', Drawer);

import htDialog from '@/components/hetongAdmin/htDialog'
import fyDialog from '@/components/fangyuanAdmin/fyDialog'
import zsOneDialogs from '@/components/zhaoshangAdmin/zsOneDialogs'

export default {
  name: 'fy03',
  components:{
    htDialog,fyDialog,zsOneDialogs
  },
  data () {
    return {
      tableData: [{
          name: '004',
          lc: '01',
          fh: '01',
          zx: '-',
          mj: '100.00',
          gw: '',
          tag: '',
          zk: '-',
          jzr: '-',
          jsr: '-',
          htdj: '-',
          htdjdw: '-',
          ssdj: '-'
        }, {
          name: '001',
          lc: '01',
          fh: '01',
          zx: '-',
          mj: '100.00',
          gw: '',
          tag: '',
          zk: '-',
          jzr: '-',
          jsr: '-',
          htdj: '-',
          htdjdw: '-',
          ssdj: '-'
        }, {
          name: '003',
          lc: '01',
          fh: '01',
          zx: '-',
          mj: '100.00',
          gw: '',
          tag: '',
          zk: '-',
          jzr: '-',
          jsr: '-',
          htdj: '-',
          htdjdw: '-',
          ssdj: '-'
        }, {
          name: '002',
          lc: '01',
          fh: '01',
          zx: '-',
          mj: '100.00',
          gw: '',
          tag: '',
          zk: '-',
          jzr: '-',
          jsr: '-',
          htdj: '-',
          htdjdw: '-',
          ssdj: '-'
        }
      ],
      isopendarwer: false,
      tableData02: [],
      tableData03: [],
      deleteDialog: false,
      deleteDialog02: false,
      fy03bj: false,
      fy03ht: false,
      fy03xjkh: false,
      fy03bjfy: false
    }
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    affirm(){
      this.deleteDialog=!this.deleteDialog;
      setTimeout(()=>{
        this.isopendarwer=false;
        setTimeout(()=>{
          this.deleteDialog02=true;
        },500)
      },500)
    },
    cancel(){
      this.deleteDialog=!this.deleteDialog;
    },
    affirm02(){
      this.deleteDialog02=false;
    }
  }
}
</script>
<style>
/* 抽屉 */
.fy03Drawer .ivu-drawer-header{
    height: 51px;
    line-height: 1.5;
}
.fy03Drawer .drawer-header{
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #1a2838;
}
.fy03Drawer .ivu-drawer-close{
    left: 16px;
} 
.fy03Drawer .ivu-drawer-body{
    padding: 0;
}
.fy03Drawer .content{
    height: 100%;
}
.fy03Drawer .content .info{
  background-color: #fff;
  border-bottom: 1px solid rgb(234, 235, 236);
}
.fy03Drawer .content .info .info-top{
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px dashed #eaebec;
}
.fy03Drawer .content .info .info-top .info-msg span{
  color: rgb(77, 84, 100);
  font-size: 24px;
}
.fy03Drawer .content .info .info-top .info-cz{
  display: flex;
}
.fy03Drawer .content .info .info-top .info-cz li{
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #828692;
  cursor: pointer;
}
.fy03Drawer .content .info .info-top .info-cz li i{
  margin-right: 5px;
  margin-left: 20px;
  font-size: 20px;
}
.fy03Drawer .content .info .info-bottom .info-ul{
  padding-left: 12px;
  overflow: hidden;
}
.fy03Drawer .content .info .info-bottom .info-ul li{
  margin: 20px 10px 20px 0;
  padding-left: 10px;
  width: 165px;
  float: left;
}
.fy03Drawer .content .info .info-bottom .info-ul li div:first-child{
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  line-height: 18px;
  color: #7085a1;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  border-right: 1px solid rgb(224, 224, 224);
}
.fy03Drawer .content .info .info-bottom .info-ul li div:last-child{
  font-size: 24px;
  width: 100%;
  color: #353b4b;
  padding-right: 10px;
  border-right: 1px solid rgb(224, 224, 224);
}
.fy03Drawer .content .info .info-bottom .info-ul .li02{
  width: 330px;
  margin: 20px 0 20px 10px;
  padding: 0;
}
.fy03Drawer .content .blockmsg{
  background: #f4f4f4;
  height: calc(100% - 218px);
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
.fy03Drawer .content .blockmsg .blockbox{
  width: 100%;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}
.fy03Drawer .content .blockmsg .blockbox:nth-child(n+2){
  margin-top: 20px;
}
.fy03Drawer .content .blockmsg .blockbox .boxheader{
  padding-left: 40px;
  padding-right: 20px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fy03Drawer .content .blockmsg .blockbox .boxheader .headertxt{
  font-size: 16px;
  color: #1a2038;
}
.fy03Drawer .content .blockmsg .blockbox .boxheader .el-button{
  padding: 6px 18px;
}
.fy03Drawer .boxcontent .fydetails-table thead tr th{
  border: 0;
  padding: 9px 10px;
  color: #7085a1;
  font-size: 12px;
  font-weight: normal;
  text-align: left;
}
.fy03Drawer .boxcontent .fydetails-table thead tr th:first-child{
  padding-left: 30px;
}
.fy03Drawer .boxcontent .fydetails-table thead tr th:nth-last-child(2){
  padding-right: 30px;
  text-align: right;
}
.fy03Drawer .boxcontent .fydetails-table tbody tr td{
  padding: 9px 10px;
  color: rgba(0,0,0,.65);
  font-size: 12px;
  text-align: left;
}
.fy03Drawer .boxcontent .fydetails-table tbody tr td:first-child{
  padding-left: 30px;
}
.fy03Drawer .boxcontent .fydetails-table tbody tr td:last-child{
  padding-right: 30px;
  text-align: right;
}
.fy03Drawer .boxcontent .fy{
  text-align: right;
  margin: 6px 20px;
}
.fy03Drawer .boxcontent .fy ul li{
  width: 20px;
  height: 20px;
  line-height: 20px;
  min-width: 20px;
}
.fy03Drawer .boxcontent .fy button{
  height: 20px;
  line-height: 20px;
  min-width: 20px;
}

.fy03delete-dialog .fy03delete-dialog-div{
    text-align: center;
}
.fy03delete-dialog .fy03delete-dialog-div i{ 
    font-size: 84px;
}
.fy03delete-dialog .fy03delete-dialog-div p{
    font-size: 18px;
    color: #979797;
    margin-top: 20px;
}
.fy03delete-dialog .el-button{
    padding: 8px 42px;
}
</style>


