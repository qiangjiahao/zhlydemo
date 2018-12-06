<template>
    <el-form :model="form">               
        <div class="dia04-top">
            <div class="dia04-top-div" @click="addsrmb"><i class="el-icon-plus"></i>收入目标</div>
        </div>
        <div class="dia04-botton">
            <div class="form-top" style="margin-top:6px;position:relative;" v-for="(item,i) in srmbs" :key="i">
                <i class="el-icon-close" @click="move(item)"></i>
                <div class="form-public form-13">
                    <el-form-item label="收入目标">
                        <el-input v-model="form.srmb" placeholder="请输入收入目标"></el-input>
                        <el-input v-model="form.wy" placeholder="万元" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="预算时间">
                        <el-select v-model="form.yssj">
                            <el-option label="2018" value="yssj01"></el-option>
                            <el-option label="2017" value="yssj02"></el-option>
                        </el-select>
                    </el-form-item>      
                </div>
            </div>
        </div>
    </el-form>
</template>

<script>
export default {
    name: 'Dialog04',
    data(){
        return{
            form:{
                srmb: '',
                wy: '',
                yssj: 'yssj01'
            },
            srmbs:[

            ],
        }
    },
    methods:{
        addsrmb(){
            this.srmbs.push({
                key: Date.now()
            })
        },
        move(item){
            var index = this.srmbs.indexOf(item);
            if(index !== -1){
                this.srmbs.splice(index,1);
            }
        }
    }
}
</script>
<style>
/* Dialog04 */
.dia04-top{
    overflow: hidden;
    margin-bottom: 10px;
}
.dia04-top .dia04-top-div{
    float: right;
    margin-top: 10px;
    padding: 1px 8px;
    border: 1px solid #828692;
    border-radius: 2px;
    color: #828692;
    font-size: 12px;
    opacity: .6;
    cursor: pointer;
}
.dia04-botton {
    height: 900px;
    overflow: auto;
}
.form-13 .el-form-item{
    width: calc(50% - 10px);
}
.form-13 .el-form-item:nth-of-type(1) .el-input{
    width: calc(50% - 10px);
}
.form-13 .el-form-item:nth-of-type(1) .el-input:first-child{
    float: left;
}
.form-13 .el-form-item:nth-of-type(1) .el-input:last-child{
    float: right;
}
.dia04-botton .el-icon-close{
    position: absolute;
    right: 20px;
    font-size: 16px;
    top: 14px;
    z-index:999;
    font-weight: bold;
    cursor: pointer;
}
</style>




