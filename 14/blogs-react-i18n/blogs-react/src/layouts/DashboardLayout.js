import 'antd/dist/antd.css';
import './DashboardLayout.css';
// import 'antd/es/style/default.css'
// import 'antd/es/layout/style/index.css'
// import 'antd/es/menu/style/index.css'
// import 'antd/es/button/style/index.css'
import {
  Switch,
  Route,
  useHistory,
  useLocation
} from "react-router-dom";

import React, { useState } from 'react';
import { Layout, Menu, Spin } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { dashboardRoutes } from '../pages/Dashboard/routes';
import { useSelector } from 'react-redux';
import { useAuthenticated } from '../hooks/useAuthenticated';

const { Header, Sider, Content } = Layout;

const handleMapMenuItems = dashboardRoute => {
  const Icon = dashboardRoute.Icon
  return {
    key: dashboardRoute.path,
    label: dashboardRoute.label,
    icon: Icon ? <Icon /> : undefined,
    children: dashboardRoute.children 
      ? dashboardRoute.children.map(handleMapMenuItems)
      : undefined
  }
}

const DashboardLayout = (props) => {
  useAuthenticated()

  const history = useHistory()
  const location = useLocation()
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(location.pathname)
  const currentUser = useSelector(state => state.Auth.currentUser)

  const menuItems = dashboardRoutes.map(handleMapMenuItems)

  if (!currentUser) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
        <Spin size="large" />
      </div>
    )
  }

  return (
    <Layout className="dashboard-layout">
      <Sider trigger={null} collapsible collapsed={isShowMenu}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenu]}
          onSelect={(params) => {
            setSelectedMenu(params.key)
          }}
          items={menuItems}
          onClick={(params) => {
            console.log('params', params)
            history.push(params.key)
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {
            isShowMenu 
              ? <MenuUnfoldOutlined className="trigger" onClick={() => setIsShowMenu(!isShowMenu)}/> 
              : <MenuFoldOutlined className="trigger" onClick={() => setIsShowMenu(!isShowMenu)}/> 
          }
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            {
              dashboardRoutes.map(dashboardRoute => {
                const Component = dashboardRoute.Component
                
                if (dashboardRoute.children) {
                  return (
                    <React.Fragment key={dashboardRoute.path}>
                      {
                        dashboardRoute.children.map(subItem => {
                          const SubComponent = subItem.Component
                          return (
                            <Route key={subItem.path} exact={subItem.exact} path={subItem.path}>
                              <SubComponent />
                            </Route>
                          )
                        })
                      }
                    </React.Fragment>
                  )
                }

                return (
                  <Route key={dashboardRoute.path} exact={dashboardRoute.exact} path={dashboardRoute.path}>
                    <Component />
                  </Route>
                )
              })
            }
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;