/**
 * 官方例子；https://observablehq.com/@d3/line-chart
 * 绘制曲线：https://observablehq.com/@d3/d3-line
 */
import React from "react"
import * as d3 from "d3"

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290, time: 9 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000, time: 10 },
  { name: "Page E", uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: "Page F", uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: "Page G", uv: 2300, pv: 4300, amt: 2100, time: 18 },
]

export const LineD3 = (props) => {
  const id = Math.ceil(Math.random() * 10)

  React.useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 10 }
    const height = 300
    const width = 400

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([margin.left, width - margin.right])

    const y = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.pv))
      .nice()
      .range([height - margin.bottom, margin.top])

    const y2 = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.uv))
      .nice()
      .range([height - margin.bottom, margin.top])

    const line = d3
      .line()
      // 绘制曲线
      .curve(d3.curveCardinal)
      .x((d) => x(d.name))
      .y((d) => y(d.pv))

    const line2 = d3
      .line()
      .x((d) => x(d.name))
      .y((d) => y2(d.uv))

    const dom = d3.select(`#line-d3-${id}`)
    if (dom) {
      const xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
        .call(g => g.select(".domain").remove())

      const yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y)
          .tickValues(d3.ticks(...y.domain(), 10)))
        .call(g => g.selectAll(".tick line").clone()
          .attr("stroke-opacity", d => d === 1 ? null : 0.2)
          .attr("x2", width - margin.left - margin.right))
        .call(g => g.select(".domain").remove())

      dom.append("g").call(xAxis)

      dom.append("g").call(yAxis)

      dom
        .attr("width", width) //设定宽度
        .attr("height", height) //设定高度
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#387908")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", line)

      dom
        .attr("width", width) //设定宽度
        .attr("height", height) //设定高度
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#ff7300")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", line2)
    }
  }, [])

  return <svg id={`line-d3-${id}`}> </svg>
}
