import React from "react"
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line } from "recharts"

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: "Page C", uv: 2000, pv: -9800, amt: 2290, time: 9 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000, time: 10 },
  { name: "Page E", uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: "Page F", uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: "Page G", uv: 2300, pv: 4300, amt: 2100, time: 18 },
  { name: "Page H", time: 24 },
]

export const LineEcharts = (props) => (
  <div>
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
    </LineChart>
  </div>
)
