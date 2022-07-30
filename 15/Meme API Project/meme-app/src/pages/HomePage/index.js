import PostItem from "../../components/PostItem";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { actFetchPostAsync } from "../../store/post/actions";
import { usePostsPaging } from "../../hooks/usePostsPaging";
// import DemoButtonComp from "../../demo/DemoButtonComp";

function HomePage(){

    const dispatch = useDispatch()
    const {
        posts,
        renderButtonLoadMore
      } = usePostsPaging()
    useEffect(() => {
        dispatch(actFetchPostAsync())
    }, [dispatch])

    return(
        <>
        <PostItem posts={posts} renderButton={renderButtonLoadMore}/>
        </>
    )
}
export default HomePage