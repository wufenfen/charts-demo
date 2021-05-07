/**
 * @author fenfen.wff
 * @description 线图/面积图
 */
 import React from "react"
 import { LineD3, LineG2, LineRecharts } from "../charts/line"
  
 
  const Line = (props) => (
   <div>
       <div >
           <LineD3 />
       </div>
       <div >
           <LineG2 />
       </div>
       <div >
           <LineRecharts />
       </div>
   </div>
 )
 
 export default Line