import { types } from 'mobx-state-tree'

const Player = types.model('Player', {
  isTurn: true,
})
.actions(self => ({
  endTurn () {
    self.isTurn = false
  }
}))
.views(self => ({
  get turnStatus () {
    return self.isTurn ? 'Your turn' : '[name] turn'
  }
}))

export default Player