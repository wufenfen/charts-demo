/**
 * 官方示例：https://g2.antv.vision/en/examples/case/line#line8
 * 每次保存页面热更新结果不正确，开发体验也很差。。。缩略轴调整的时候，图形过渡状态不太正常 
 * 按图形语法之外，很多也都是配置项处理。
 */

import { Chart } from '@antv/g2'
import React from "react"

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: "Page C", uv: 2000, pv: null, amt: 2290, time: 9 },
  { name: "Page D", uv: 3780, pv: 3908, amt: 2000, time: 10 },
  { name: "Page E", uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: "Page F", uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: "Page G", uv: 2300, pv: 4300, amt: 2100, time: 18 },
]

export const LineG2 = (props) => {
  React.useEffect(() => {
    const chart = new Chart({
      container: document.getElementById('line-g2'),
      autoFit: true,
      height: 300,
      width: 400
    })

    chart.data(data)

    chart.scale({ // 将两个度量的坐标轴统一
      pv: {
        nice: true,
        tickCount: 8,
        min: 0,
        max: 10000,
      },
      uv: {
        nice: true,
        tickCount: 8,
        min: 0,
        max: 10000,
      }
    })

    chart.axis('uv', false) // 隐藏第二个坐标轴

    chart.axis('name', {
      title: { }, // 坐标轴标题
      grid: { // 网格线在坐标轴配置
        line: {
          type: 'line',
          style: {
            lineDash: [1, 2, 1],
            stroke: 'grey',
            strokeOpacity: .4
          }
        }
      }
    })

    chart.axis('pv', {
      title: { },
      grid: {
        line: {
          type: 'line',
          style: {
            lineDash: [1, 2, 1],
            stroke: 'grey',
            strokeOpacity: .4
          }
        }
      }
    })
 
    chart.line({ connectNulls: false }) // 断点处理
      .position("name*pv")
      .color('#387908')
      .label('pv')
      .shape('smooth') // 曲线

    chart.point() // 折线上的标记点需要重新画一层
      .position("name*pv")
      .color('#387908')
      .size(3)

    chart.area()
      .position('name*uv')
      .color('#ff7300')

    chart.line()
      .position('name*uv')
      .color('#ff7300')
      .style({
        lineDash: [3, 3]    // 虚线
      })
      .label('uv', (xValue) => { // 显示标签
        return {
          content: xValue,
        }
      })
    chart.point()
      .position('name*uv')
      .color('#ff7300')
      .shape('diamond') // 标记点形状配置

    chart.tooltip({
      shared: true // 显示单点的tooltip还是成组的
    })

    chart.legend({
      position: 'right',
      custom: true, // 自定义图例
      offsetY: 4,
      items: [
        {
          name: 'pv',
          value: 'pv',
          marker: { symbol: 'line', style: { stroke: '#387908', lineHeight: 1, lineWidth: 7  } },
        },
        {
          name: 'uv',
          value: 'uv',
          marker: { symbol: 'line', style: { stroke: '#ff7300' } },
        },
      ],
    })
  
    chart.annotation().dataMarker({ 
      top: true,
      position: ['Page D', 3780],
      point: {
        stroke: '#387908'
      },
      text: {
        content: '全部峰值：' + 3780,
      },
      line: {
        length: 30,
      }
    })

    // 设置缩略轴
    chart.option('slider', {
      start: 0.1,
      end: 0.8,
      trendCfg: {
        isArea: false,
      },
    });

    chart.render()
  }, [])
  return <div id="line-g2"></div>
}
