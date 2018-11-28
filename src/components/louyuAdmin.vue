<template>
    <div class="main-Box">
        <div class="Box-top">
            <div class="demo-input-suffix">
                <el-input
                    placeholder="搜索楼宇名称"
                    prefix-icon="el-icon-search"
                    v-model="input21"
                    class="ly-input">
                </el-input>
                <Lydialog></Lydialog>
            </div>
            <div class="ly-content">
                <lyMsg></lyMsg>
                <sjpzdialog></sjpzdialog>           
            </div>          
        </div>
        <div class="Box-bottom">
            <div class="table-header">
                <div>楼宇列表</div>
                <i class="el-icon-more"></i>
            </div>
            <el-table
                :data="tableData"
                style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
                :default-sort = "{prop: 'date', order: 'descending'}"
                height="650"
                @row-click="skip">
                <el-table-column
                prop="date"
                label="楼宇名称"
                width="336">
                <template slot-scope="scope">
                    <div class="lymc">
                        <div class="lymc-left">                           
                            <img :src="scope.row.date.date01">
                        </div>
                        <div class="lymc-right">
                            <div class="lymc-rigth01">{{scope.row.date.date02}}</div>
                            <div class="lymc-rigth02">{{scope.row.date.date03}}</div>
                        </div>
                    </div>                   
                </template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="在租均价"
                sortable
                width="201">
                </el-table-column>
                <el-table-column
                prop="zssl"
                label="可招商数量"
                sortable
                width="168">
                </el-table-column>
                <el-table-column
                prop="zzsl"
                label="在租数量"
                sortable
                width="224">
                </el-table-column>
                <el-table-column
                prop="zzhtsl"
                label="再租合同份数"
                sortable
                width="168">
                </el-table-column>  
                <el-table-column
                prop="yjwcl"
                label="预计完成率"
                sortable
                width="168">
                </el-table-column>
                <el-table-column
                prop="cs"
                label="城市"
                sortable
                width="168">
                <template slot-scope="scope">
                    {{scope.row.cs}}
                    <sxly></sxly>                                  
                </template>  
                </el-table-column>
                <el-table-column
                prop="sf"
                label="省份"
                sortable
                width="170">
                </el-table-column>          
            </el-table>
        </div>        
    </div>
</template>
<script>
import Lydialog from '@/components/louyuAdmin/Dialog'
import sjpzdialog from '@/components/louyuAdmin/Dialogsjpz'
import lyMsg from '@/components/zhlyMsg/lyMsg'
import sxly from '@/components/louyuAdmin/sxly' //上下楼宇弹窗切换

