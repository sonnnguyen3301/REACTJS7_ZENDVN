import { api } from './api'

const categoryService = {
    getList(params){
        return api.call().get('/post/getListByCategory.php',{
            params: {
                ...params,
            }
        })
    },    
    getCategories(params) {
        return api.call().get('/categories/index.php', {
            params: {
                ...params
            }
        })
      },
    getCategoriesPost({
        perPage = 2,
        currPage = 1,
        ...restParams
    }= {}){
        return categoryService.getList({
            currPage: currPage,
            pagesize: perPage,
            ...restParams
        })
    }
     

  }
  
export default categoryService