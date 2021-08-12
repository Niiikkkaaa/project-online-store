import React,  { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import '../css/style.css'

const NavBar = observer ( () => {
  const {user} = useContext(Context)
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return(
    <section className="navbar">
      <div className="wrapper flex">
        <h2 className="navbar-logo" onClick={() => history.push(SHOP_ROUTE)}>
          BeautyStore
        </h2>
        {user.isAuth ?
         <div  className="flex">
          <button className="navbar-cart"></button>
          <button className="button" onClick={() => history.push(ADMIN_ROUTE)}>admin</button>
          <button className="button" onClick={() => logOut()}>Log out</button>
        </div>
        :
        <div  className="flex">
          <button className="button " onClick={() => history.push(LOGIN_ROUTE)}>Auth</button>
        </div>
        }
      </div>
    </section>
  )
});

export default NavBar;