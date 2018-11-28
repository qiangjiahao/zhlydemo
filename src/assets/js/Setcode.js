
import { Sms } from '@/axios/api' //引入短信接口
export function Setcode(tel){
    Sms({                    
        tel: tel,                                
    }).then(res => {
        if(res.flag == 0){      
             this.$message({
              message: res.data.msg,
              type: 'success'
            });       
        } else{
           this.$message({
              message: res.data.msg,
              type: 'error'
            });
        } 
    }) 
}
export default {
    Setcode,
    //    倒计时
timer() {
    if (this.time > 0) {
      this.time--;
      this.btntxt=this.time+"s后重新获取";
      setTimeout(this.timer, 1000);
    } else{
      this.time=0;
      this.btntxt="获取验证码";
      this.disabled=false;
      clearInterval(this.timer);
    }
   }
}