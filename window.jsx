import React from 'react'
import ReactDom from 'react-dom'
import styles from './hello1.css'

export default class Window extends React.Component {
  render() {
    return (<div style={style.hello} className={styles.hello}>hi</div>);
  }
}

var style = {
  hello: {
    color: '#0f0'
  }
}