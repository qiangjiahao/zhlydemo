<template>
    <div>
        <el-form :model="form"> 
            <div class="dia03-txt">合同信息</div>              
            <div class="form-top">           
                <div class="form-public form-08">
                    <el-form-item label="默认押金单位" class="form-08-item">
                        <el-select v-model="form.mryjdw">
                        <el-option label="月" value="yue"></el-option>
                        <el-option label="元" value="yuan"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="form-08-div">
                        <el-form-item label="默认租赁单位数量">
                            <el-select v-model="form.mrzldwsl">
                            <el-option label="m²" value="pfm"></el-option>
                            <el-option label="工位" value="gw"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="默认基础单价单位">
                            <el-select v-model="form.mrjcdjdw">
                            <el-option label="元/m²·天" value="yuantian"></el-option>
                            <el-option label="元/m²·月" value="yuanyue"></el-option>
                            <el-option label="元/天" value="yt"></el-option>
                            <el-option label="元/月" value="yy"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>             
                </div>
                <div class="form-public form-09">
                    <el-form-item label="默认计算精度">
                        <el-select v-model="form.mrjsjd">
                            <el-option label="精确计算结果保留两位小数" value="mrjsjd01"></el-option>
                            <el-option label="每步计算保留两位小数" value="mrjsjd02"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="默认支付类型(几月一付)">
                        <el-input v-model="form.lyjzmj" placeholder="请填写默认支付类型"></el-input>
                        <span class="form-03-span">月</span>
                    </el-form-item>      
                </div>
                <div class="form-public form-10">
                    <el-form-item class="form-10-item">       
                        <div class="form-10-item-div">
                            默认计费类型
                            <el-tooltip placement="top">
                                <div slot="content">1、天单价=实际输入天单价 或者 月单价*12/年天数<br/>2、月单价=实际输入月单价 或者 天单价*年天数/12<br/>3、总价=（月单价*月数*面积）+（天单价*实际天数*面积）<br/>4、以天记租时没有月数，即套用公式3计算，其中月数为0计算<br/>5、以月记租时，整月按公式3第一项计算，余下的天数按照公式3的第二项计算<br/></div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.jf">
                            <el-option label="按实际天数计算" value="atjs"></el-option>
                            <el-option label="按月计费" value="ayjs"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="form-10-div">
                        <el-form-item label="默认提前付款时间">
                            <el-input v-model="form.lyjzmj" placeholder="请输入提前付款时间"></el-input>
                        </el-form-item>
                        <el-form-item label="日期">
                            <el-select v-model="form.rq">
                            <el-option label="工作日" value="gzr"></el-option>
                            <el-option label="自然日" value="zrr"></el-option>
                            <el-option label="指定日期" value="zdrq"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>   
                </div>
                <div class="form-public form-09">
                    <el-form-item label="默认年天数">
                        <el-input v-model="form.mrnts"></el-input>
                        <span class="form-03-span">天</span>
                    </el-form-item>
                    <el-form-item label="单价保留小数点">
                        <el-input v-model="form.xsd"></el-input>
                        <span class="form-03-span">位</span>
                    </el-form-item>      
                </div>
                <div class="form-public form-11">
                    <el-form-item>       
                        <div class="form-11-div">
                            租期划分方式
                            <el-tooltip placement="top">
                                <div slot="content">按起始日划分<br/>次月按自然月划分(仅一月一付有效)<br/>按自然月划分(首月非整自然月划入第一期)<br/>按自然月划分(首月非整自然月算一个月)<br/></div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.zqhffs">
                            <el-option label="按起始日划分" value="aqsrhf"></el-option>
                            <el-option label="次月按自然月划分(仅一月一付有效)" value="ciyue"></el-option>
                            <el-option label="按自然月划分(首月非整自然月划入第一期)" value="diyiqi"></el-option>
                            <el-option label="按自然月划分(首月非整自然月算一个月)" value="yigeyue"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>       
                        <div class="form-11-div">
                            天单价换算规则
                            <el-tooltip placement="top">
                                <div slot="content">按年换算，按自然月换算</div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.hsgz">
                            <el-option label="按年换算" value="anhs"></el-option>
                            <el-option label="按自然月换算" value="azryhs"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </div>   
            <div class="dia03-txt">物业信息</div>              
            <div class="form-top">
                <div class="form-public form-09">
                    <el-form-item label="物业类型">
                        <el-select v-model="form.wylx">
                            <el-option label="写字楼" value="xzl"></el-option>
                            <el-option label="住宅" value="zz"></el-option>
                            <el-option label="商用" value="sy"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="物业默认支付类型">
                        <el-input v-model="form.wyzflx" placeholder="请输入默认支付类型"></el-input>
                        <span class="form-03-span">月</span>
                    </el-form-item>      
                </div>
                <div class="form-public form-12">
                    <el-form-item label="默认物业费">
                        <el-input class="form-12-input" v-model="form.mrwyf" placeholder="请输入默认物业费"></el-input>
                        <el-select v-model="form.wyytf">
                            <el-option label="元/㎡·月" value="wyyy"></el-option>
                            <el-option label="元/㎡·天" value="wyyt"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="物业费提前付款时间">
                        <el-input class="form-12-input" v-model="form.wyfkrq" placeholder="请输入物业费提前付款时间"></el-input>
                        <el-select v-model="form.wyrq">
                            <el-option label="工作日" value="gzr"></el-option>
                            <el-option label="自然日" value="zrr"></el-option>
                            <el-option label="指定日期" value="zdrq"></el-option>
                        </el-select>
                    </el-form-item>      
                </div>
                <div class="form-public form-09">
                    <el-form-item label="物业费默认押金单位">
                        <el-select v-model="form.wyyjdw">
                            <el-option label="元" value="wyyuan"></el-option>
                            <el-option label="月" value="wyyue"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="默认计算精度">
                        <el-select v-model="form.mrjsjd">
                            <el-option label="精确计算结果保留两位小数" value="mrjsjd01"></el-option>
                            <el-option label="每步计算保留两位小数" value="mrjsjd02"></el-option>
                        </el-select>
                    </el-form-item>      
                </div>
                <div class="form-public form-09">
                    <el-form-item label="单价保留小数点">
                        <el-input v-model="form.djblxsd"></el-input>
                        <span class="form-03-span">位</span>
                    </el-form-item>
                    <el-form-item label="默认物业费计费类型">
                        <el-select v-model="form.mrwyfjflx">
                            <el-option label="按实际按天数计费" value="mrwyfjflx01"></el-option>
                            <el-option label="按月计费" value="mrwyfjflx02"></el-option>
                        </el-select>
                    </el-form-item>      
                </div>
                <div class="form-public form-09">
                    <el-form-item label="默认年天数">
                        <el-input v-model="form.mrnts"></el-input>
                        <span class="form-03-span">天</span>
                    </el-form-item>  
                    <el-form-item></el-form-item> 
                </div>
                <div class="form-public form-11">
                    <el-form-item>       
                        <div class="form-11-div">
                            租期划分方式
                            <el-tooltip placement="top">
                                <div slot="content">按起始日划分<br/>次月按自然月划分(仅一月一付有效)<br/>按自然月划分(首月非整自然月划入第一期)<br/>按自然月划分(首月非整自然月算一个月)<br/></div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.zqhffs">
                            <el-option label="按起始日划分" value="aqsrhf"></el-option>
                            <el-option label="次月按自然月划分(仅一月一付有效)" value="ciyue"></el-option>
                            <el-option label="按自然月划分(首月非整自然月划入第一期)" value="diyiqi"></el-option>
                            <el-option label="按自然月划分(首月非整自然月算一个月)" value="yigeyue"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>       
                        <div class="form-11-div">
                            天单价换算规则
                            <el-tooltip placement="top">
                                <div slot="content">按年换算，按自然月换算</div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.hsgz">
                            <el-option label="按年换算" value="anhs"></el-option>
                            <el-option label="按自然月换算" value="azryhs"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </div>
            <div class="dia03-button">
                <div class="dia03-button-content" v-for="(item,i) in shuilvs" :key="i">            
                    <div class="dia03-txt">税率信息</div>
                    <i class="el-icon-close" @click="hide(item)"></i>
                    <div class="form-top">
                        <div class="form-public form-09">
                            <el-form-item label="费用类型">
                                <el-select v-model="form.fylx">
                                    <el-option label="租金" value="fylx01"></el-option>
                                    <el-option label="物业费" value="fylx02"></el-option>
                                    <el-option label="公共能耗费" value="fylx03"></el-option>
                                    <el-option label="电费" value="fylx04"></el-option>
                                    <el-option label="水费" value="fylx05"></el-option>
                                    <el-option label="停车费" value="fylx06"></el-option>
                                    <el-option label="广告位费" value="fylx07"></el-option>
                                    <el-option label="装修押金" value="fylx08"></el-option>
                                    <el-option label="空调费" value="fylx09"></el-option>
                                    <el-option label="卫生费" value="fylx10"></el-option>
                                    <el-option label="物业退租结算费" value="fylx11"></el-option>
                                    <el-option label="租金退租结算费" value="fylx12"></el-option>
                                    <el-option label="租金其他杂项" value="fylx13"></el-option>
                                    <el-option label="其他" value="fylx14"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="货物名称">
                                <el-input v-model="form.wyzflx" placeholder="请输入货物名称"></el-input>
                            </el-form-item>      
                        </div>
                        <div class="form-public form-09">
                            <el-form-item label="商品编码">
                                <el-input v-model="form.spbm" placeholder="请输入商品编码"></el-input>
                            </el-form-item>
                            <el-form-item label="税率">
                                <el-input v-model="form.sl" placeholder="请输入税率"></el-input>
                            </el-form-item>      
                        </div>
                        <div class="form-public form-09">
                            <el-form-item label="优惠政策标识">
                                <el-select v-model="form.yhzcbs">
                                    <el-option label="是" value="yhzcbs01"></el-option>
                                    <el-option label="否" value="yhzcbs02"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="优惠政策名称">
                                <el-input v-model="form.wyzflx" placeholder="请输入优惠政策名称"></el-input>
                            </el-form-item>      
                        </div>
                    </div>
                </div>
                <el-button @click="addsls"><i class="el-icon-plus"></i>税率信息 |</el-button>
            </div>      
            <div class="dia03-txt">默认入账方式</div>
            <div class="form-top form-radio">
                <el-radio v-model="radio01" label="1" >权责发生制（默认）</el-radio>
                <el-radio v-model="radio01" label="2">收付实现制</el-radio>
            </div> 
            <div class="dia03-txt">摊销方式</div>
            <div class="form-top form-radio">
                <el-radio v-model="radio02" label="1" >按租金条款（默认）</el-radio>
                <el-radio v-model="radio02" label="2">按合同总价分摊</el-radio>
                <el-radio v-model="radio02" label="3">按租金条款起始日分摊</el-radio>
            </div> 
        </el-form>
        <div class="xyb">
            <el-button  type="primary" @click="fs">保存&下一步03</el-button>
        </div>     
    </div>  
</template>

<script>
export default {
    name: 'Dialog03',
    data(){
        return{
            form:{
                mryjdw: 'yue',
                mrzldwsl: 'pfm',
                mrjcdjdw: 'yuantian',
                mrjsjd: 'mrjsjd01',
                jf: '',
                rq: 'zrr',
                jf: 'atjs',
                mrnts: '365',
                xsd: '2',
                zqhffs: 'aqsrhf',
                hsgz: 'anhs',
                wylx: 'xzl',
                wyytf: 'wyyt',
                wyrq: 'zdrq',
                wyyjdw: 'wyyuan',                
                djblxsd: '2',
                mrwyfjflx: 'mrwyfjflx02'
            },
            shuilvs:[
                
            ],
            radio01: '1',
            radio02: '1',
            selectIndex: 3
        }
    },
    methods: {
       addsls(){
           this.shuilvs.push({
               key: Date.now()
           });
       },
       hide(item){
           var index = this.shuilvs.indexOf(item);
           if(index !== -1){
                this.shuilvs.splice(index,1);
           }        
       },
       fs(){
            this.$emit("fsval",this.selectIndex);
        }
    }
}
</script>


