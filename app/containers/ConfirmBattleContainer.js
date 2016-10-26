import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      playersInfo: []
    }
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this)
  }

  componentDidMount() {
    const query = this.props.location.query
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: players
        })
      })
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle} />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer
