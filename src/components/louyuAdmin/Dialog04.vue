<template>
<div>
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
    <div class="xyb">
        <el-button  type="primary" @click="fs">保存04</el-button>
    </div>    
</div>
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
            selectIndex: 4
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
        },
        fs(){
            this.$emit("fsval",this.selectIndex);
        }
    }
}
</script>



