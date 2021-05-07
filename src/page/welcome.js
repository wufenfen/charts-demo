import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line } from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3 },
    { name: 'Page C', uv: 2000, pv: -9800, amt: 2290, time: 9 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, time: 10 },
    { name: 'Page E', uv: 2500, pv: 4800, amt: 2181, time: 12 },
    { name: 'Page F', uv: 1220, pv: 3800, amt: 2500, time: 16 },
    { name: 'Page G', uv: 2300, pv: 4300, amt: 2100, time: 18 },
    { name: 'Page H', time: 24  },
  ];
  
const Welcome = props => (
    <div>
        <h1>Welcome!</h1> 
        <p> 可视化图表研究项目，主要用d3和g2分别实现BI级别的图表。</p>
        <p> 项目仅是为了让自己保持对常用图表的手感，练手项目；不具备任何实际的项目意义。</p>
    </div>
);


export default Welcome;