import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts';

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
        <BarChart
            width={400}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
            <XAxis dataKey="name" allowDataOverflow={true}/>
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar type="monotone" dataKey="uv" fill="#ff7300"/>
            <Bar type="monotone" dataKey="pv" fill="#387908"/>
        </BarChart>
    </div>
);


export default Welcome;