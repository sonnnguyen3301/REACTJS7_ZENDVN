import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PostItem from "../components/PostItem";
import { getQueryStr } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCategoryPostAsync } from "../store/category/actions";



function CategoryPage(){
    const dispatch = useDispatch()
    const location = useLocation()
    const queryStr = getQueryStr('tagIndex', location)
    const posts = useSelector(state => state.Category.ArticleCategoryChoosen)

      
    useEffect(() => {
        dispatch(actFetchCategoryPostAsync({
            tagIndex: queryStr
        }))
    }, [queryStr, dispatch])


    return(
        <>
         <PostItem posts={posts}/>
        </>
    )
}

export default CategoryPage