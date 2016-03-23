import React from 'react'
import ReactDom from 'react-dom'
import styles from './hello2.css'

export default class Box extends React.Component {
  render() {
    return (<div className={styles.hello}>hi</div>);
  }
}