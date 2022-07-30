import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import PostDetailPage from './pages/PostDetailPage';
import SearchCategory from './pages/SearchCategory';
import DashboardLayout from "./layouts/DashboardLayout";

import { actFetchMeAsync } from './store/auth/actions';
import { actFetchMainMenuAsync } from './store/menu/actions';
import { actFetchAllCategoriesAsync } from './store/category/actions';
import { ROUTER_POST } from "./constants";
import { dynamicActivate } from "./i18n";

function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  const lang = useSelector(state => state.App.lang);

  const isDashboard = location.pathname.startsWith('/dashboard')
  useEffect(() => {
    dynamicActivate(lang)
    console.log('lang', lang)
  }, [lang])

  useEffect(() => {
    dispatch(actFetchMeAsync())
    dispatch(actFetchMainMenuAsync())
    dispatch(actFetchAllCategoriesAsync())
  }, [dispatch])

  return (
    <div className="wrapper-content">
      { !isDashboard && <Header /> }
      <Switch>
        <Route path={ROUTER_POST}>
          <PostDetailPage />
        </Route>
        <Route path="/category/:slug">
          <SearchCategory />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/dashboard">
          <DashboardLayout />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <div className="spacing" />
      { !isDashboard && <Footer /> }
    </div>
  );
}

export default App;
