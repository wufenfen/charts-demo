/**
 * 官方示例：https://g2plot.antv.vision/zh/examples/line/basic#line
 * 开发体验特别差，热更新的时候画布都会挂掉！缩略轴变化时，曲线会出现很差的插值效果。
 * 系列兼容不够定制化，只能用key作为系列字段。
 */

import React from 'react'
import { Line, Area } from '@antv/g2plot'

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1, key: 'uv' },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3, key: 'uv' },
  { name: 'Page C', uv: 2000, pv: -9800, amt: 2290, time: 9, key: 'uv' },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, time: 10, key: 'uv' },
  { name: 'Page E', uv: 2500, pv: 4800, amt: 2181, time: 12, key: 'uv' },
  { name: 'Page F', uv: 1220, pv: 3800, amt: 2500, time: 16, key: 'uv' },
  { name: 'Page G', uv: 2300, pv: 4300, amt: 2100, time: 18, key: 'uv' },
  { name: 'Page A', pv: 4000, uv: 2400, amt: 2400, time: 1, key: 'pv' },
  { name: 'Page B', pv: 3000, uv: 1398, amt: 2210, time: 3, key: 'pv' },
  { name: 'Page C', pv: 2000, uv: -9800, amt: 2290, time: 9, key: 'pv' },
  { name: 'Page D', pv: null, uv: 3908, amt: 2000, time: 10, key: 'pv' },
  { name: 'Page E', pv: 2500, uv: 4800, amt: 2181, time: 12, key: 'pv' },
  { name: 'Page F', pv: 1220, uv: 3800, amt: 2500, time: 16, key: 'pv' },
  { name: 'Page G', pv: 2300, uv: 4300, amt: 2100, time: 18, key: 'pv' },
]

export const PieG2Plot = (props) => {
  React.useEffect(() => {
    const line = new Area('line-g2plot', {
      // Line 或者 Area 切换折线还是面积图
      height: 300,
      width: 400,
      data,
      padding: 'auto',
      xField: 'name',
      yField: 'pv',
      seriesField: 'key', // 系列字段
      xAxis: {
        tickCount: 10,
        grid: {
          // 网格线配置
          line: {
            style: {
              stroke: 'grey',
              lineWidth: 1,
              lineDash: [4, 5],
              strokeOpacity: 0.4,
            },
          },
        },
      },
      yAxis: {
        tickCount: 10,
        grid: {
          // 网格线配置
          line: {
            style: {
              stroke: 'grey',
              lineWidth: 1,
              lineDash: [4, 5],
              strokeOpacity: 0.4,
            },
          },
        },
      },
      lineStyle: {
        lineDash: [3, 5], //虚线
      },
      label: true,
      tooltip: {
        fields: ['name', 'pv'],
        shared: false, // tooltip 成组显示还是单点显示
      },
      legend: {
        layout: 'vertical',
        position: 'right',
      },
      smooth: true, // 曲线
      connectNulls: false, // 断点处理
      point: {
        size: 5,
        shape: 'diamond', // 标记点样式
        style: {
          fill: 'white',
          stroke: '#5B8FF9',
          lineWidth: 2,
        },
      },
      slider: {
        // 缩略轴
        start: 0.1,
        end: 1,
      },
      annotations: [
        {
          type: 'text',
          position: ['min', -5000],
          content: '中位数',
          offsetY: -4,
          style: {
            textBaseline: 'bottom',
          },
        },
        {
          type: 'line',
          start: ['min', -5000],
          end: ['max', -5000],
          style: {
            stroke: '#F4664A',
            lineDash: [2, 2],
          },
        },
        {
          type: 'dataMarker',
          position: ['Page D', 1216],
          text: {
            content: '2月份因逢春节水产销售需求旺盛，\n需求大增',
            style: {
              textAlign: 'left',
            },
          },
          line: {
            length: 20,
          },
          point: {
            style: {
              fill: '#f5222d',
              stroke: '#f5222d',
            },
          },
          autoAdjust: false,
        },
      ],
      interactions: [{ type: 'brush' }],
    })

    line.render()
  }, [])
  return <div id='line-g2plot'></div>
}
