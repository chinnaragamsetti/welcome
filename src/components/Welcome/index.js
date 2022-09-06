// Write your code himport { Component } from "react"
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}
  subscribedStatusBtn = () => {
    const {isSubscribed} = thsi.state
    if (isSubscribed === true) {
      return <button className="butt">Subscribe</button>
    }
    return <button className="butt">Subscribed</button>
  }
  render() {
    return (
      <div className="bg">
        <h1 className="h1">Welcome</h1>
        <p className="p">Thank You! Happy Learning</p>
        {this.subscribedStatusBtn()}
      </div>
    )
  }
}
export default Welcome
