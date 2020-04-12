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
      .post('http://localhost8082/api/score', data)
      .then(res => {
        console.log('hello m8')
      })
      .catch(err => {
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