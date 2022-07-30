import DashboardCategories from '../Categories';
import CategoriesEdit from '../Categories/Edit'
import CategoriesCreate from '../Categories/Create'
import CategoriesList from '../Categories/List'

import {
  OrderedListOutlined
} from '@ant-design/icons';

const categoriesRoutes = [
  {
    path: '/dashboard/categories',
    label: 'Categories',
    Component: DashboardCategories,
    Icon: OrderedListOutlined,
    exact: false,
    children: [
      { 
        path: '/dashboard/categories/edit',
        label: 'Edit', 
        Component: CategoriesEdit,
        exact: true
      },
      { 
        path: '/dashboard/categories/create',
        label: 'Create', 
        Component: CategoriesCreate,
        exact: true
      },
      { 
        path: '/dashboard/categories/list',
        label: 'All Categories', 
        Component: CategoriesList,
        exact: true
      }
    ],
  }
]

export default categoriesRoutes