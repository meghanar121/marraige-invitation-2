import React, { Component } from 'react'
import './App.css'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
class D3 extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
      // fetch('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json')
      // .then(Response => Response.json())
      // .then(data => this.setState({data}));
      // console.log(this.props.data)
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart() {
      const node = this.node
      const dataMax = max(this.props.data)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 40)
      .attr('y', d => this.props.size[1]-yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 35)
      .append("title")
      .text((d)=>d)

   select(node)
   .selectAll('text')
   .data(this.props.data)
   .enter()
   .append('text')
   .attr("x", (d, i) => i * 40)
   .attr("y", (d, i) => 500 - yScale(d) )
   .attr("fill", "black")
   .text((d)=>d)
   }
render() {
   
   return <svg ref={node => this.node = node}
            width={500} height={500}>
            </svg>    
}
}
export default D3