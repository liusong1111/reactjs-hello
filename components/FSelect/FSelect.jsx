import React from 'react'
import Select from 'react-select'
//import styles from 'react-select/dist/react-select.css'
import styles from './FSelect.css'

export default class FSelect extends React.Component {
  render() {
    return (<Select clearable={false} searchable={false} noResultsText={"没有数据"} {...this.props} />)
  }
}