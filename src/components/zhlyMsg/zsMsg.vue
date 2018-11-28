<template>
    <ul class="khgl">
        <li>
            <div class="khgl-content">
                <div>初次接触</div>
                <div>11</div>
            </div>
        </li>
        <li>
            <div class="khgl-content">
                <div>潜在客户</div>
                <div>2</div>
            </div>
        </li>
        <li>
            <div class="khgl-content">
                <div>意向客户</div>
                <div>1</div>
            </div>
        </li>
        <li>
            <div class="khgl-content">
                <div>成交客户</div>
                <div>2</div>
            </div>
        </li>
        <li>
            <div class="khgl-content">
                <div>流失客户</div>
                <div>0</div>
            </div>
        </li>
        <li>
            <div class="khgl-content">
                <div>总计</div>
                <div>16</div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'zsMsg'
}
</script>
<style scoped>
.khgl{
  padding: 20px 30px;
  background: #fff;
  overflow: hidden;
}
.khgl li{
  padding-left: 20px;
  float: left;
  min-width: 120px;
  cursor: pointer;
  box-sizing: border-box;
}
.khgl .khgl-content{
  font-size: 12px;
  margin: 5px 0;
  padding-right: 10px;
  border-right: 1px solid rgb(224, 224, 224);
}
.khgl .khgl-content div:first-child{
  width: 100%;
  min-height: 22px;
  color: #7085a1;
}
.khgl .khgl-content div:last-child{
  width: 100%;
  color: #353b4b;
  min-height: 36px;
  line-height: 36px;
  font-size: 24px;
} 
</style>


