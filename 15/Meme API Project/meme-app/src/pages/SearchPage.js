import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PostItem from "../components/PostItem";
import { getQueryStr } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { actFetchPostSearchAsync } from "../store/post/actions";
import { actFetchCategoryPostAsync } from "../store/category/actions";



function SearchPage(){
    const dispatch = useDispatch()
    const location = useLocation()
    const queryStr = getQueryStr('q', location)
    const posts = useSelector(state => state.Post.ArticlePostsSearch)
    const posts_category = useSelector(state => state.Category.ArticleCategoryChoosen)

      
    useEffect(() => {
        dispatch(actFetchPostSearchAsync({
            query: queryStr
        }))
        // dispatch(actFetchCategoryPostAsync({
        //     tagIndex: queryStr
        // }))
    }, [queryStr, dispatch])


    return(
        <>
         <PostItem posts={posts}/>
        </>
    )
}

export default SearchPage