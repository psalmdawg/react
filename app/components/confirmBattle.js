var React = require('react');

function puke (object) {
  return <pre>{JSON.stringify(object, null, " ")}</pre>
}


function confirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <div> CONFIRMBATTLE!: {puke(props)} </div>

}

module.exports = confirmBattle;
