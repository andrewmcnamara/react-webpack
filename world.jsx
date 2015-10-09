var React = require('react');
var ReactDOM = require('react-dom');

var World = ({species, color}) => (
  <h1>
    {species} - {color}
  </h1>
);


ReactDOM.render(<World species="alien" color="blue"/>, document.getElementById('world'));
