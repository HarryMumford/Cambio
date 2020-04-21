import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Score from './components/Score';

class App extends Component{
  render() {
    const { player } = this.props
    return (
      <Router>
        <>
          <Route exact path='/' component={Score} />
          <button onClick={player.endTurn}>End turn</button>
          {player.turnStatus}
        </>
      </Router>
    )
  }
}

export default observer(App)
