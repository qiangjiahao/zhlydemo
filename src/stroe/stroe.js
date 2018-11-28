/** 
* 
*----------Dragon be here!----------/ 
* 　　　┏┓　　　┏┓ 
* 　　┏┛┻━━━┛┻┓ 
* 　　┃　　　　　　　┃ 
* 　　┃　　　━　　　┃ 
* 　　┃　┳┛　┗┳　┃ 
* 　　┃　　　　　　　┃ 
* 　　┃　　　┻　　　┃ 
* 　　┃　　　　　　　┃ 
* 　　┗━┓　　　┏━┛ 
* 　　　　┃　　　┃神兽保佑 
* 　　　　┃　　　┃代码无BUG！ 
* 　　　　┃　　　┗━━━┓ 
* 　　　　┃　　　　　　　┣┓ 
* 　　　　┃　　　　　　　┏┛ 
* 　　　　┗┓┓┏━┳┓┏┛ 
* 　　　　　┃┫┫　┃┫┫ 
* 　　　　　┗┻┛　┗┻┛ 
* ━━━━━━神兽出没━━━━━━by:赵楠 
*/ 
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex); 
const ADD_COUNT = 'ADD_COUNT';  //用常量代替事件类型。使代码更清晰。
const REMOVE_COUNT = 'REMOVE_COUNT';
// 注册状态管理全局参数
export default new Vuex.Store({
  state:{
    user:{
      tel:'',
      pw:'',
      id:''
    }
  },
  mutations: {
    //写法与getters相类似
    //组件想要对于vuex 中的数据进行的处理
    //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
    //内部操作必须在此刻完成(同步)
    [ADD_COUNT] (state, user){
      sessionStorage.setItem('user', JSON.stringify(user));
      state.user = user
    },
    [REMOVE_COUNT] (state, user){
      sessionStorage.removeItem('user',JSON.stringify(user));
      state.user = user
    }
  }
})
