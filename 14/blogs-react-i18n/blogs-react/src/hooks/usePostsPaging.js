import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actFetchArticlesAsync } from "../store/post/actions"
import Button from "../components/shared/Button"

export function usePostsPaging({
  extraParams = {}
} = {}) {
  const dispatch = useDispatch()

  const { 
    list: posts, 
    currentPage,
    totalPages,
    total
  } = useSelector(state => state.Post.articlePaging)
  const [loading, setLoading] = useState(false)
  const hasMorePost = currentPage < totalPages

  function handleLoadMore() {
    if (loading) {
      return
    }

    setLoading(true)
    const params = { 
      currentPage: currentPage + 1,
      ...extraParams
    }
    dispatch(actFetchArticlesAsync(params))
      .then(() => {
        setLoading(false)
      })
  }

  function renderButtonLoadMore() {
    return hasMorePost && (
      <div className="text-center">
        <Button 
          type="primary" 
          size="large" 
          loading={loading}
          onClick={handleLoadMore}
        >Tải thêm</Button>
      </div>
    )
  }

  return {
    posts,
    total,
    renderButtonLoadMore
  }
}