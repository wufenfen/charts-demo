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
      <div class="title"> d3版本 </div>
      <LineD3 />
    </div>
    <div>
      <div class="title"> recharts版本 </div>
      <LineRecharts />
    </div>
    <div>
      <div class="title"> g2版本 </div>
      <LineG2 />
    </div>
    <div>
      <div class="title"> g2plot版本 </div>
      <LineG2Plot />
    </div>
    <div>
      <div class="title"> echarts版本 </div>
      <LineEcharts />
    </div>
  </div>
)

export default Line
