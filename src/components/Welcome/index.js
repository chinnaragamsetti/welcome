// Write your code himport { Component } from "react"

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status:'Subscribe'}
  subscribedStatusBtn=()=>{
      const {status} = this.state
    if (status==='Subscribe') {
      return(
          this.setState({status:'Subscribed'}))
      )
      
    }
     return
     (
          this.setState({status:'Subscribe'}))
     )
      
  }

  render() {
    const {status} =this.state
    return (
      <div className="bg">
        <h1 className="h1">Welcome</h1>
        <p className="p">Thank You! Happy Learning</p>
        <button
          onClick={this.subscribedStatusBtn}
          type="button"
          className="butt"
        >
        {status}
        </button>
      </div>
    )
  }
}
export default Welcome
