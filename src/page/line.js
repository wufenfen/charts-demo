/**
 * @author fenfen.wff
 * @description 线图/面积图
 */
import React from "react"
import {
  LineD3,
  LineG2,
  LineRecharts,
  LineG2Plot,
  LineEcharts,
} from "../charts/line"

const Line = (props) => (
  <div>
    <div>
      <div> d3版本 </div>
      <LineD3 />
    </div>
    <div>
      <div> recharts版本 </div>
      <LineRecharts />
    </div>
    <div>
      <div> g2版本 </div>
      <LineG2 />
    </div>
    <div>
      <div> g2plot版本 </div>
      <LineG2Plot />
    </div>
    <div>
      <div> echarts版本 </div>
      <LineEcharts />
    </div>
  </div>
)

export default Line
