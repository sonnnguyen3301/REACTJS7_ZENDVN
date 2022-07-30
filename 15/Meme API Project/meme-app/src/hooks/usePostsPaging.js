import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actFetchPostAsync } from "../store/post/actions"
import Button from "../components/shared/Button"

export function usePostsPaging({
  extraParams = {}
} = {}) {
  const dispatch = useDispatch()

  const { 
    list: posts, 
    currPage,
  } = useSelector(state => state.Post.ArticlePostsPaging)
  const [loading, setLoading] = useState(false)
  

  function handleLoadMore() {
    if (loading) {
      return
    }

    setLoading(true)
    let params = { 
      currPage: currPage + 1,
      ...extraParams
    }
    dispatch(actFetchPostAsync(params))
      .then(() => {
        setLoading(false)
      })
  }

  function renderButtonLoadMore() {
    return (
        <Button 
          type="load_more" 
          loading={loading}
          onClick={handleLoadMore}
        >Xem thêm</Button>
    )
  }

  return {
    posts,
    renderButtonLoadMore
  }
}