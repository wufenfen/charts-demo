/**
 * 官方示例：https://g2.antv.vision/en/examples/case/line#line8
 */

import {  Chart } from '@antv/g2'
import React from "react" 

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: "Page C", uv: 2000, pv: -9800, amt: 2290, time: 9 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000, time: 10 },
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
    });

    chart.data(data);

    chart.scale({ 
      pv: {
        nice: true,
        tickCount: 8,
        min: 0,
      },
      uv: {
        nice: true,
        tickCount: 8,
        min: 0,
      }
    });

    chart.legend({
      position: 'bottom'
    });

    // chart.line().position('name*pv').color('#387908');
    chart.line().position('name*uv').color('#ff7300').label('uv', (xValue) => {
      return {
        content: xValue,
      };
    });
    chart.render();
  }, [])  
  return <div id="line-g2"></div>
}
