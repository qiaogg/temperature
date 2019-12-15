<template>
  <div >
    <el-container id="Main">
      <el-header>
        <h1>杭州温度数据可视化</h1>
      </el-header>
      <el-container>
        <el-main>
          <div style="float:left;height:500px;width:400px;background:red;">
                <el-carousel height="500px">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                  </el-carousel-item>
              </el-carousel>
          </div>
          <div style="float:right;height:500px;width:450px;background:red;">
             <el-card style="width:450px">
               <h3>高温指示</h3>
               <div class="gauge" style="width:450px;height:400px"></div>
             </el-card>
          </div>
          <el-card>
            <div id="chart_example" style="width:1000px;height:600px">
            </div>
          </el-card>
          <el-card style="width:195vh"></el-card>
        </el-main>
      </el-container>
      <el-footer>
        <h5> 阳光长跑后台管理 1.0.0</h5>
       <route-link to="/table3">
          <el-button>提交</el-button>
       </route-link>
      </el-footer>
    </el-container>

  </div>
</template>
<script>
  import echarts from 'echarts'
  import  'echarts-gl'
  export default {
    name:'Table',
    data() {
      return {
        days: ['星期一', '星期二', '星期三','星期四', '星期五', '星期六', '星期日'],
        hours:['1', '2', '3', '4', '5', '6', '7','8', '9', '10','11','12','13', 
             '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        data: [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],
              [0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],
              [0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],
              [1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],
              [1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],
              [1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],
              [2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],
              [2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],
              [2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],
              [3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],
              [3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],
              [3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],
              [4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],
              [4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],
              [5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],
              [5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],
              [5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],
              [6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],
              [6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]],
              
        }
    },
    mounted() {
      let this_ = this;
      //初始化一个echart实例
      let myChart = echarts.init(document.getElementById('chart_example'));
     // let echarts2 = echarts.init(document.getElementById('gauge'));
      
      let  option1 = {
                tooltip: {},
                visualMap: {
                    max: 20,
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', 
                        '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    }
                },
                xAxis3D: {
                    type: 'category',
                    data: this.hours
                },
                yAxis3D: {
                    type: 'category',
                    data: this.days
                },
                zAxis3D: {
                    type: 'value'
                },
                grid3D: {
                    boxWidth: 200,
                    boxDepth: 80,
                    light: {
                        main: {
                            intensity: 1.2
                        },
                        ambient: {
                            intensity: 0.3
                        }
                    }
                },
                  series: [{
                      type: 'bar3D',
                      data: this.data.map(function (item) {
                          return {
                              value: [item[1], item[0], item[2]]
                          }
                      }),
                      shading: 'color',

                      label: {
                          show: false,
                          textStyle: {
                              fontSize: 16,
                              borderWidth: 1
                          }
                      },
                      
                      itemStyle: {
                          opacity: 0.4
                      },

                      emphasis: {
                          label: {
                              textStyle: {
                                  fontSize: 20,
                                  color: '#900'
                              }
                          },
                          itemStyle: {
                              color: '#900'
                          }
                      }
                  }]
              };
       // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option1);
      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener('resize',function() {myChart.resize()});
    },
    methods: {},
    watch: {},
    created() {
 
    }
  }
</script>
<style lang="scss" scoped>
#Main{
  height: 100vh;
   width: 200vh;
.el-main{
  background-color: rgb(221, 227, 233);
  .el-card{
    height: 700px;
    width: 1100px
  }
}
.el-header{
  h1{
color: #494c52;
margin-left: 800px

  }
  background-color: #EBEEF5;
}
.el-footer {
  h5{
    color: #409EFF;
  }
        background: rgb(221, 227, 233);
        h1 {
            float:left;
            padding:10px;
            padding-top:40px;
            color:rgb(107, 185, 216);
            font-size: 15px;
            text-align: left;
            margin-left: 20px;
            margin-top: 0px;
        }
        h2 {
            float:right;
            padding-right:65px;
            padding-top:40px;
            font-size: 15px;
            text-align: left;
            margin-left: 20px;
            margin-top: 0px;
            color: #B0B0B0;
        }
    }
  #chart_example{
    width: 50%;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
  } 
}
</style>