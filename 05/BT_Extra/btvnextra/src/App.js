import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import {DataGitHubAsync} from './store/action'
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const users    = useSelector(state => state.data);
  useEffect(()=>{
    dispatch(DataGitHubAsync())
    // console.log('users',users);
  },[dispatch])
  

  return (
    <div className="container">
   <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Avatar</th>
      <th scope="col">Admin</th>
    </tr>
  </thead>
  <tbody>
    {users.map(userItems =>{
      return(
      <tr key={userItems.id}>
        <th scope="row">{userItems.id}</th>
        <td>{userItems.login}</td>
        <td><img width="30" height="35" src={userItems.avatar_url} alt="..."/></td>
        <td>{(userItems.site_admin)?<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>:<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>}</td>
      </tr>
      )
    })}
  </tbody>
  </table>
  </div>
  );
}

export default App;
