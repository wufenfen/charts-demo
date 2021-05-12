/**
 * 官方示例：https://g2plot.antv.vision/zh/examples/line/basic#line
 */
 
 import React from "react" 
 import { Line } from '@antv/g2plot'

 const data = [
   { name: "Page A", uv: 4000, pv: 2400, amt: 2400, time: 1 },
   { name: "Page B", uv: 3000, pv: 1398, amt: 2210, time: 3 },
   { name: "Page C", uv: 2000, pv: -9800, amt: 2290, time: 9 },
   { name: "Page D", uv: 2780, pv: 3908, amt: 2000, time: 10 },
   { name: "Page E", uv: 2500, pv: 4800, amt: 2181, time: 12 },
   { name: "Page F", uv: 1220, pv: 3800, amt: 2500, time: 16 },
   { name: "Page G", uv: 2300, pv: 4300, amt: 2100, time: 18 },
 ]
 
 export const LineG2Plot = (props) => {
   React.useEffect(() => {
    const line = new Line('line-g2plot', {
      height: 300, 
      width: 400,
      data,
      padding: 'auto',
      xField: 'name',
      yField: 'pv', 
      lineStyle: {
        lineDash: [3,5]
      },
      label: true,
      tooltip: {
        fields: ['name', 'pv', 'uv'],
      }
    });

    line.render();
   }, [])  
   return <div id="line-g2plot"></div>
 }
 