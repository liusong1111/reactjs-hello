import React from 'react'
import ReactDom from 'react-dom'
import styles from './hello1.css'

export default class Window extends React.Component {
  render() {
    return (<div className={styles.hello}>hi</div>);
  }
}