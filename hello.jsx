var React = require('react');
var ReactDOM = require('react-dom');

const Hello = function (props) {

  return {

    props, // set props
    render () {
    return <h1>Hello</h1>;
    }
  };

};

ReactDOM.render(<Hello/>, document.getElementById('hello'));
