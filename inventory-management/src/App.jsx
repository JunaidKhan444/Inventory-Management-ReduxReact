import React from 'react'
import './App.css'
import SideNav from './SideNav'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './api/userApi';

function App() {

  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(getUsers)
  }, []);

  console.log(userState.user);
  

  return (
<SideNav />
  )
}

export default App
