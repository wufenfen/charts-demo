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
    const margin = { top: 20, right: 30, bottom: 30, left: 40 }
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
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
          return x(d.name)
        })
        .attr("cy", function (d) {
          return y(d.pv)
        })
        .attr('data', data.name + ':' + data.pv)
        .attr("r", "3px")
        .attr("fill", "white")
        .attr("stroke", "#387908")

      // 添加文本没成功！
      dom
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", function (d) {
          return x(d.name)
        })
        .attr("y", function (d) {
          return y(d.pv)
        })
        .attr("text", function (d) {
          return d.pv
        })  
        .attr("stroke", "black")
        .attr("font-size", 12)
        .attr("color", 'red')


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
        .attr('stroke-dasharray', '5,5' )
        .attr("d", line2)


        dom.selectAll("circle").on("mouseover",function(d){
          //(1)取得提示显示的位置
          var xPosition=parseFloat(d3.select(this).attr("cx"));
          var yPosition=parseFloat(d3.select(this).attr("cy"))+24;
         
          //(2)创建提示条SVG
          dom.append("text")
            .attr("id","tooltip")//设置id便于移除提示
            .attr("x",xPosition)
            .attr("y",yPosition)
            .attr("text-anchor","middle")
            .attr("font-family","sans-setif")
            .attr("font-size","11px")
            .attr("font-weight","bold")
            .text(this.__data__.name+ ': ' + this.__data__.pv);
         })
         //(3)移除提示条SVG
         .on("mouseout",function(){
            d3.select("#tooltip").remove();
         })
         
    } 
  }, [])

  return <svg id={`line-d3-${id}`}> </svg>
}
