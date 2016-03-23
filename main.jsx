var React = require('react');
var ReactDOM = require('react-dom');
import styles from "./hello1.css";
import styles1 from "./hello2.css";

ReactDOM.render(
  <h1 className={styles.hello}>Hello, world!</h1>,
  document.getElementById('example')
);
