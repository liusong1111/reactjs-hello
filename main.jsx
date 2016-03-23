var React = require('react');
var ReactDOM = require('react-dom');
import styles from "./hello1.css";
import styles1 from "./hello2.css";
import Window from './Window.jsx'
import Box from './Box.jsx'

ReactDOM.render(
  <div><Window /> :: <Box /></div>,
  document.getElementById('example')
);
