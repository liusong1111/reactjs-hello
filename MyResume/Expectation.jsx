import React from 'react'
import _ from 'lodash-contrib'
import styles from './Expectation.css'

export default class Expectation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: 'show'
    }
  }

  render() {
    //return (<div>expectation</div>)
    if (this.state.mode === 'show') {
      return this.renderShow()
    } else {
      return this.renderEdit()
    }

  }

  renderShow() {
    var data = {
      toptechValue: '企业应用-Oracle顾问',
      childtechValue: 'ORACLE财务',
      expectSalary: '5000',
      cityValue: '北京'
    };

    var parts = ['toptechValue', 'childtechValue', 'expectSalary', 'cityValue'].map(attr => data[attr] ?
      <span className={styles.attrShow}>{data[attr]}</span> : null)
    parts = parts.filter(p => p)
    parts = _.interpose(parts, <span className={styles.seperator}>|</span>)


    return (<div>
      <h3 className={styles.header}>
        求职意向
      </h3>
      <div className={styles.showBody}>
        {parts}
        &nbsp;&nbsp;
        <a className={styles.editButton} onClick={this.changeToEditMode.bind(this)}><i className="fa fa-edit"></i></a>
      </div>
    </div>)
  }

  renderEdit() {
    var data = {
      toptechValue: '企业应用-Oracle顾问',
      childtechValue: 'ORACLE财务',
      expectSalary: '5000',
      cityValue: '北京'
    };

    var parts = ['toptechValue', 'childtechValue', 'expectSalary', 'cityValue'].map(attr => data[attr] ?
      <span key={attr} className={styles.attrShow}>{data[attr]}</span> : null)
    parts = parts.filter(p => p)
    parts = _.interpose(parts, <span className={styles.seperator}>|</span>)

    return (<div>
      <h3 className={styles.header}>
        求职意向
      </h3>
      <div className={styles.editForm}>
        <form action="" method="post">
          <div className={styles.field}>
            <label className={styles.label}>职位类型：</label>
            <input type="text" className={styles.input}/>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>职位名称：</label>
            <input type="text" className={styles.input}/>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>最低日薪：</label>
            <input type="text" className={styles.input}/>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>到岗时间：</label>
            <input type="text" className={styles.input}/>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>工作地：</label>
            <input type="text" className={styles.input}/>
          </div>
          <div className={styles.buttons}>
            <a className={styles.buttonSave}>保存</a>
            <a onClick={this.changeToShowMode.bind(this)} className={styles.buttonCancel}>取消</a>
          </div>
        </form>
      </div>
    </div>)
  }

  changeToEditMode() {
    this.setState({mode: 'edit'})
  }

  changeToShowMode() {
    this.setState({mode: 'show'})
  }
}
