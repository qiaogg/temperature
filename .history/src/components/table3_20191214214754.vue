
<template>
  <div>
   <el-card>
       <div id="chart_example" style="margin-right:2000px;width:400px;heigth:300px"></div>
   </el-card>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name:'Table',
    data() {
      return {
        data3:[10,5.6,12.5,7.8,8.4,2.5,1.2],
        data1:['周一','周二','周三','周四','周五','周六','周日'],
        color2:['#19faf6','#192cfa', '#e3fa19', '#fda617', '#fda617','#0f1961'],
        tableDate:[]
      }
    },
    mounted() {
      let this_ = this;
      //初始化一个echart实例
      let myChart = echarts.init(document.getElementById('chart_example'));
      let option = {
        color: ['#f44'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {
          type : 'shadow'
          }
        },
        xAxis : [
          {
            type : 'category',
            data : this.data1,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
        
            type:'bar',
            barWidth: '60%',
            data:this.data3,
            itemStyle: {
                 normal: {
        　　　　　　　　//这里是重点
                        color: function(params) {
                            var colorList = ['#19faf6','#192cfa', '#00ff00', '#ff0000', '#fda617','#0f1961'];
                            return colorList[params.dataIndex]
                        }
                    }
                }

          }
        ]
      };
       // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
 
      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener('resize',function() {myChart.resize()});
    },
    methods: {},
    watch: {},
    created() {
 
    }
  }
</script>
<style scoped>
  h2{
    text-align: center;
    padding: 30px;
    font-size: 18px;
   
  }
  #chart_example{
    width: 50%;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
  }
</style>