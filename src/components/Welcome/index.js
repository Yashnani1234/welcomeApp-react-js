// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text1: 'isSubscribed', text2: null}

  render() {
    const {text1, text2} = this.state

    let buttonEl
    if (text1 === 'isSubscribed') {
      buttonEl = <button type="submit">Subscribe</button>
      this.setState((text2: 'notSubscribed'))
    } else if (text2 === 'notSubscribed') {
      buttonEl = <button type="submit">Subscribed</button>
      this.setState((text1: 'isSubscribed'))
    }
    return (
      <div className="container">
        <h1 className="heading">Welcome </h1>
        <p>Thank you! Happy Learning</p>
        {buttonEl}
      </div>
    )
  }
}

export default Welcome
