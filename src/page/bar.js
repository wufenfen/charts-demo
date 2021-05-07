/**
 * @author fenfen.wff
 * @description 柱图/条形图
 */
 import React from "react"
 import { BarD3, BarG2, BarRecharts } from "../charts/bar"
  
 
  const Bar = (props) => (
   <div>
       <div >
           <BarD3 />
       </div>
       <div >
           <BarG2 />
       </div>
       <div >
           <BarRecharts />
       </div>
   </div>
 )
 
 export default Bar