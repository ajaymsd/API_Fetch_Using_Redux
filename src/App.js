import './App.css';
import {useSelector,useDispatch} from "react-redux"
import { getUsers } from './redux/Users';
import { useEffect } from 'react';

function App() {
  const {users,loading}=useSelector((state)=>state.users);
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getUsers());
  },[])
  if(loading){
    return <h1>Loading....</h1>
  }
  return (
    <div className="App mt-5 container">
      <h1 className='text-light'>API FETCH USING createAsyncThunk</h1>
    <div className=" row p-5 justify-content-around" >
    {users.map(u=>(
      
      <div className=" col-lg-4 bg-white card p-5  ">
        <h4>#{u.id}</h4>
        <h4>{u.name}</h4>
        <p>{u.email}</p>
        <p>{u.phone}</p>
        <p>{u.address.city}</p>

      </div>
    ))}
    </div>
    </div>
    
  );
}

export default App;
