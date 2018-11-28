<template>
    <el-form :model="form" :rules="rules2" ref="form">
        <div class="form-top">
            <div class="form-public form-06">
                <el-form-item label="添加楼层数量">
                    <el-select v-model="form.luoceng">
                    <el-option label="单层" value="danceng"></el-option>
                    <el-option label="多层" value="duoceng"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item
                    label="楼层名称"
                    prop="lcname">
                    <el-input v-model="form.lcname"></el-input>
                </el-form-item>
                <el-form-item label="楼层面积/m²">
                    <el-input v-model="form.lcmj" disabled="disabled"></el-input>
                </el-form-item>
            </div>
            <div class="tjly"><button @click="addlcs('form')"><i class="el-icon-plus"></i>添加楼层</button></div>
        </div>
        <div class="form-bottom">
            <ul class="bottom-ul">
                <li>楼层</li>
                <li>面积</li>
                <li>房源数量</li>
            </ul>
            <div style="height: 390px;overflow: auto;margin-top: 4px;">
                <div class="form-public form-07" v-for="(item,i) in lcs" :key="i">
                    <el-form-item>
                        <el-input v-model="form.name01"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.name02" disabled></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.name03" disabled placeholder="0"></el-input>
                    </el-form-item>
                    <el-button class="button-07" @click="move(item)"><i class="el-icon-delete"></i></el-button>
                </div>
            </div>        
        </div>
    </el-form>
</template>

<script>
export default {
    name: 'Dialog02',
    data(){
        var lcevent = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            }else {
                callback();
            }
        };
        return{
            form:{
                region: '',
                name01: '',
                name02: '',
                name03: '',
                lcname: '',
                lcmj: '',
                nianyue: '年月',
                luoceng: '单层',
            },
            lcs:[],
            rules2: {              
                lcname: [
                    { validator: lcevent, trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        addlcs(refName){
            this.form.name01=this.form.lcname;
            this.$refs[refName].validate((valid) => {
                if (valid) {
                    this.lcs.push({});
                } else {
                    return false;
                }
                
            });
        },
        move(item){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                var index = this.lcs.indexOf(item);
                if(index !==-1){
                    this.lcs.splice(index,1);
                }
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        }
    }
}
</script>


