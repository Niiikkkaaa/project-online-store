import React, { useContext, useState } from 'react'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import '../css/style.css'
import { registration, login } from '../http/userAPI';

const Auth = observer( () => {
  const {user} = useContext(Context)
  const history = useHistory()
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = async() => {
    try {
      let data;
      if(isLogin) {
        data =  await login(email, password);
      } else {
        data =  await registration(email, password);
    }
      user.setUser(user)
      user.setIsAuth(true)
      history.push(SHOP_ROUTE)
    } catch(e) {
      alert(e.response.data.message)
    }
  }

  return(
    <section className="auth">
      <div className="wrapper">
        <h2 className="auth-title">
          {isLogin ? 'authorization' : 'registration'}
        </h2>

        <form method="POST" className="auth-form">
          <label for="login" className="auth-label">login</label>

          <input type="text" id="login" 
            placeholder="Enter yuor name..." className="auth-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label for="password" className="auth-label">password</label>
          <input type="text" id="password" 
            placeholder="Enter yuor password..." className="auth-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

        </form>

        <div class="flex auth-form">
          {isLogin ?
          <div className="all-text auth-label" >
            No account? <a href={REGISTRATION_ROUTE}>Sign up!</a>
          </div>
          :
          <div className="all-text auth-label">
            You has account? <a href={LOGIN_ROUTE}>Log in!</a>
          </div>
          }
          <button 
            className="button" type="reset" 
            onClick={auth}
          >
            {isLogin ? 'Enter' : 'Registration'}
          </button>
        </div>
      </div>
    </section>
  )
});

export default Auth;