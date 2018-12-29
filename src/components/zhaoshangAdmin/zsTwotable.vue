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
            :default-sort = "{prop: 'lc', order: 'descending'}"
            @row-click="isopendarwer = true">
            <el-table-column
            prop="name"
            label="联系人"
            width="262">
            </el-table-column>
            <el-table-column
            prop="lxfs"
            label="联系方式"
            sortable
            width="291">
            </el-table-column>
            <el-table-column
            prop="sq"
            label="商圈"
            sortable
            width="262">
            </el-table-column>
            <el-table-column
            prop="qdlx"
            label="渠道类型"
            sortable
            width="262">
            </el-table-column>
            <el-table-column
            prop="dkl"
            label="带看量"
            width="262">
            <template slot-scope="scope">
              {{scope.row.dkl}}
              <div class="zsTwotable-div">
                <el-button plain @click.stop="shanchu(scope.$index)"><i class="el-icon-plus"></i>删除</el-button>
              </div>                           
            </template>
            </el-table-column>
            <el-table-column
            prop="zxdksj"
            label="最新带看时间"
            sortable
            width="264">
            </el-table-column>
        </el-table>
        <Drawer :closable="true" width="1000" class="zsTwoDrawer" v-model="isopendarwer">
            <div slot="header" class="drawer-header">客户详情</div>
            <div class="content">
                <div class="info">
                    <div class="info-top">
                        <div class="info-msg">
                            <span>马加</span>
                            <span style="font-size: 16px;color: #b4b6be;margin-left: 20px;">北京我爱出行科技服务有限公司</span>
                        </div>
                        <ul class="info-cz">
                            <li @click="deleteDialog = true">
                                <i class="el-icon-delete"></i><span>删除</span>
                                <el-dialog
                                :visible.sync="deleteDialog"
                                width="400px"
                                :modal="false"
                                center
                                :append-to-body="true"
                                class="zsTwoDrawer-dialog">
                                <div class="zsTwoDrawer-dialog-div">
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
                            <div class="info-content" style="width:25%;">
                                <div class="contents">
                                    <div class="contentstop">邮箱</div>
                                    <div class="contentsbottom">暂无</div>
                                </div>
                            </div>
                            <div class="info-content" style="width:25%;">
                                <div class="contents">
                                    <div class="contentstop">邮箱</div>
                                    <div class="contentsbottom">789</div>
                                </div>
                            </div>
                            <div class="info-content" style="width:50%;">
                                <div class="contents">
                                    <div class="contentstop">邮箱</div>
                                    <div class="contentsbottom">暂无</div>
                                </div>
                            </div>
                        </div>
                        <div class="info-bottom-right">
                            <div class="info-content">
                                <div class="contents">
                                    <div class="contentstop">邮箱</div>
                                    <div class="contentsbottom">暂无</div>
                                </div>
                            </div>
                            <div class="info-content">
                                <div class="contents">
                                    <div class="contentstop">邮箱</div>
                                    <div class="contentsbottom">789</div>
                                </div>
                            </div>
                            <div class="info-content">
                                <div class="contents">
                                    <div class="contentstop">邮箱</div>
                                    <div class="contentsbottom">暂无</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blockmsg">          
                    <div class="blockbox" style="height: max-content;">
                        <div class="boxcontent">
                            <el-table
                                :data="tableData02"
                                style="width: 100%"
                                class="fydetails-table">
                                <el-table-column
                                prop="kh"
                                label="客户"
                                width="180">
                                </el-table-column>
                                <el-table-column
                                prop="lfsj"
                                label="来访时间"
                                width="180">
                                </el-table-column>
                                <el-table-column
                                prop="xqsl"
                                label="需求数量">
                                </el-table-column>
                                <el-table-column
                                prop="khzt"
                                label="客户状态">
                                </el-table-column>
                                <el-table-column
                                prop="qd"
                                label="渠道">
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
export default {
    name: 'zsTwotable',
    data(){
        return{
            tableData: [{
                name: '小凡',
                lxfs: '18591770409',
                sq: '长河商圈',
                qdlx: '',
                dkl: '0',
                zxdksj: '2017-11-30'
                }, {
                name: '马佳',
                lxfs: '15829088129',
                sq: '彩虹城商圈',
                qdlx: '自由经纪人',
                dkl: '1',
                zxdksj: '2017-01-30'
                }
            ],
            sclxr: false,
            isopendarwer: false,  
            deleteDialog: false,
            tableData02:[]
        }   
    },
    methods:{
        shanchu(index){
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
        }
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

/* 按钮 */
.zs-table .el-table__row .zsTwotable-div{
    display: none;
}
.zs-table .el-table__row:hover .zsTwotable-div{
    display: block;
}
.zs-table .zsTwotable-div{
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
}
.zs-table .zsTwotable-div .el-button{
    padding: 6px 10px;
    font-size: 12px;
}

/* 删除对话框 */
.zsTwotable-dialog .zsTwotable-dialog-div{
    text-align: center;
}
.zsTwotable-dialog .zsTwotable-dialog-div i{ 
    font-size: 84px;
}
.zsTwotable-dialog .zsTwotable-dialog-div p{
    font-size: 18px;
    color: #979797;
    margin-top: 20px;
}
.zsTwotable-dialog .el-button{
    padding: 8px 42px;
}

/* 抽屉 */
.zsTwoDrawer .ivu-drawer-header{
    height: 51px;
    line-height: 1.5;
}
.zsTwoDrawer .drawer-header{
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #1a2838;
}
.zsTwoDrawer .ivu-drawer-close{
    left: 16px;
} 
.zsTwoDrawer .ivu-drawer-body{
    padding: 0;
}
.zsTwoDrawer .content{
    height: 100%;
}
.zsTwoDrawer .content .info{
  background-color: #fff;
  border-bottom: 1px solid rgb(234, 235, 236);
}
.zsTwoDrawer .content .info .info-top{
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.zsTwoDrawer .content .info .info-top .info-msg span{
  font-size: 24px;
}
.zsTwoDrawer .content .info .info-top .info-cz{
  display: flex;
}
.zsTwoDrawer .content .info .info-top .info-cz li{
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #828692;
  cursor: pointer;
}
.zsTwoDrawer .content .info .info-top .info-cz li i{
  margin-right: 5px;
  margin-left: 20px;
  font-size: 20px;
}
.zsTwoDrawer .content .info .info-bottom{
    display: flex;
    justify-content: space-between;
    border-top: 1px dashed #eaebec;
    height: 100px;
    align-items: center;
}
.zsTwoDrawer .content .info .info-bottom .info-bottom-left{
    display: flex;
    width: 68%;
}
.zsTwoDrawer .content .info .info-bottom .info-content{
    width: 100%;
    font-size: 12px;
    color: #6b809f;
    margin: 20px;
}
.zsTwoDrawer .content .info .info-bottom .info-content:last-child .contents{
    border-right: 0;
}
.zsTwoDrawer .content .info .info-bottom .info-content .contents{
    display: inline-block;
    padding-right: 10px;
    width: 100%;
    border-right: 1px solid rgb(224, 224, 224);
}
.zsTwoDrawer .content .info .info-bottom .info-content .contents .contentstop{
    width: 100%;
    min-height: 22px;
    font-size: 12px;
    color: #7085a1;
    line-height: 18px;
}
.zsTwoDrawer .content .info .info-bottom .info-content .contents .contentsbottom{
    width: 100%;
    position: relative;
    color: #353b4b;
    font-size: 14px;
} 
.zsTwoDrawer .content .info .info-bottom .info-bottom-right{
  width: 32%;
  display: flex;
}
.zsTwoDrawer .content .blockmsg{
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
.zsTwoDrawer .content .blockmsg .blockbox{
  width: 100%;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}
.zsTwoDrawer .boxcontent .fydetails-table thead tr th{
  border: 0;
  padding: 9px 10px;
  color: #7085a1;
  font-size: 12px;
  font-weight: normal;
  text-align: left;
}
.zsTwoDrawer .boxcontent .fydetails-table thead tr th:first-child{
  padding-left: 30px;
}
.zsTwoDrawer .boxcontent .fydetails-table tbody tr td{
  padding: 9px 10px;
  color: rgba(0,0,0,.65);
  font-size: 12px;
  text-align: left;
}
.zsTwoDrawer .boxcontent .fydetails-table tbody tr td:first-child{
  padding-left: 30px;
}
.zsTwoDrawer .boxcontent .fydetails-table tbody tr td:last-child{
  padding-right: 30px;
  text-align: right;
}
.zsTwoDrawer .boxcontent .fy{
  text-align: right;
  margin: 6px 20px;
}
.zsTwoDrawer .boxcontent .fy ul li{
  width: 20px;
  height: 20px;
  line-height: 20px;
  min-width: 20px;
}
.zsTwoDrawer .boxcontent .fy button{
  height: 20px;
  line-height: 20px;
  min-width: 20px;
}


/* 抽屉对话框 */
.zsTwoDrawer-dialog .zsTwoDrawer-dialog-div{
    text-align: center;
}
.zsTwoDrawer-dialog .zsTwoDrawer-dialog-div i{ 
    font-size: 84px;
}
.zsTwoDrawer-dialog .zsTwoDrawer-dialog-div p{
    font-size: 18px;
    color: #979797;
    margin-top: 20px;
}
.zsTwoDrawer-dialog .el-button{
    padding: 8px 42px;
}
</style>


