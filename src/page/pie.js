/**
 * @author fenfen.wff
 * @description 饼图
 */
import React from "react"
import { PieD3, PieG2, PieRecharts } from "../charts/pie"
 

 const Pie = (props) => (
  <div>
      <div >
          <PieD3 />
      </div>
      <div >
          <PieG2 />
      </div>
      <div >
          <PieRecharts />
      </div>
  </div>
)

export default Pie