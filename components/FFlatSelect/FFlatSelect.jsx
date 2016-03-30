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

  handleInputFocus() {
    this.setState({isOpen: true})
  }

  handleInputBlur() {
    //this.setState({isOpen: false})
    console.log(document.activeElement)
  }

  render() {
    let dropdownItems = this.props.options.map(option => <li key={option.value}
                                                             onClick={() => this.props.onChange(option.value)}
                                                             className={styles.dropdownItem}>{option.label}</li>)
    return (<div className={styles.flatSelect}>
      <input type="text"
             readOnly="readonly"
             className={styles.inputSmall}
             value={this.props.value}
             placeholder={this.props.placeholder}
             onFocus={this.handleInputFocus.bind(this)}
             onBlur={this.handleInputBlur.bind(this)}
      />
      <ul ref="dropdown" className={classNames(styles.dropdown, {hidden: !this.state.isOpen})}>
        {dropdownItems}
      </ul>
    </div>)
  }
}