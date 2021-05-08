/**
 * 官方例子；https://observablehq.com/@d3/line-chart
 */
import React from "react"
import * as d3 from 'd3' 

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: "Page C", uv: 2000, pv: -9800, amt: 2290, time: 9 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000, time: 10 },
  { name: "Page E", uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: "Page F", uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: "Page G", uv: 2300, pv: 4300, amt: 2100, time: 18 },
  { name: "Page H", time: 24 },
]

export const LineD3 = (props) => {
  const {domRef} = React.useRef(null)
  
  React.useEffect(() => {
    const margin = ({top: 20, right: 30, bottom: 30, left: 40})
    const height = 500
    const width = 800

    console.log(d3)

    const x = d3
    .domain(d3.extent(data, d => d.date))
    .range([margin.left, width - margin.right])

    const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.pv)]).nice()
    .range([height - margin.bottom, margin.top])

    const line = d3.line()
    .x(d => x(d.name))
    .y(d => y(d.pv))

    domRef.current.append("svg")          //添加一个svg元素
    .attr("width", 400)       //设定宽度
    .attr("height", 300)    //设定高度
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("d", line);
  }, [])
 
 
 return (<div ref={domRef}></div> )
}
