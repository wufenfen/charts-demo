/**
 * 官方示例：https://echarts.apache.org/examples/zh/editor.html?c=line-smooth
 * 开发体验：感觉自己是个配置工程师，echarts配置项很多很强大，只要理解了文档（非常齐全），基本可以应付很多场合。
 * 缺点在于灵活性和可定制性，只要echarts没提供的，那就不知道怎么做了。后续待研究。
 * 上手成本很低，基本会点代码就能配出个图表来，开发体验 90分。
 */

import * as echarts from 'echarts'
import React from 'react'

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: 'Page C', uv: 2000, pv: -9800, amt: 2290, time: 9 },
  { name: 'Page D', uv: null, pv: 3908, amt: 2000, time: 10 },
  { name: 'Page E', uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: 'Page F', uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: 'Page G', uv: 2300, pv: 4300, amt: 2100, time: 18 },
]

export const PieEcharts = (props) => {
  React.useEffect(() => {
    var chartDom = document.getElementById('line-echarts')
    var myChart = echarts.init(chartDom)
    var option = {
      title: {
        text: '我是echarts折线图',
        textStyle: {
          fontSize: 14,
        },
      },
      xAxis: {
        type: 'category',
        data: data.map((item) => item.name),
        name: 'name',
        //网格样式
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      yAxis: {
        type: 'value',
        name: 'uv',
        nameLocation: 'middle',
        nameGap: 50,
        splitLine: {
          //网格线
          lineStyle: {
            type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线
          },
          show: true, //隐藏或显示
        },
      },
      grid: {
        show: false,
      },
      series: [
        {
          name: '系列1',
          data: data.map((item) => item.uv),
          type: 'line',
          smooth: true, // 曲线
          symbol: 'diamond', // 标记点样式 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none' https://echarts.apache.org/zh/option.html#series-line.symbol
          symbolSize: 10,
          label: {
            // 显示标签
            show: true,
          },
          connectNulls: true, // 断点处理
          markLine: {
            // 辅助线 https://echarts.apache.org/examples/zh/editor.html?c=line-markline
            data: [
              [
                {
                  coord: ['Page A', -3000],
                },
                {
                  coord: ['Page G', -3000],
                },
              ],
            ],
          },
        },
        {
          name: '系列2',
          data: data.map((item) => item.pv),
          type: 'line',
          smooth: false,
          markPoint: {
            // 标记点：https://echarts.apache.org/zh/option.html#series-line.markPoint
            symbol: 'pin',
            symbolSize: 20,
            data: [
              {
                coord: ['Page E', 3908],
              },
            ],
          },
          lineStyle: {
            type: 'dashed', // 虚线
          },
          areaStyle: {
            // 面积图
            color: 'pink',
            opacity: 0.2,
          },
        },
      ],
      tooltip: {
        // https://echarts.apache.org/zh/option.html#tooltip.formatter
        trigger: 'item', // 'axis'
        formatter: '{b0}: {c0} 万', // tooltip显示内容
      },
      legend: {
        show: true,
        data: ['系列1', '系列2'],
        orient: 'vertical',
        right: 0,
      },
      dataZoom: [
        // 缩略轴： https://echarts.apache.org/zh/option.html#dataZoom
        {
          type: 'slider',
          start: 0,
          end: 100,
        },
      ],
    }

    option && myChart.setOption(option)
  }, [])
  return <div id='line-echarts' style={{ height: 300, width: 800 }}></div>
}
