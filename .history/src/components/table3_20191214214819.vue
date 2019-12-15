
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
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行', ],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            textStyle: {
                color: '#e54035'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
    color: ['#e54035'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            normal: {
                opacity: 0.5
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [123, 60, 25, 18, 12, 9, 2, 1],
        z: 10
    }, {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        symbolSize: 50,
        symbolOffset: [0, '-120%'],
        data: [{
            value: 123,
            symbol: pathSymbols.reindeer,
            symbolSize: [60, 60]
        }, {
            value: 60,
            symbol: pathSymbols.rocket,
            symbolSize: [50, 60]
        }, {
            value: 25,
            symbol: pathSymbols.plane,
            symbolSize: [65, 35]
        }, {
            value: 18,
            symbol: pathSymbols.train,
            symbolSize: [50, 30]
        }, {
            value: 12,
            symbol: pathSymbols.ship,
            symbolSize: [50, 35]
        }, {
            value: 9,
            symbol: pathSymbols.car,
            symbolSize: [40, 30]
        }, {
            value: 2,
            symbol: pathSymbols.run,
            symbolSize: [40, 50]
        }, {
            value: 1,
            symbol: pathSymbols.walk,
            symbolSize: [40, 50]
        }]
    }]
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