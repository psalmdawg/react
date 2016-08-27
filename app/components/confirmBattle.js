var React = require('react');


function confirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <p> CONFIRMBATTLE! </p>

}

module.exports = confirmBattle;
