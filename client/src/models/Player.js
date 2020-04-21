import { types } from 'mobx-state-tree'

const Player = types.model('Player', {
  name: types.string,
  starting_cards: types.number,
  isTurn: false,
})
.views(self => ({
  get turnStatus() {
    return self.isTurn ? 'Your turn' : '[name] turn'
  }
}))

export default Player