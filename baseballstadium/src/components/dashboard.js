import React from 'react';

class Dashboard extends React.Component {
  state = {
    players: [{ id: 1, name: 'Pedro Martinez' }, { id: 2, name: 'Kai Lopez' }],
    playerAtBat: 'Pedro Matinez',
    strikesAndFouls: 0,
    balls: 0
  };

  getPlayerIndex = playerName => {
    this.state.players.forEach((player, index) => {
      if (player.name === playerName) {
        return index;
      }
    });
  };

  nextPlayer = playerName => {
    // last player in list, next player should be first player on list
    if (
      getPlayerIndex(playerName) ===
      getPlayerIndex(
        this.state.players.indexOf(
          this.state.players[this.state.players.length - 1]
        )
      )
    ) {
      this.setState({ playerAtBat: this.state.players[0].name });
    } else {
      this.setState({
        playerAtBat: this.state.players[getPlayerIndex(playerName) + 1].name
      });
    }
  };

  strikeClick = e => {
    e.preventDefault();

    if (this.state.strikesAndFouls < 2) {
      this.setState({ strikesAndFouls: this.state.strikesAndFouls++ });
    } else {
      this.setState({
        playerAtBat: nextPlayer(this.state.playerAtBat),
        strikesAndFouls: 0,
        balls: 0
      });
    }
  };

  render() {
    return (
      <>
        <div className='d-board-buttons'>
          <button onClick={e => strikeClick()}>strike</button>
          <button>ball</button>
          <button>foul</button>
          <button>hit</button>
        </div>
      </>
    );
  }

  selectPlayer = player => {
    this.setState({ selected: player.name });
  };
}

export default Dashboard;
