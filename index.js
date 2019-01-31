const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./styles.css');

class App extends React.Component {
  render() {
    return <h1 className={styles.root}>Hello World</h1>
  }
}

ReactDOM.render(document.getElementById('main'), <App />);
