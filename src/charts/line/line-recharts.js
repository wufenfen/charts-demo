/**
 * 官方示例：https://recharts.org/en-US/examples/SimpleLineChart
 * 混合图：https://recharts.org/en-US/examples/LineBarAreaComposedChart
 */
import React from "react"
import { LineChart, AreaChart, ComposedChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Line, Legend, ReferenceLine } from "recharts"

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: "Page C", uv: 2000, pv: -9800, amt: 2290, time: 9 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000, time: 10 },
  { name: "Page E", uv: null, pv: null, amt: 2181, time: 12 },
  { name: "Page F", uv: 1220, pv: 3800, amt: null, time: 16 },
  { name: "Page G", uv: 2300, pv: 4300, amt: 2100, time: 18 },
]

export const LineRecharts = (props) => (
  <div>
    <ComposedChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <Legend verticalAlign="top" height={36} />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      {/* <YAxis /> */}
      <Tooltip />
      {/* 网格线 */}
      <CartesianGrid stroke="#f5f5f5" />
      {/* 辅助线 */}
      <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" /> 
      <ReferenceLine y={0} label="Max" stroke="red" />
      <Area
        dataKey="uv"
        stroke="#ff7300"
        yAxisId={0}
        label={{ fill: "grey", fontSize: 10 }}
      />
      <Line
        type="monotone" // 曲线
        dataKey="pv"
        stroke="#387908"
        yAxisId={1}
        strokeDasharray="3 4 5 2" // 虚线
        connectNulls // 连接断点
      />
    </ComposedChart>
  </div>
)
