<template>
    <div class="lydetails01">
        <ul class="lydetails01-ul">
            <li v-for="(item,index) in map" :key="index" :class="{maps:index===nowindex}" @click="dj(index)">
                {{item.txt}}
            </li>
        </ul>
        <div class="lydetails01-tabs">
            <div class="tabs-top">
                <div class="tabs-top01">
                    <div class="search">
                        <el-input
                            placeholder="请输入内容"
                            suffix-icon="el-icon-search"
                            v-model="input21">
                        </el-input>
                    </div>
                    <ul class="xz">
                        <li>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    面积筛选<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="li01">
                                   <div class="li01-div"><el-input v-model="input01" placeholder="最小(m²)"></el-input>&nbsp;-&nbsp;<el-input v-model="input02" placeholder="最大(m²)"></el-input></div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    审核状态<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="li02">
                                   <el-checkbox-group v-model="checkList">
                                        <div class="li02-div"><el-checkbox label="新建待审核"></el-checkbox></div>
                                        <div class="li02-div"><el-checkbox label="作废待审核 "></el-checkbox></div>
                                        <div class="li02-div"><el-checkbox label="退租待审核"></el-checkbox></div>
                                        <div class="li02-div"><el-checkbox label="新建待修改"></el-checkbox></div>
                                        <div class="li02-div"><el-checkbox label="作废待修改"></el-checkbox></div>
                                        <div class="li02-div"><el-checkbox label="退租待修改 "></el-checkbox></div>
                                    </el-checkbox-group>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    合同期限<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="li03">
                                   <div class="li03-div">
                                        <el-date-picker
                                        v-model="value6"
                                        type="daterange"
                                        range-separator="-"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        size="mini">
                                        </el-date-picker>
                                    </div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    行业筛选<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="li02">
                                   <div class="li02-div"><el-checkbox v-model="checked">未分类 (2)</el-checkbox></div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    招商选项<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="li02">
                                   <el-radio-group v-model="radio1">
                                        <div class="li02-div"><el-radio :label="3">可招商 (2)</el-radio></div>
                                        <div class="li02-div"><el-radio :label="6">不可招商 (0)</el-radio></div>
                                    </el-radio-group>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    空置选项<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="li02">
                                   <el-radio-group v-model="radio2">
                                        <div class="li02-div"><el-radio :label="3">在租房源 (0)</el-radio></div>
                                        <div class="li02-div"><el-radio :label="6">空置房源 (2)</el-radio></div>
                                    </el-radio-group>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                    </ul>
                </div>
                <div class="tabs-top02">

                </div>
            </div>
            <div class="tabs-bottom"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'lydetails01',
    data(){
        return{
            nowindex: 0,
            map:[
                {
                    txt: '合同剖面图'
                },
                {
                    txt: '招商剖面图' 
                }
            ],
            input21: '',
            input01: '',
            input02: '',
            checkList: [],
            value6: '',
            checked: false,
            radio1: '',
            radio2: ''
        }
    },
    methods:{
        dj(index){
            this.nowindex=index;
        }
    }
    
}
</script>
<style>
.lydetails01 .lydetails01-ul{
    padding: 0 20px;
    height: 40px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #edf0f2;
    position: relative;
    z-index: 999;
}    
.lydetails01 .lydetails01-ul li{
    float: left;
    padding: 0 10px;
    border-bottom: 2px solid #fff;
    cursor: pointer;
    font-size: 12px;
    line-height: 38px;
}
.lydetails01 .lydetails01-ul li:hover{
    border-bottom: 2px solid #108ee9;
    color: #108ee9;
}
.lydetails01 .lydetails01-ul .maps{
    border-bottom: 2px solid #108ee9;
    color: #108ee9;
}
.lydetails01 .lydetails01-tabs{
    padding-top: 20px;
    width: 100%;
    background: rgb(244, 244, 244);
}
.lydetails01 .lydetails01-tabs .tabs-top{
    background-color: #fff;
}
.lydetails01 .lydetails01-tabs .tabs-top .tabs-top01{
    width: 100%;
    overflow: hidden;
    padding: 0 45px;
    box-sizing: border-box;
}
.lydetails01 .lydetails01-tabs .tabs-top .tabs-top01 .search{
    width: 240px;
    margin-right: 20px;
    float: left;
    line-height: 50px;
}
.lydetails01 .lydetails01-tabs .tabs-top .tabs-top01 .search .el-input .el-input__inner{
    height: 28px;
    line-height: 1.5;
    font-size: 12px; 
    color: rgba(0,0,0,.65);
    border: 1px solid #d9d9d9;
}
.lydetails01 .lydetails01-tabs .tabs-top .tabs-top01 .search .el-input i{
    line-height: 28px;
}
.lydetails01 .lydetails01-tabs .tabs-top .tabs-top01 .xz{
    float: left;
    overflow: hidden;
}
.lydetails01 .lydetails01-tabs .tabs-top .tabs-top01 .xz li{
    float: left;
    margin-right: 40px;
    height: 50px;
    color: #353b4b;
    font-size: 14px;
    line-height: 50px;
    cursor: pointer;
}
.li01{
    padding: 20px;
}
.li01 .el-input{
    width: auto;
}
.li01 .el-input__inner{
    width: 80px;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
    font-size: 12px;
    height: 28px;
    padding: 0 7px;
} 
.li02{
    padding: 0;
}
.li02 .li02-div{
    padding: 10px 20px;
    height: 40px;
    border-bottom: 1px solid #e4e6e9;
}
.li02 .li02-div .el-checkbox__label{
    font-size: 12px;
}
.li03{
    padding: 20px;
}
.li03 .li03-div .el-input__inner{
    width: 250px;
}


.lydetails01 .lydetails01-tabs .tabs-top .tabs-top02{
    background-color: #fff;
}
</style>


