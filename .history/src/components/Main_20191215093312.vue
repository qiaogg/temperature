<template>
  <div >
    <el-container id="Main">
      <el-header>
        <h1>杭州温度数据可视化</h1>
      </el-header>
      <el-container>
        <el-main>
          <div style="height:400px;width:1470px;background:red;">
                <el-carousel height="400px">
                  <el-carousel-item >
                   <img style="width:1490px;height:400px" src="../assets/03.jpg" alt="">
                  </el-carousel-item>
                  <el-carousel-item >
                   <img style="width:1490px;height:400px" src="../assets/04.jpg" alt="">
                  </el-carousel-item>
                  <el-carousel-item >
                   <img style="width:1490px;height:400px" src="../assets/05.jpg" alt="">
                  </el-carousel-item>
                  <el-carousel-item >
                   <img style="width:1490px;height:400px" src="../assets/06.jpg" alt="">
                  </el-carousel-item>
              </el-carousel>
          </div>
          <div style="float:right;height:500px;width:450px;background:red;">
             <el-card style="width:450px;">
               <h3>今日温度变化</h3>
               <div id="today" style="width:400px;height:300px;padding-top:0px"></div>
               <div id="led" style="width:400px;height:300px"></div>
             </el-card>
          </div>
          <el-card style="width:1000px">
            <div id="chart_example" style="width:1000px;height:600px">
            </div>
          </el-card >
          <!--最高温度和最低温度--->
          <el-card style="height:600px;margin-top:30px">
              <div id="sum" style="width:660px;height:500px"></div>
          </el-card>
          <el-card style="width:195vh;margin-top:30px;height:650px">
            <el-tabs type="border-card">
                <el-tab-pane label="星期一">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="a1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="a2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane>
                <el-tab-pane label="星期二">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="b1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="b2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane>
                <el-tab-pane label="星期三">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="a1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="a2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane>
                <el-tab-pane label="星期四">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="a1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="a2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane>
                <el-tab-pane label="星期五">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="a1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="a2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane>
                <el-tab-pane label="星期六">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="a1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="a2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane></el-tab-pane>
                <el-tab-pane label="星期日">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="a1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="a2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-main>
      </el-container>
      <el-footer>
        <h5> 阳光长跑后台管理 1.0.0</h5>
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
        datas:  ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        data11: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        data12: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        data21: ['1','2','3','4','5','6','5','8','9','10','11','12','13','14','4','16','17','18','19','20','21','22','23','24'],
        data22: ['1','2','3','4','5','6','7','8','9','1','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        today:  ['1','2','3','4','5','6','7','8','9','1','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        dataBJ :[
                [55,9,56,0.46,18,6,1],
                [25,11,21,0.65,34,9,2],
                [56,7,63,0.3,14,5,3],
                [33,7,29,0.33,16,6,4],
                [42,24,44,0.76,40,16,5],
                [82,58,90,1.77,68,33,6],
                [74,49,77,1.46,48,27,7],
                [78,55,80,1.29,59,29,8],
                [267,216,280,4.8,108,64,9],
                [185,127,216,2.52,61,27,10],
                [39,19,38,0.57,31,15,11],
                [41,11,40,0.43,21,7,12],
                [64,38,74,1.04,46,22,13],
                [108,79,120,1.7,75,41,14],
                [108,63,116,1.48,44,26,15],
                [33,6,29,0.34,13,5,16],
                [94,66,110,1.54,62,31,17],
                [186,142,192,3.88,93,79,18],
                [57,31,54,0.96,32,14,19],
                [22,8,17,0.48,23,10,20],
                [39,15,36,0.61,29,13,21],
                [94,69,114,2.08,73,39,22],
                [99,73,110,2.43,76,48,23],
                [31,12,30,0.5,32,16,24],
                [42,27,43,1,53,22,25],
                [154,117,157,3.05,92,58,26],
                [234,185,230,4.09,123,69,27],
                [160,120,186,2.77,91,50,28],
                [134,96,165,2.76,83,41,29],
                [52,24,60,1.03,50,21,30],
                [46,5,49,0.28,10,6,31]
              ],

        }
    },
    mounted() {
      let this_ = this;
      var lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };

