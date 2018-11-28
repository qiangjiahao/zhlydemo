<template>
    <ul class="fy-ul"> 
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>可招商房源个数</span>       
                    </div>
                    <div class="li-bottom">713</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li> 
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>已租房源个数</span>      
                    </div>
                    <div class="li-bottom">204</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>所有房源个数</span>      
                    </div>
                    <div class="li-bottom">913</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>可招商数量</span> 
                        <span>m²</span>
                        <el-tooltip placement="top">
                            <div slot="content">当前可招商的面积总和，若楼宇中同时存在面积和工位则无法统计。</div>
                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        </el-tooltip>      
                    </div>
                    <div class="li-bottom">119952.55</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li> 
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>已租数量</span> 
                        <span>m²</span>
                        <el-tooltip placement="top">
                            <div slot="content">当前在租面积总和，若楼宇中同时存在面积和工位则无法统计。</div>
                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        </el-tooltip>       
                    </div>
                    <div class="li-bottom">49904.9</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>
        <li>
            <div class="li-left">
                <div style="padding-right: 14px;">
                    <div class="li-top">
                        <span>所有数量</span> 
                        <span>m²</span>
                        <el-tooltip placement="top">
                            <div slot="content">系统当前录入的所有面积总和，若楼宇中同时存在面积和工位则无法统计。</div>
                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        </el-tooltip>      
                    </div>
                    <div class="li-bottom">169884.26</div>
                </div>
            </div>
            <div class="li-right"></div>
        </li>            
    </ul>
</template>
<script>
export default {
    name: 'fyMsg'
}
</script>
<style scoped>
.fy-ul{
    background-color: #fff;
    padding: 20px 20px 0;
    overflow: hidden;
}
.fy-ul li{
    float: left;
    min-width: 105px;
}
.fy-ul li .li-top{
    height: 25px;
    line-height: 25px;
    color: #828692;
    font-size: 12px;
}
.fy-ul li .li-top span:nth-child(1){
    float: left;
}
.fy-ul li .li-top span:nth-child(2){
    float: right;
    padding-left: 7px;
}
.fy-ul li .li-top i{
    margin-left: 6px;
    color: #4494f0;
    font-size: 16px;
}
.fy-ul li .li-bottom{
    display: inline-block;
    height: 56px;
    line-height: 48px;
    font-size: 24px;
    color: #353b4b;
}
.fy-ul li .li-left{
    color: #353b4b;
    display: inline-block;
    margin-left: 10px;
    padding-right: 14px;
    font-size: 14px;
}
.fy-ul li .li-right{
    width: 2px;
    height: 35px;
    background-color: #edeef0;
    display: inline-block;
    margin-top: 16px;
}
.fy-ul li:last-child .li-right{
    background-color: #fff;
}
</style>


