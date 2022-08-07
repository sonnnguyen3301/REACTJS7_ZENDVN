import "antd/dist/antd.css";
import './assets/bootstrap/bootstrap.min.css'
import './assets/css/style.css'

import {
  Routes,
  Route,
  // useLocation
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import { useDispatch } from "react-redux";
import UploadPage from "./pages/UploadPage";
import HistoryPostPage from "./pages/HistoryPostPage";
import SearchPage from "./pages/SearchPage";
import { useEffect } from "react";
import { actFetchCategoryAsync } from "./store/category/actions";
import CategoryPage from "./pages/CategoryPage";
import RegisterPage from "./pages/RegisterPage";
import PostDetailPage from "./pages/PostDetailPage";
import { ROUTER_POST, USER_POST } from "./constants";

function App() {
  const dispatch = useDispatch()
  // const location = useLocation()
  

  useEffect(() => {
    dispatch(actFetchCategoryAsync())
  }, [dispatch])
  
  return (
    <div className="wrapper-content">
      {/* <LoginPage/> */}
      <Header/>
      <Routes>
        <Route path={ROUTER_POST} element={<PostDetailPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/category" element={<CategoryPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/upload" element={<UploadPage />}/>
        <Route path={USER_POST} element={<HistoryPostPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/" element={<HomePage />}/>
      </Routes>
       <Footer/>
      {/* <HomePage/> */}
     
    </div>

  );
}

export default App;
