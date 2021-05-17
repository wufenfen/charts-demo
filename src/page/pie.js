/**
 * @author fenfen.wff
 * @description 饼图
 */
import React from "react"
import { PieD3, PieRecharts, PieG2, PieG2Plot, PieEcharts } from "../charts/pie"
 

 const Pie = (props) => (
  <div>
       <div>
      线图基本组成：X\Y坐标轴、坐标轴标题、坐标轴标签；网格线；图形；标签；图例；tooltip（交互）。
      <b />
      高级组成：辅助线、标记（趋势、颜色高亮、标注）；缩略轴 <b />
      测试点：单度量数据，多度量数据；标记点样式（圆形、空心圆）；折线图和面积图切换；标签智能展示；线条曲线、直线，虚线、实线；
      <b />
      图例方向；双y轴？；单点hover还是成组hover；特殊数据是不处理、链接、0处理；
      <b />
    </div>
    <div>
      <div class="title"> d3版本 </div>
      <PieD3 />
    </div>
    <div>
      <div class="title"> recharts版本 </div>
      <PieRecharts />
    </div>
    <div>
      <div class="title"> g2版本 </div>
      <PieG2 />
    </div>
    <div>
      <div class="title"> g2plot版本 </div>
      <PieG2Plot />
    </div>
    <div>
      <div class="title"> echarts版本 </div>
      <PieEcharts />
    </div>
  </div>
)

export default Pie