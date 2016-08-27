var React = require('react');
var ConfirmBattle = require('../components/confirmBattle');
var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]);

    console.log('componentDidMount');
  },
  componentWillReceiveProps: function () {
    console.log("componentWillReceiveProps")
  },
  componentWillUnmount: function () {
    console.log("componentWillUnmount")
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        />
    );
  }

});

module.exports = ConfirmBattleContainer;