var dataGZ = [
    [26,37,27,1.163,27,13,1],
    [85,62,71,1.195,60,8,2],
    [78,38,74,1.363,37,7,3],
    [21,21,36,0.634,40,9,4],
    [41,42,46,0.915,81,13,5],
    [56,52,69,1.067,92,16,6],
    [64,30,28,0.924,51,2,7],
    [55,48,74,1.236,75,26,8],
    [76,85,113,1.237,114,27,9],
    [91,81,104,1.041,56,40,10],
    [84,39,60,0.964,25,11,11],
    [64,51,101,0.862,58,23,12],
    [70,69,120,1.198,65,36,13],
    [77,105,178,2.549,64,16,14],
    [109,68,87,0.996,74,29,15],
    [73,68,97,0.905,51,34,16],
    [54,27,47,0.592,53,12,17],
    [51,61,97,0.811,65,19,18],
    [91,71,121,1.374,43,18,19],
    [73,102,182,2.787,44,19,20],
    [73,50,76,0.717,31,20,21],
    [84,94,140,2.238,68,18,22],
    [93,77,104,1.165,53,7,23],
    [99,130,227,3.97,55,15,24],
    [146,84,139,1.094,40,17,25],
    [113,108,137,1.481,48,15,26],
    [81,48,62,1.619,26,3,27],
    [56,48,68,1.336,37,9,28],
    [82,92,174,3.29,0,13,29],
    [106,116,188,3.628,101,16,30],
    [118,50,0,1.383,76,11,31]
];

