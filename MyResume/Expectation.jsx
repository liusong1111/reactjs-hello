import React from 'react'
import _ from 'lodash-contrib'
import styles from './Expectation.css'

import FSelect from '../components/FSelect/FSelect.jsx'
import FFlatSelect from '../components/FFlatSelect/FFlatSelect.jsx'
// http://www.freekeer.com/freekeer/rest/freekeers/queryresumebasic
// accToken:C-eba74e2457d90bbc496e5834f4e67f851000004
export default class Expectation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: 'show'
    }
    this.loadData()
    this.listAllTech()
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
        <a className={styles.editButton} onClick={this.changeToEditMode.bind(this)}><i className="fa fa-edit"></i>编辑</a>
      </div>
    </div>)
  }

  handleSelectToptechValue(newValue) {
    this.setState({toptechValue: newValue, childtechValue: null})
  }

  handleSelectChildtechValue(newValue) {
    this.setState({childtechValue: newValue})
  }

  async listAllTech() {
    let response = await fetch("http://www.freekeer.com/freekeer/rest/freekeers/listAlltech")
    let json = await response.json()
    let allTech = json.data
    this.setState({allTech})
  }

  handlePopupSelectProvince(event) {
    console.log(event);
  }

  renderEdit() {
    var data = {
      toptechValue: '企业应用-Oracle顾问',
      childtechValue: 'ORACLE财务',
      expectSalary: '5000',
      cityValue: '北京'
    };
    const provinces = "北京 安徽 福建 甘肃 广东 广西 贵州 海南 河北 河南 黑龙江 湖北 湖南 吉林 江苏 江西 辽宁 内蒙古 宁夏 青海 山东 山西 陕西 上海 四川 天津 西藏 新疆 云南 浙江 重庆 香港 澳门 台湾".split(' ').map(p => ({
      value: p,
      label: p
    }))

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
            <FSelect name="toptechValue"
                     options={this.state.allTech}
                     labelKey={"name"}
                     valueKey={"id"}
                     value={this.state.toptechValue}
                     onChange={this.handleSelectToptechValue.bind(this)}
                     placeholder="请选择职位类型"/>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>职位名称：</label>
            <FSelect name="childtechValue"
                     options={this.state.toptechValue && this.state.toptechValue.value}
                     labelKey={"name"}
                     valueKey={"id"}
                     value={this.state.childtechValue}
                     onChange={this.handleSelectChildtechValue.bind(this)}
                     placeholder="请选择职位名称"/>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>最低日薪：</label>
            <input type="text" className={styles.input}/>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>到岗时间：</label>
            <FSelect name="childtechValue"
                     options={[{value:'随时到岗', label: '随时到岗'}, {value: '月内到岗', label: '月内到岗'}, {value: '考虑机会', label: '考虑机会'}, {value:'暂不考虑', label: '暂不考虑'}]}
                     value={this.state.atDate}
                     onChange={newValue => this.setState({atDate: newValue})}
                     placeholder="请选择到岗时间"/>
          </div>
          <div className={styles.fullField}>
            <label className={styles.label}>工作地：</label>
            <FFlatSelect options={provinces}
                         value={this.state.province}
                         onChange={newValue => this.setState({province: newValue})}
                         placeholder="省"/>
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

  async loadData() {
    let response = await fetch("http://www.freekeer.com/freekeer/rest/freekeers/queryresumebasic", {
      headers: {
        'accToken': 'C-eba74e2457d90bbc496e5834f4e67f851000004'
      }
    });
    let obj = await response.json()
    console.log(obj)
  }
}
