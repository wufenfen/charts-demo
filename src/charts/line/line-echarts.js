/**
 * 官方示例：https://echarts.apache.org/examples/zh/editor.html?c=line-smooth
 */

import * as echarts from 'echarts'
import React from 'react'

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: "Page C", uv: 2000, pv: -9800, amt: 2290, time: 9 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000, time: 10 },
  { name: "Page E", uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: "Page F", uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: "Page G", uv: 2300, pv: 4300, amt: 2100, time: 18 },
]

export const LineEcharts = (props) => {
  React.useEffect(() => {
    var chartDom = document.getElementById('line-echarts')
    var myChart = echarts.init(chartDom)
    var option = {
      xAxis: {
        type: 'category',
        data: data.map(item => item.name)
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: data.map(item => item.uv),
        type: 'line',
        smooth: true
      },
      {
        data: data.map(item => item.pv),
        type: 'line',
        smooth: false
      }],
      tooltip: {
        trigger: 'item' // 'axis'
      },
    }

    option && myChart.setOption(option)
  }, [])
  return <div id="line-echarts" style={{height: 300, width: 400}}></div>
}
