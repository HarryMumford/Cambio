import React, { Component } from 'react'
import axios from 'axios'

class Score extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'Harry',
      score: '10'
    }
  }

  createScore = e => {
    e.preventDefault()

    const data = {
      user: this.state.user,
      score: this.state.score
    }

    axios
      .post('http://localhost:8082/scores', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(data)
        console.log(err)
        console.log("Error in Score!");
      })
  }

  render() {  
    return (
      <>
        
        <button value='score' onClick={this.createScore}>Score</button>
      </>
    )
  }
}

export default Score        