var dataSH = [
    [91,45,125,0.82,34,23,1],
    [65,27,78,0.86,45,29,2],
    [83,60,84,1.09,73,27,3],
    [109,81,121,1.28,68,51,4],
    [106,77,114,1.07,55,51,5],
    [109,81,121,1.28,68,51,6],
    [106,77,114,1.07,55,51,7],
    [89,65,78,0.86,51,26,8],
    [53,33,47,0.64,50,17,9],
    [80,55,80,1.01,75,24,10],
    [117,81,124,1.03,45,24,11],
    [99,71,142,1.1,62,42,12],
    [95,69,130,1.28,74,50,13],
    [116,87,131,1.47,84,40,14],
    [108,80,121,1.3,85,37,15],
    [134,83,167,1.16,57,43,16],
    [79,43,107,1.05,59,37,17],
    [71,46,89,0.86,64,25,18],
    [97,71,113,1.17,88,31,19],
    [84,57,91,0.85,55,31,20],
    [87,63,101,0.9,56,41,21],
    [104,77,119,1.09,73,48,22],
    [87,62,100,1,72,28,23],
    [168,128,172,1.49,97,56,24],
    [65,45,51,0.74,39,17,25],
    [39,24,38,0.61,47,17,26],
    [39,24,39,0.59,50,19,27],
    [93,68,96,1.05,79,29,28],
    [188,143,197,1.66,99,51,29],
    [174,131,174,1.55,108,50,30],
    [187,143,201,1.39,89,53,31]
];

      //初始化一个echart实例
      let myChart = echarts.init(document.getElementById('chart_example'));
      let sums = echarts.init(document.getElementById('sum'));
      let echarts_today = echarts.init(document.getElementById('today'));
      let les = echarts.init(document.getElementById('led'));
      let chart11 = echarts.init(document.getElementById('a1'));
      let chart12 = echarts.init(document.getElementById('a2'));
      let chart21 = echarts.init(document.getElementById('b1'));
      let chart22 = echarts.init(document.getElementById('b2'));
     // let echarts2 = echarts.init(document.getElementById('gauge'));
    let le = {
    backgroundColor: '#0000',
    title: {
       // text: 'AQI - 雷达图',
        left: 'center',
        textStyle: {
            color: '#eee'
        }
    },
    legend: {
        bottom: 5,
        data: ['北京', '上海', '广州'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    // visualMap: {
    //     show: true,
    //     min: 0,
    //     max: 20,
    //     dimension: 6,
    //     inRange: {
    //         colorLightness: [0.5, 0.8]
    //     }
    // },
    radar: {
        indicator: [
            {name: 'AQI', max: 300},
            {name: 'PM2.5', max: 250},
            {name: 'PM10', max: 300},
            {name: 'CO', max: 5},
            {name: 'NO2', max: 200},
            {name: 'SO2', max: 100}
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: 'rgb(238, 197, 102)'
            }
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '北京',
            type: 'radar',
            lineStyle: lineStyle,
            data: this.dataBJ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#F9713C'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.1
                }
            }
        },
        {
            name: '上海',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataSH,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#B3E4A1'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.05
                }
            }
        },
        {
            name: '广州',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataGZ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: 'rgb(238, 197, 102)'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.05
                }
            }
        }
    ]
};
     let day ={
                xAxis: {
                type: 'category',
                data: this.datas
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: this.today,
                type: 'line',
                symbol: 'triangle',
                symbolSize: 20,
                lineStyle: {
                    normal: {
                        color: 'green',
                        width: 4,
                        type: 'dashed'
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 3,
                        borderColor: 'yellow',
                        color: 'blue'
                    }
                }
            }]
        };
     let sumss = {
              title: {
                  text: '未来一周气温变化',
                  subtext: '纯属虚构'
              },
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  data:['最高气温','最低气温']
              },
              toolbox: {
                  show: true,
                  feature: {
                      dataZoom: {
                          yAxisIndex: 'none'
                      },
                      dataView: {readOnly: false},
                      magicType: {type: ['line', 'bar']},
                      restore: {},
                      saveAsImage: {}
                  }
              },
              xAxis:  {
                  type: 'category',
                  boundaryGap: false,
                  data: ['周一','周二','周三','周四','周五','周六','周日']
              },
              yAxis: {
                  type: 'value',
                  axisLabel: {
                      formatter: '{value} °C'
                  }
              },
              series: [
                  {
                      name:'最高气温',
                      type:'line',
                      barWidth: '60%',
                      boxDepth: 20,
                      data:[11, 11, 15, 13, 12, 13, 10],
                      markPoint: {
                          data: [
                              {type: 'max', name: '最大值'},
                              {type: 'min', name: '最小值'}
                          ]
                      },
                      markLine: {
                          data: [
                              {type: 'average', name: '平均值'}
                          ]
                      }
                  },
                  {
                      name:'最低气温',
                      type:'line',
                      data:[1, -2, 2, 5, 3, 2, 0],
                      markPoint: {
                          data: [
                              {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                          ]
                      },
                      markLine: {
                          data: [
                              {type: 'average', name: '平均值'},
                              [{
                                  symbol: 'none',
                                  x: '90%',
                                  yAxis: 'max'
                              }, {
                                  symbol: 'circle',
                                  label: {
                                      normal: {
                                          position: 'start',
                                          formatter: '最大值'
                                      }
                                  },
                                  type: 'max',
                                  name: '最高点'
                              }]
                          ]
                      }
                  }
              ]
          };

      let option11 = {
                xAxis: {
                    type: 'category',
                    data: this.datas
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.data11,
                    type: 'line'
                }]
            };
      let option12 = {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : this.datas,
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
                        name:'直接访问',
                        type:'bar',
                        barWidth: '100%',
                         boxDepth: 80,
                        data:this.data12
                    }
                ]
            };
            let option21 = {
                xAxis: {
                    type: 'category',
                    data: this.datas
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.data21,
                    type: 'line'
                }]
            };
      let option22 = {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : this.datas,
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
                        name:'直接访问',
                        type:'bar',
                        barWidth: '100%',
                         boxDepth: 80,
                        data:this.data22
                    }
                ]
            };
      let  option1 = {
                title: {
                          text: '未来一周气温变化',
                          subtext: '纯属虚构'
                      },
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
      chart11.setOption(option11);
      chart12.setOption(option12);
      chart21.setOption(option21);
      chart22.setOption(option22);
      sums.setOption(sumss);
      echarts_today.setOption(day);
      les.setOption(le);
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
    width: 1000px
  }
}
.el-header{
  h1{
color: #494c52;
margin-left: 600px

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