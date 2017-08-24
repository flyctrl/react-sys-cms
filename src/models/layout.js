/*
* @Author: chengbaosheng
* @Date:   2017-08-24 14:53:31
* @Last Modified by:   chengbaosheng
* @Last Modified time: 2017-08-24 14:55:55
*/
import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
import {
  Link,
  Route
} from 'react-router-dom'
import YXBreadcrunb from 'Components/Breadcrumb'
import AppMenu from '../components/Menus'
import style from './style.css'

const { Content, Sider } = Layout

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }
  // 设置是否可收起
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  // 拓展时用
  selectMenu() {
    let pathName = this.props.match.location.pathname
    let menuName = this.getMenuName(pathName)
    switch (menuName) {
      case 'App':
        return <AppMenu match={this.props.match} selectedMenu={this.props.selectedMenu} mode={this.state.collapsed} />
      default :
        return <AppMenu match={this.props.match} selectedMenu={this.props.selectedMenu} mode={this.state.collapsed} />
    }
  }

  getMenuName(pathName) {
    if (!pathName || pathName === '/') return ''
    let reg = new RegExp(/\/(\b\w*\b)/)
    let matchName = pathName.match(reg)[1]
    let name = matchName.split('')
    name = name[0].toUpperCase() + name.slice(1).join('')
    return name
  }

  render() {
    let MainContent = this.props.content
    return (
      <Layout className={style.layout}>
        <Sider className={style.sidebar}
               trigger={null}
               collapsible
               collapsed={this.state.collapsed}>
          <div className={style.logo}>
            <Link className={style['to-home']} to='/'>
              <img src={require('../assets/logo.png')} alt='logo' />
              <span>ReactSysCms</span>
            </Link>
          </div>
          <div className={style.menu}>
            { this.selectMenu() }
          </div>
        </Sider>
        <Layout className={ this.state.collapsed ? style['main-content-collapsed'] : style['main-content']}>
          <div className={style['header']}>
            <div className={style['header-button']} onClick={this.toggle}>
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </div>
            <div className={style['right-warpper']}>
              用户信息
            </div>
          </div>
          <div style={{ padding: '0 24px 24px' }}>
            <Route render={({ location, match }) => {
              return (<YXBreadcrunb location={location} match={match} routes={this.props.routes} />)
            }}/>
            {/* <YXBreadcrunb />*/}
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <MainContent {...this.props}/>
            </Content>
          </div>
        </Layout>
      </Layout>
    )
  }
}

export default MainLayout

