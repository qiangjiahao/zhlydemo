<template>
    <ul class="ly-msg">
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>楼宇数量</span>                                      
                    </div>
                    <div class="li-bottom">10</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>管理数量</span> 
                        <span>m²</span>
                        <el-tooltip placement="top">
                            <div slot="content">系统当前录入的所有面积总和，若楼宇中同时存在面积和工位则无法统计。</div>
                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        </el-tooltip>                                     
                    </div>
                    <div class="li-bottom">169,884.26</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>在租数量</span> 
                        <span>29.13%</span>
                        <el-tooltip placement="top">
                            <div slot="content">当前在租面积总和，若楼宇中同时存在面积和工位则无法统计。</div>
                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        </el-tooltip>                                     
                    </div>
                    <div class="li-bottom">6,080.00</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>在租实时均价</span> 
                        <el-tooltip placement="top">
                            <div slot="content">对所有在租租赁条款的单价与面积进行加权平均计算，并按设定的单位展示，若楼宇中同时存在按面积计算和按工位计算、则无法统计。</div>
                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        </el-tooltip>                                     
                    </div>
                    <div class="li-bottom">-</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>在租合同份数</span>                                      
                    </div>
                    <div class="li-bottom">80</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>可招商数量</span> 
                        <span>70.67%</span>
                        <el-tooltip placement="top">
                            <div slot="content">当前可招商的面积总和，若楼宇中同时存在面积和工位则无法统计。</div>
                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        </el-tooltip>                                     
                    </div>
                    <div class="li-bottom">120,052.55</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>预计完成率</span> 
                        <span><i class="fa fa-long-arrow-down" aria-hidden="true" style="color: rgb(247, 115, 115);"></i></span>
                        <el-tooltip placement="top">
                            <div slot="content">预计完成率=全年收入/收入目标的 百分比</div>
                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        </el-tooltip>                                     
                    </div>
                    <div class="li-bottom" style="color: rgb(247, 115, 115);">219.32%</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>              
    </ul>
</template>
<script>
export default {
    name: 'lyMsg'
}
</script>
<style scoped>
.ly-msg{
    display: inline-block;
    background-color: #fff;
    padding: 20px 20px 0;
    overflow: hidden;
}
.ly-msg li{
    float: left;
    min-width: 105px;
}
.ly-msg li .li-top{
    height: 25px;
    line-height: 25px;
    color: #828692;
    font-size: 12px;
}
.ly-msg li .li-top span:nth-child(1){
    float: left;
}
.ly-msg li .li-top span:nth-child(2){
    float: right;
    padding-left: 7px;
}
.ly-msg li .li-top i{
    margin-left: 6px;
    color: #4494f0;
    font-size: 16px;
}
.ly-msg li .li-bottom{
    display: inline-block;
    height: 56px;
    line-height: 48px;
    font-size: 24px;
    color: #353b4b;
}
.ly-msg li .li-left{
    color: #353b4b;
    display: inline-block;
    margin-left: 10px;
    padding-right: 14px;
    font-size: 14px;
}
.ly-msg li .li-right{
    width: 2px;
    height: 35px;
    background-color: #edeef0;
    display: inline-block;
    margin-top: 16px;
}
.ly-msg li:last-child .li-right{
    background-color: #fff;
}
</style>


