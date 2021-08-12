import { observer } from "mobx-react-lite";
import React, { useContext, useState, useEffect } from "react"
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from './http/userAPI';
import SpinnerAnimation from "./components/SpinnerAnimation";


const App = observer( () => {

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
        check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
        }).finally(() => setLoading(false))
      
    }, 2000)
  
    }, [])
  
    if (loading) {
      return <SpinnerAnimation/>
    }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
