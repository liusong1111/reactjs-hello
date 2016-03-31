import React from 'react'
import styles from './FFlatSelect.css'
import classNames from 'classnames'

export default class FFlatSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  handleOnClickPanel(event) {
    let willOpen = !this.state.isOpen
    this.setState({isOpen: willOpen}, () => {
      if (willOpen) {
        this.refs.dropdown.focus()
      }
    })
  }

  handleDropdownBlur(event) {
    if (event.relatedTarget && event.relatedTarget.isSameNode(this.refs.input)) {
      return
    }
    this.setState({isOpen: false})
  }

  handleOnSelectItem(event, option) {
    event.preventDefault()
    event.stopPropagation()
    this.props.onChange(option.value)
    this.setState({isOpen: false})
  }

  render() {
    let dropdownItems = this.props.options.map(option => <li key={option.value}
                                                             onClick={(event) => this.handleOnSelectItem(event, option)}
                                                             className={styles.dropdownItem}>{option.label}</li>)
    return (<div className={styles.flatSelect} onClick={this.handleOnClickPanel.bind(this)}>
      <input type="text"
             ref="input"
             readOnly="readonly"
             className={styles.inputSmall}
             value={this.props.value}
             placeholder={this.props.placeholder}
      />
      <ul ref="dropdown"
          className={classNames(styles.dropdown, {hidden: !this.state.isOpen})}
          tabIndex="0"
          onBlur={this.handleDropdownBlur.bind(this)}>
        {dropdownItems}
      </ul>
    </div>)
  }
}