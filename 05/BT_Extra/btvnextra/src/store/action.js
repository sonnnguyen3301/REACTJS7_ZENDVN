import {UserList} from '../service/users'

export const GITHUB_DATALIST = 'GITHUB_DATALIST';

function DataGitHub(info) {
  return {
    type: GITHUB_DATALIST,
    payload:{
      info
    }
  };
}

export function DataGitHubAsync(
//   {
//   login
// }
) {
  return async dispatch => {
    try{
      const response = await UserList.getList({
        // login,
      })
      if(response.status === 200){
        const users = response.data
        dispatch(DataGitHub(users))
    }
    }catch(err)
    {

    }
  };
}