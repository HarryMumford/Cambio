import React, { component } from 'react'
import { link } from 'react-render-dom'
import axios from 'axios'

class Score extends component {
  constructor() {
    super()
    this.state = {
      user: '',
      score: ''
    }
  }

  render() {
    return (
      <>
        <button
          value='score'
        />
      </>
    )
  }
}

export default Score