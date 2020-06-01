import React, { Component } from 'react'
import './App.css'
import D3 from './D3'
class App extends Component {
   render() {
   return (
      <div className='App'>
      <div className='App-header'>
      <h2>d3 dashboard</h2>
      </div>
      <div>
      <D3 data={[5,9,1,3,9,8,5,3,1]} size={[500,500]} />
      </div>
      </div>
   )
   }
}
export default App