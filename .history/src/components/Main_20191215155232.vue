<template>
  <div >
    <el-container id="Main">
      <el-header>
          <img src="../assets/07.png" style="width:50px;height:50px;float:left;margin-left:540px;margin-top:8px">
        <h1 >杭州未来一周的温度数据可视化</h1>
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
               <h3>今日温度变化及空气质量</h3>
               <div id="today" style="width:400px;height:300px;padding-top:0px"></div>
               <div id="led" style="width:400px;height:300px"></div>
             </el-card>
          </div>
          <el-card style="width:1000px">
            <div id="chart_example" style="width:1000px;height:600px">
            </div>
          </el-card >
          <!--最高温度和最低温度--->
          <el-card style="height:600px;margin-top:30px;float:left;">
              <div id="sum" style="width:660px;height:500px"></div>
          </el-card>
          <el-card id="tem" style="float:right;height:600px;width:450px;margin-top:30px"></el-card>
          <el-card style="width:195vh;margin-top:100px;height:650px">
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
                      <div id="c1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="c2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane>
                <el-tab-pane label="星期四">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="d1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="d2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane>
                <el-tab-pane label="星期五">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="e1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="e2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane>
                <el-tab-pane label="星期六">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="f1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="f2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane></el-tab-pane>
                <el-tab-pane label="星期日">
                      <div>
                          <span style="margin-left:200px">温度变化折线图</span>
                          <span style="margin-left:700px">温度变化直方图</span>
                      </div>
                      <div id="g1" style="float:left;width:600px;height:400px;margin-top:70px"></div>
                      <div style="float:left;width: 1px;height: 500px; background: #000;"></div> 
                      <div id="g2" style="width:600px;height:500px;margin-left:700px;"></div>
                </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-main>
      </el-container>
      <el-footer>
        <h5> 温度数据可视化1.0.0</h5>
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
        hours:['1', '2', '3', '4', '5', '6', '7','8', '9', '10','11','12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        maxdata:['18','23','17','9','7','11','10'],
        mindata:['9','10','10','6','5','6','9'],
        le:[ {name: 'AQI', max: 300},
             {name: 'PM2.5', max: 250},
             {name: 'PM10', max: 300},
             {name: 'CO', max: 5},
             {name: 'NO2', max: 200},
             {name: 'SO2', max: 100}, ],
        tems: ['小于10','10~13','14~17','17~20','大于20'],
        tems_data:[{value:15, name:'小于10'},
                   {value:36, name:'10~13'},
                   {value:27, name:'14~17'},
                   {value:12, name:'17~20'},
                   {value:10, name:'大于20'} ],
        data: [[0,0,11],[0,1,11],[0,2,11],[0,3,10],[0,4,9],[0,5,9],[0,6,9],[0,7,9],[0,8,10],[0,9,12],[0,10,13],[0,11,14],[0,12,15],[0,13,15],[0,14,15],[0,15,15],[0,16,14],[0,17,13],[0,18,12],[0,19,12],[0,20,12],[0,21,11],[0,22,12],[0,23,12],
                [1,0,7],[1,1,0],[1,2,0],[1,3,11],[1,4,11],[1,5,11],[1,6,10],[1,7,9],[1,8,9],[1,9,9],[1,10,9],[1,11,10],[1,12,11],[1,13,12],[1,14,13],[1,15,14],[1,16,15],[1,17,15],[1,18,15],[1,19,14],[1,20,13],[1,21,12],[1,22,11],[1,23,12],
                [2,0,11],[2,1,11],[2,2,11],[2,3,10],[2,4,9],[2,5,9],[2,6,9],[2,7,9],[2,8,10],[2,9,11],[2,10,12],[2,11,13],[2,12,14],[2,13,15],[2,14,15],[2,15,15],[2,16,15],[2,17,14],[2,18,13],[2,19,12],[2,20,12],[2,21,12],[2,22,11],[2,23,12],
                [3,0,7],[3,1,7],[3,2,6],[3,3,6],[3,4,6],[3,5,8],[3,6,8],[3,7,8],[3,8,9],[3,9,9],[3,10,9],[3,11,9],[3,12,9],[3,13,8],[3,14,8],[3,15,7],[3,16,7],[3,17,7],[3,18,6],[3,19,6],[3,20,7],[3,21,7],[3,22,7],[3,23,7],
                [4,0,5],[4,1,6],[4,2,5],[4,3,5],[4,4,5],[4,5,6],[4,6,6],[4,7,6],[4,8,6],[4,9,7],[4,10,7],[4,11,7],[4,12,7],[4,13,7],[4,14,6],[4,15,6],[4,16,6],[4,17,6],[4,18,5],[4,19,5],[4,20,6],[4,21,6],[4,22,6],[4,23,6],
                [5,0,6],[5,1,5],[5,2,5],[5,3,5],[5,4,5],[5,5,6],[5,6,6],[5,7,6],[5,8,7],[5,9,7],[5,10,7],[5,11,7],[5,12,7],[5,13,6],[5,14,6],[5,15,6],[5,16,6],[5,17,6],[5,18,5],[5,19,5],[5,20,6],[5,21,6],[5,22,5],[5,23,6],
                [6,0,4],[6,1,3],[6,2,4],[6,3,4],[6,4,4],[6,5,5],[6,6,5],[6,7,6],[6,8,6],
                [6,9,5],[6,10,5],[6,11,6],[6,12,6],[6,13,5],[6,14,4],[6,15,4],[6,16,4],[6,17,5],
                [6,18,4],[6,19,4],[6,20,3],[6,21,2],[6,22,3],[6,23,3]],
        datas:  ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        data11: ['11','11','11','10','9','9','9','9','10','11','12','13','14','15','15','15','15','14','13','12','12','11','12','12'],
        data21: ['10','10','9','9','8','10','10','11','12','13','15','15','17','18','18','18','17','16','15','14','10','8','8','10'],
        data31: ['12','12','11','10','10','12','13','13','14','15','15','17','17','17','16','16','15','12','12','12','11','11','10','11'],
        data41: ['7','7','6','6','6','7','7','8','8','8','9','9','9','9','8','8','8','8','7','7','7','6','7','7'],
        data51: ['5','6','5','5','5','6','6','6','6','7','7','7','7','7','6','6','6','6','6','5','5','6','6','5'],
        data61: ['6','6','5','5','5','6','6','7','8','9','10','11','11','11','10','10','9','8','8','7','6','5','6','6'],
        data71: ['9','9','9','9','9','9','10','10','10','10','10','10','10','10','10','9','9','9','9','9','9','9','9','9'],
        today:  ['11','11','11','10','9','9','9','9','10','12','13','14','15','15','15','15','14','13','12','12','12','12','11','12'],
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

      //初始化一个echart实例
      let myChart = echarts.init(document.getElementById('chart_example'));
      let sums = echarts.init(document.getElementById('sum'));
      let echarts_today = echarts.init(document.getElementById('today'));
      let les = echarts.init(document.getElementById('led'));
      let tems = echarts.init(document.getElementById('tem'));
      let chart11 = echarts.init(document.getElementById('a1'));
      let chart12 = echarts.init(document.getElementById('a2'));
      let chart21 = echarts.init(document.getElementById('b1'));
      let chart22 = echarts.init(document.getElementById('b2'));
      let chart31 = echarts.init(document.getElementById('c1'));
      let chart32 = echarts.init(document.getElementById('c2'));
      let chart41 = echarts.init(document.getElementById('d1'));
      let chart42 = echarts.init(document.getElementById('d2'));
      let chart51 = echarts.init(document.getElementById('e1'));
      let chart52 = echarts.init(document.getElementById('e2'));
      let chart61 = echarts.init(document.getElementById('f1'));
      let chart62 = echarts.init(document.getElementById('f2'));
      let chart71 = echarts.init(document.getElementById('g1'));
      let chart72 = echarts.init(document.getElementById('g2'));
      let tem = {
                title : {
                    text: '本周温度分布范围',
                    subtext: '杭州',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:this.tems
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '60%',
                        center: ['50%', '60%'],
                        data:this.tems_data,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
    //空气质量图
    let le = {
            backgroundColor: '#0000',
            title: {
            // text: 'AQI - 雷达图',
                left: 'center',
                textStyle: {
                    color: '#eee'
                }
            },
            radar: {
                indicator: this.le,
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
    //未来一周的温度变化图
     let sumss = {
              title: {
                  text: '未来一周温差变化',
                  subtext: '杭州'
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
                  data:this.days
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
                      data:this.maxdata,
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
                      data:this.mindata,
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
                        barWidth: '70%',
                         boxDepth: 80,
                        data:this.data11
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
                        data:this.data21
                    }
                ]
            };
     let option41 = {
                xAxis: {
                    type: 'category',
                    data: this.datas
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.data41,
                    type: 'line'
                }]
            };
      let option42 = {
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
                        barWidth: '70%',
                         boxDepth: 80,
                        data:this.data41
                    }
                ]
            };
            //
            let option31 = {
                xAxis: {
                    type: 'category',
                    data: this.datas
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.data31,
                    type: 'line'
                }]
            };
      let option32 = {
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
                        barWidth: '70%',
                         boxDepth: 80,
                        data:this.data31
                    }
                ]
            };
            //
            let option51 = {
                xAxis: {
                    type: 'category',
                    data: this.datas
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.data51,
                    type: 'line'
                }]
            };
      let option52 = {
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
                        barWidth: '70%',
                         boxDepth: 80,
                        data:this.data51
                    }
                ]
            };
let option61 = {
                xAxis: {
                    type: 'category',
                    data: this.datas
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.data61,
                    type: 'line'
                }]
            };
      let option62 = {
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
                        barWidth: '70%',
                         boxDepth: 80,
                        data:this.data61
                    }
                ]
            };
 let option71 = {
                xAxis: {
                    type: 'category',
                    data: this.datas
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: this.data71,
                    type: 'line'
                }]
            };
      let option72 = {
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
                        barWidth: '70%',
                         boxDepth: 80,
                        data:this.data71
                    }
                ]
            };           

      let  option1 = {
                title: {
                          text: '未来一周温度变化3D图',
                          subtext: '杭州'
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
      chart31.setOption(option31);
      chart32.setOption(option32);
      chart41.setOption(option41);
      chart42.setOption(option42);
      chart51.setOption(option51);
      chart52.setOption(option52);
      chart61.setOption(option61);
      chart62.setOption(option62);
      chart71.setOption(option71);
      chart72.setOption(option72);
      sums.setOption(sumss);
      echarts_today.setOption(day);
      les.setOption(le);
      tems.setOption(tem);
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