export default {
    name:'louyuAdmin',
    components:{
        Lydialog,sjpzdialog,lyMsg,sxly
    },
    data(){
        return{
            input21: '',
            activeIndex: '1',
            tableData: [{               
                name: '0.00 元/㎡·天',
                date: {
                    date01: require('../assets/3 (1).png'),
                    date02: 'aaa',
                    date03: '市辖区'
                },
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%',
                cs: '南京市',
                sf: '江苏省'
                }, {             
                name: '0.00 元/㎡·天',
                date: {
                    date01: require('../assets/3 (1).png'),
                    date02: 'aaa',
                    date03: '市辖区'
                },
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%',
                cs: '南京市',
                sf: '江苏省'
                }, {               
                name: '0.00 元/㎡·天',
                date: {
                    date01: require('../assets/3 (1).png'),
                    date02: 'aaa',
                    date03: '市辖区'
                },
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%',
                cs: '南京市',
                sf: '江苏省'
                }, {              
                name: '0.00 元/㎡·天',
                date: {
                    date01: require('../assets/3 (1).png'),
                    date02: 'aaa',
                    date03: '市辖区'
                },
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%',
                cs: '南京市',
                sf: '江苏省'
                }, {               
                name: '0.00 元/㎡·天',
                date: {
                    date01: require('../assets/3 (1).png'),
                    date02: 'aaa',
                    date03: '市辖区'
                },
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%',
                cs: '南京市',
                sf: '江苏省'
                }, {
                name: '0.00 元/㎡·天',
                date: {
                    date01: require('../assets/3 (1).png'),
                    date02: 'aaa',
                    date03: '市辖区'
                },
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%',
                cs: '南京市',
                sf: '江苏省'
                }, {             
                name: '0.00 元/㎡·天',
                date: {
                    date01: require('../assets/3 (1).png'),
                    date02: 'aaa',
                    date03: '市辖区'
                },
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%',
                cs: '南京市',
                sf: '江苏省'
                }, {               
                name: '0.00 元/㎡·天',
                date: {
                    date01: require('../assets/3 (1).png'),
                    date02: 'aaa',
                    date03: '市辖区'
                },
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%',
                cs: '南京市',
                sf: '江苏省'
                }, {              
                name: '0.00 元/㎡·天',
                date: {
                    date01: require('../assets/3 (1).png'),
                    date02: 'aaa',
                    date03: '市辖区'
                },
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%',
                cs: '南京市',
                sf: '江苏省'
                }, {               
                name: '0.00 元/㎡·天',
                date: {
                    date01: require('../assets/3 (1).png'),
                    date02: 'aaa',
                    date03: '市辖区'
                },
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%',
                cs: '南京市',
                sf: '江苏省'
                }
            ]  
        }
    },
    methods:{
        skip(){
            this.$router.push("/lydetails");
        }
    }
}
</script>

<style>
.Box-top{
    background-color: #fff;
}
.demo-input-suffix{
    border-bottom: 1px solid #edf0f2;
    overflow: hidden;
}
.ly-input{
    width: calc(100% - 490px);
    float: left;
}
.ly-input input{
    border: 0;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    padding-left: 64px !important;   
}
.ly-input span i{
    width: 92px;
    font-size: 16px;
    color: #6f7e95;
}
.ly-button{
    float: right;
    font-size: 14px;
    text-align: center;
    color: #585858;
    border-radius: 4px;
    border: .6px solid rgba(130,134,146,.6);
    margin-top: 10px;
    margin-right: 20px;
    padding: 0 15px;
    height: 28px;
}
.ly-content{
    display: inline-block;
    position: relative;
}
.Box-top .sjpz{
    position: absolute;
    right: 14px;
    top: 22px;
}
.Box-bottom{
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
}
.Box-bottom .table-header{
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
.Box-bottom .table-header i{
    font-size: 16px;
}
.Box-bottom .el-table thead tr th{
    font-size: 12px;
    color: #7085a1;
    font-weight: normal; 
    border-bottom: 1px solid #e0e0e0;
    padding: 0;
}
.Box-bottom .el-table thead tr th .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.Box-bottom .el-table tbody tr{
    padding: 10px 0;
    background: #fff;
    color: #6b809f;
    font-size: 14px;
    height: 65px;
}
.Box-bottom .el-table tbody tr td{
    padding: 14px 0;
    border-bottom: 1px solid #e0e0e0;
}
.Box-bottom .el-table tbody tr td .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.lymc-left{
    float: left;
    width: 53px;
    height: 36px;
    background-size: 100% 100%;
}
.lymc-left img{
    width: 100%;
    height: 36px;
    margin: 0px;
    border: 0;
}
.lymc-right{
    width: calc(100% - 64px);
    float: left;
    margin-left: 10px;
    font-size: 14px;
    color: #353b4b;
    text-align: left;
}
.lymc-rigth01{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #353b4b;
    font-weight: 500;
    height: 21px;
    line-height: 21px;
}
.lymc-rigth02{
    font-size: 12px;
    color: #9fa1a8;
    height: 18px;
    line-height: 18px;
}
.Box-bottom .el-table__row{
    cursor: pointer;
}
</style>
