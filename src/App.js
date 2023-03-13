import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import { UserDetails } from './pages/contextApi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SideNav from './pages/SideNav';

function App() {
const [user, setUser] = useState([]);
  const getAllUsers  = async() =>{
    try{
     const response  = await axios.get("https://panorbit.in/api/users.json");
     const result = await response.data.users
     setUser(result);
    }catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    getAllUsers();
  },[])
  return (
    <UserDetails.Provider value={user}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<UserList/>} />
      <Route exact path="/profile/:id" element={<SideNav />} />
    </Routes>
    </BrowserRouter>
    </UserDetails.Provider> 
  );
}

export default App;
