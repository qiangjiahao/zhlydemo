<template>
    <div>
        <el-form :model="form">               
            <div class="form-top">
                <div class="form-public form-01">
                    <el-form-item label="楼宇类型">
                        <el-select v-model="form.region" placeholder="请选择楼宇类型">
                        <el-option :label="itemType.name" :value="itemType.id" v-for="(itemType, index) in itemAgg" :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="form-public form-02">
                    <el-form-item label="省份">
                        <el-select v-model="form.shengfen"  clearable placeholder="选择省份" >
                        <el-option :label="item.name" :value="item.adcode" v-for="(item, index) in province" :key="index" @click.native="provinceAd(item.adcode)">
                            <span style="float: left">{{ item.name }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.pinyin }}</span>
                        </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="城市">
                        <el-select v-model="form.chengshi"  clearable placeholder="选择城市">
                        <el-option :label="cityItem.name" :value="cityItem.name" v-for="(cityItem, index) in city" :key="index" @click.native="cityAd(cityItem.adcode)"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="区域">
                        <el-select v-model="form.quyu"  clearable placeholder="选择区域">
                        <el-option :label="areaItem.name" :value="areaItem.name" v-for="(areaItem, index) in area" :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="form-public form-03">
                    <el-form-item label="楼宇名称">
                        <el-input v-model="form.lymc" placeholder="请输入楼宇名称"></el-input>
                    </el-form-item>
                    <el-form-item label="具体位置">
                        <el-input v-model="form.jtwz" placeholder="请输入具体位置"></el-input>
                    </el-form-item>
                </div>
                <div class="form-public form-03">
                    <el-form-item label="招商联系电话">
                        <el-input v-model="form.zslxdh" placeholder="请输入招商联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="所有人权">
                        <el-input v-model="form.syrq" placeholder="请填写所有权人"></el-input>
                    </el-form-item>
                </div>
                <div class="form-public form-03">
                    <el-form-item label="楼宇建筑面积">
                        <el-input v-model="form.lyjzmj" placeholder="请填写楼宇建筑面积"></el-input>
                        <span class="form-03-span">m²</span>
                    </el-form-item>
                    <el-form-item label="用途">
                        <el-input v-model="form.yt" placeholder="请填写用途"></el-input>
                    </el-form-item>
                </div>
                <div class="form-public form-03">
                    <el-form-item label="占地面积">
                        <el-input v-model="form.zdmj" placeholder="请填写占地面积"></el-input>
                        <span class="form-03-span">m²</span>
                    </el-form-item>
                    <el-form-item label="建成时间" prop="value">
                        <el-date-picker
                        v-model="form.value"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </div>
                <div class="form-public form-03">
                    <el-form-item label="管理面积">
                        <el-input v-model="form.glmj" placeholder="请输入管理面积" disabled></el-input>
                        <span class="form-03-span">m²</span>
                    </el-form-item>
                    <el-form-item label="账单提前提醒天数">
                        <el-input v-model="form.zdtq" placeholder="请输入账单提前提醒天数"></el-input>
                        <span class="form-03-span">天</span>
                    </el-form-item>
                </div>
                <div class="form-public form-04">
                    <el-form-item label="合同编号">
                        <el-input v-model="form.htph" placeholder="请填写合同编号标识"></el-input>
                    </el-form-item>
                    <el-form-item label="年月" class="form-04-item">
                        <el-select v-model="form.nianyue">
                        <el-option label="年" value="nian"></el-option>
                        <el-option label="年月" value="nianyue"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="htbh">
                            返还作废合同的合同编号
                            <el-tooltip content="当勾选此项后，再新建合同的编号则优先填充因作废合同空缺的编号" placement="top">
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </el-checkbox>
                        <el-input v-model="form.xl" placeholder="序号"></el-input>
                    </el-form-item>
                </div>
                <div class="form-public form-05">
                    <el-form-item label="合同编号">
                        <el-upload
                            class="avatar-uploader"
                            action=""
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                    </el-form-item>
                </div>
            </div>
            <div class="hide-bottom">
                <span class="hide-bottom-span" @click="msgShow">更多信息</span>  
                <transition name="el-fade-in-linear">
                    <div v-show="show" class="transition-box">
                        <div class="form-public form-03">
                            <el-form-item label="项目名称">
                                <el-input v-model="form.xmmc" placeholder="请输入项目名称"></el-input>
                            </el-form-item>
                            <el-form-item label="注册地址">
                                <el-input v-model="form.zcdz" placeholder="请输入注册地址"></el-input>
                            </el-form-item>
                        </div>
                        <div class="form-public form-03">
                            <el-form-item label="收款人">
                                <el-input v-model="form.skr" placeholder="请输入收款人"></el-input>
                            </el-form-item>
                            <el-form-item label="收款公司">
                                <el-input v-model="form.skgs" placeholder="请输入收款公司"></el-input>
                            </el-form-item>
                        </div>
                        <div class="form-public form-03">
                            <el-form-item label="开户行">
                                <el-input v-model="form.khh" placeholder="请输入开户行"></el-input>
                            </el-form-item>
                            <el-form-item label="开户行账号">
                                <el-input v-model="form.khxmc" placeholder="请输入开户行账号"></el-input>
                            </el-form-item>
                        </div>
                        <div class="form-public form-03">
                            <el-form-item label="通知地址">
                                <el-input v-model="form.tzdz" placeholder="请输入通知地址"></el-input>
                            </el-form-item>
                        </div>                   
                    </div>
                </transition> 
            </div>    
        </el-form>
        <div class="xyb">
            <el-button type="primary" @click="fs">保存&下一步</el-button>
        </div>       
    </div>
</template>

<script>
import {province} from '@/axios/api' //获取省份
import {city} from '@/axios/api' // 获取市
import {area} from '@/axios/api' // 获取区县
import { creatLy } from '@/axios/api'  //创建楼宇
import { itemAgg } from '@/axios/api' //获取楼宇类型
export default {
    name: 'Dialog01',
    data(){
        return{
            form:{
                region: '',
                name: '',
                lymc: '',
                jtwz: '',
                zslxdh: '',
                lyjzmj: '',
                yt: '',
                zdmj: '',
                glmj: '',
                zdtq: '',
                htph: '',
                xl: '',
                xmmc: '',
                zcdz: '',
                skr: '',
                skgs: '',
                khh: '',
                khxmc: '',
                tzdz: '',
                nianyue: '年月'
            },
            htbh: false,
            imageUrl: '',
            show: false,
            value: '',
            province:[],
            city: [],
            area: [],
            itemAgg:[],
            selectIndex: 1
        }
    },
    mounted () {
        let that = this;
        // 获取省
        province({                                             
        }).then(res => {
            if(res.flag == 0){  
                that.province=res.data;
            } 
        }) 
        // 获取楼宇类型
        itemAgg({                                                
        }).then(res => {
            if(res.flag == 0){
                that.itemAgg=res.data;
            } 
        })
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
        },
        msgShow(){
          this.show= !this.show;
        },
        provinceAd(adcode){
              city({                    
                 adcode:adcode                            
            }).then(res => {
                if(res.flag == 0){  
                    this.city = res.data
                } 
            }) 
        },
        cityAd(adcode){
            area({                    
                 adcode:adcode                            
            }).then(res => {
                if(res.flag == 0){  
                    this.area = res.data
                } 
            })  
        },
        fs(){
            this.$emit("fsval",this.selectIndex);
        }
    }
}
</script>


