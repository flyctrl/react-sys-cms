/*
* @Author: chengbaosheng
* @Date:   2017-08-24 15:27:21
* @Last Modified by:   chengbaosheng
* @Last Modified time: 2017-08-24 15:28:13
*/
/**
 * Created by yiming on 2017/6/20.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import * as urls from '../../contants/url'
import classNames from 'classnames'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
class MamsMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'inline'
    }
  }

  getMenuItemClass(str) {
    const pathName = this.props.match.location.pathname
    if (str !== urls.HOME) {
      return classNames({
        'ant-menu-item-selected': pathName.indexOf(str) > -1
      })
    }
    return classNames({
      'ant-menu-item-selected': pathName === str
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      mode: nextProps.mode ? 'vertical' : 'inline'
    })
  }
  render() {
    return (
      <Menu mode={this.state.mode} selectedKeys={[this.props.selectedMenu]} style={{ border: 'none' }} defaultOpenKeys={['mams_sort']}>
        <MenuItem key='mams_home' className={this.getMenuItemClass(urls.HOME)}>
          <Link to={urls.HOME}><Icon type='home' />首页</Link>
        </MenuItem>
        <MenuItem key='mams_baseinfo' className={this.getMenuItemClass(urls.BASEINFO)}>
          <Link to={urls.BASEINFO}><Icon type='solution' />基础信息管理</Link>
        </MenuItem>
        <SubMenu key='mams_sort' title={<span><Icon type='video-camera' /><span>分类</span></span>}>
          <MenuItem key='mams_sub_sort' className={this.getMenuItemClass(urls.SUBSORT)}>
            <Link to={urls.SUBSORT}><Icon type='layout' />子分类</Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    )
  }
}

export default MamsMenu
