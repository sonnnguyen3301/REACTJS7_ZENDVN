import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import DashboardPage from '../';

import DashboardPassword from '../Password';
import DashboardProfile from '../Profile';

import categoriesRoutes from './categoriesRoutes'

const dashboardRoutes = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    Icon: UserOutlined,
    Component: DashboardPage,
    exact: true
  },
  {
    path: '/dashboard/profile',
    label: 'Profile',
    Icon: VideoCameraOutlined,
    Component: DashboardProfile,
    exact: true
  },
  {
    path: '/dashboard/password',
    label: 'Change Password',
    Component: DashboardPassword,
    Icon: UploadOutlined,
    exact: true
  },
  ...categoriesRoutes
]

export default dashboardRoutes