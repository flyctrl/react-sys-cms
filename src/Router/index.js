/*
* @Author: chengbaosheng
* @Date:   2017-08-24 15:22:39
* @Last Modified by:   chengbaosheng
* @Last Modified time: 2017-08-24 15:30:12
*/
import React from 'react'
// import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import * as urls from '../contants/url'
import Layout from '../models/layout'
import Home from '../models/Home'
import SubSort from '../models/Sort'
import BaseInfo from '../models/baseInfo'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    breadcrumbName: '首页'
  },
  {
    path: urls.HOME,
    exact: true,
    component: Home,
    breadcrumbName: '首页'
  },
  {
    path: urls.BASEINFO,
    exact: true,
    component: BaseInfo,
    breadcrumbName: '基础信息管理'
  },
  {
    path: urls.SUBSORT,
    exact: true,
    component: SubSort,
    breadcrumbName: '子分类',
    parentPath: urls.HOME
  },
]

const RouteConfig = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={(match) => <Layout routes={ routes } match={match} content={route.component} />}
        />
      ))}
    </Switch>
  </Router>
)

export default RouteConfig
